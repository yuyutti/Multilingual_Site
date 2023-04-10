const path = require('path');

const resxData = require('./resx-parse');

const filePath = __filename;
const fileName = path.basename(filePath);

function generateHomePageHTML(lang) {
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

console.log(`Loading complete : ${fileName}`);

module.exports = generateHomePageHTML;