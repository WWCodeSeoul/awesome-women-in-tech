/**
 * Markdown table to json
 * 
 * Last update : 2018.08.04
 * @author : Yeonwoo Jo
 * Copyright (c) 2018 Women Who Code Seoul
 * MIT License
 * 
 * !! Must include header in table. !!
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = './out';
const TABLE_REGEX = /\s*## (.+)\n+(\|(?:(?:[^\r\n\|]*)\|)+\r?)\n\|(?:(?::?-+:?)\|)+\r?\n((?:\|(?:(?:[^\r\n\|]*)\|)+\r?\n)+)/gm;
const FILENAME_REGEX = /\/?([\w, ,-]+\.(?:markdown|md))$/i;

/**
 * Parse table and write json file
 * @param {string} filePath example) './path/to/fileName.ext' * 
 * @return {boolean} return true when success
 */
const parser = (filePath, outPath = OUTPUT_PATH) => {
  const checkFile = FILENAME_REGEX.exec(filePath);
  
  // Could not find markdown file
  if (!checkFile) {
    console.error('There is no markdown file to read');
    return false;
  }
  
  const doc = fs.readFileSync(path.resolve(__dirname, filePath)).toString();
  const result = [];
  let table;
  // group1 = table name
  // group2 = table header
  // group3 = table body
  while((table = TABLE_REGEX.exec(doc)) !== null) {    
    const newTable = {};
    newTable.indexChar = table[1]; // group1
    newTable.body = [];
    const headerItem = table[2].split('|'); // group2
    const contents = table[3].split('\n');
    for (content of contents) {
      if (content.trim() === '') continue;
      const items = content.split('|');
      const row = {};
      for (headerIndex in headerItem) {
        if (headerItem[headerIndex] === '') continue;
        row[headerItem[headerIndex]] = items[headerIndex];
      }
      newTable.body.push(row);
    }
    result.push(newTable)
  }


  const output = JSON.stringify(result, null, 2);
  const fileName = checkFile[1] // Group one (file.md | file.markdown);
  fs.writeFileSync(path.resolve(__dirname, `${outPath}/${fileName}.json`), output);
  return true;
}

module.exports = parser;