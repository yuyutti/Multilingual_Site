const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    const request_language = req.headers['accept-language'];

    if(req.cookies.language){
        if(req.cookies.language === 'ja'){
            res.send(`日本語でコンテンツを表示しています`)
        }
        if(req.cookies.language === 'en-US'){
            res.send(`Content is displayed in English`)
        }
    }
    else{
        const user_lang = user_language_Translation(request_language)
        if(user_lang === 'ja'){
            res.cookie('language', 'ja', { maxAge: 2592000000 });
            res.send(`日本語でコンテンツを表示しています`)
        }
        if(user_lang === 'en-US'){
            res.cookie('language', 'en-US', { maxAge: 2592000000 });
            res.send(`Content is displayed in English`)
        }
        else{
            res.cookie('language', 'en-US', { maxAge: 2592000000 });
            res.send(`Content is displayed in English because it does not contain the language of your country`)
        }
    }
})

function user_language_Translation(request_language) {
    const languages = request_language.split(',');
    const userLanguage = languages[0].split(';')[0];
    return userLanguage
}

app.listen(3000)