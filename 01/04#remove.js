const fs = require("fs");

const removeFile = (fileName) => {
  fs.unlink(fileName, (err) => {
    if (err) throw err;
    console.log("The file has been removed!");
  });
};

removeFile("third-text.txt");
