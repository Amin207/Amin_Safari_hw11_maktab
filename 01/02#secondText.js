const fs = require("fs");

const createFile = () => {
  fs.writeFile("second-text.txt", "", (err) => {
    if (err) throw err;
    console.log("The file has been created!");
  });
};

const addText = (text) => {
  fs.appendFile("second-text.txt", text, (err) => {
    if (err) throw err;
    console.log("The text has been added to the file!");
  });
};

createFile();
addText("TESTY TEST CONTENT ADDED!");
