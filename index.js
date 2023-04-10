const express = require('express');
const cookieParser = require('cookie-parser');

const resxData = require('./src/js/resx-parse');
const convert_request_headers_language = require('./src/js/lang_converter');
const generateHomePageHTML = require('./src/js/generating_html');

const app = express();
app.use(cookieParser());

const port = 3000

app.get('/', (req, res) => {
    const requestHeaders_language = req.headers['accept-language']; // requestHeader情報からブラウザの言語情報を取得
    const lang = req.cookies.language || convert_request_headers_language(requestHeaders_language); // cookieの言語情報がない場合requestHeaderからブラウザの言語をパースしてlangに代入する

    if (lang in resxData) { // サイトに収録されている言語にlangと同じものがあるかを検索し、有れば合致した言語でcookieを発行しHTMLを生成(cookieの期限は30日)
        res.cookie('language', lang, { maxAge: 2592000000 });
        const html = generateHomePageHTML(lang);
        res.send(html);
    } else { //ない場合次回以降英語を自動的に読み込む用にcookieに英語の情報を渡し、英語でHTMLを生成(cookieの期限は30日)
        const defaultLang = 'en-US';
        res.cookie('language', defaultLang, { maxAge: 2592000000 });
        const html = generateHomePageHTML(defaultLang);
        res.send(html);
    }
    // cookieはアクセスするたびに更新される
})

app.listen(port, () => {
    console.log(`Express : running | listenPort:${port}`);
});