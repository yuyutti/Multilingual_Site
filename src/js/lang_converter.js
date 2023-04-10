const path = require('path');

const filePath = __filename;
const fileName = path.basename(filePath);

function convert_request_headers_language(requestHeaders_language) {
    const requestHeaders_language_divide = requestHeaders_language.split(',');
    const language_using_user = requestHeaders_language_divide[0].split(';')[0];
    return language_using_user;
}

console.log(`Loading complete : ${fileName}`);

module.exports = convert_request_headers_language;