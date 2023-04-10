const path = require('path');

const fileName = path.basename(__filename);

function convert_request_headers_language(requestHeaders_language) { // requestHeaderの言語情報を変換
    const requestHeaders_language_divide = requestHeaders_language.split(',');
    const language_using_user = requestHeaders_language_divide[0].split(';')[0];
    return language_using_user;
}

console.log(`Loading complete : ${fileName}`); // このファイル全体の読み込みが終了

module.exports = convert_request_headers_language;