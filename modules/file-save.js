const fs = require('fs').promises;

const writeFile = (path, content) => {
  return fs.writeFile(path, content);
};

module.exports = {
  writeFile
};