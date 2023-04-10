const path = require('path');

const resxData = require('./resx-parse');

const fileName = path.basename(__filename);

function generateHomePageHTML(lang) { // 言語に合わせてHTMlを生成
    const html = `
    <!DOCTYPE html>
    <html>
        <head>
        <title>My Webpage</title>
        </head>
        <body>
        <h1>${resxData[lang].root.data[0].value}</h1>
        <p>${resxData[lang].root.data[1].value}</p>
        </body>
    </html>
    `;
    return html;
}

console.log(`Loading complete : ${fileName}`); // このファイル全体の読み込みが終了

module.exports = generateHomePageHTML;