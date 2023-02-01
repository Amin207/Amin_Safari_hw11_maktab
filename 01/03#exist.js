const fs = require("fs");

const checkExistense = (fileName) => {
  fs.access(fileName, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("The file doesn't exist");
    } else {
      console.log("The file exists");
    }
  });
};

checkExistense("test.txt");
