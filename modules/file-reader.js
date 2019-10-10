const fs = require('fs').promises;

const readFile = () => {
  return fs.readFile(process.argv[2], { encoding: 'utf-8' });
};

module.exports = {
  readFile
};