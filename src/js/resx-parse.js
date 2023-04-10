const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const fileName = path.basename(__filename);

const resxDir = __dirname + '/../lang'; // サイトの言語フォルダーのパス
let resxData = {}; // 言語フォルダーから検出された言語一覧を代入

fs.readdirSync(resxDir).forEach(file => { // 言語フォルダーから言語ファイル(resx)をすべて取得(読み込み)
    const filePath = path.join(resxDir, file);
    const xmlData = fs.readFileSync(filePath, 'utf-8');

    xml2js.parseString(xmlData, (err, result) => { // 検出されたすべての言語ファイルをパース(resx => xml)
        if (err) { // error処理
            console.error(`Failed to parse ${file}:`, err);
            return;
        }
        const lang = file.split(".")[0];
        resxData[lang] = result;
        console.log(`Loading LangFile : ${file}`); // 読み込みが完了した言語ファイルを表示
    });
});
console.log(`Loading complete : ${fileName}`); // このファイル全体の読み込みが終了
module.exports = resxData;