const express = require('express');
const cookieParser = require('cookie-parser');

const resxData = require('./src/js/resx-parse');
const convert_request_headers_language = require('./src/js/lang_converter');
const generateHomePageHTML = require('./src/js/generating_html');

const app = express();
app.use(cookieParser());

const port = 3000

app.get('/', (req, res) => {
    const requestHeaders_language = req.headers['accept-language'];
    const lang = req.cookies.language || convert_request_headers_language(requestHeaders_language);

    if (lang in resxData) {
        const html = generateHomePageHTML(lang);
        res.send(html);
    } else {
        const defaultLang = 'en-US';
        res.cookie('language', defaultLang, { maxAge: 2592000000 });
        const html = generateHomePageHTML(defaultLang);
        res.send(html);
    }
})

app.listen(port, () => {
    console.log(`Express : running | listenPort:${port}`);
});