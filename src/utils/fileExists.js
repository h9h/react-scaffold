const fs = require('fs');

exports.fileExists = function(path) {
  try {
    fs.accessSync(path, fs.F_OK);
  } catch (e) {
    if (e) {
      return false;
    }
  }
  return true;
};