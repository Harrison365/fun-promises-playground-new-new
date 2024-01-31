const fs = require("fs");
const path = require("path");

// do not alter this function
function readSecretFile(cb) {
  const filePath = path.join(__dirname, "../challenges/secret-message.txt");
  fs.readFile(filePath, "utf8", cb);
}

function promisifiedReadSecretFile() {
  // your code here
  return new Promise((resolve, reject) => {
    readSecretFile((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = { readSecretFile, promisifiedReadSecretFile };
