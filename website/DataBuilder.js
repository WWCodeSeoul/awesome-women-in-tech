const parser = require('./MarkdownTableToJson');
const OUTPUT_PATH = './src/resource';

for (let index=2; process.argv.length; index++) {
  if (process.argv[index]) {
    continue;
  }
  if (!parser(process.argv[index], OUTPUT_PATH)){
    process.exit(1);
  }
}

process.exit(0);
