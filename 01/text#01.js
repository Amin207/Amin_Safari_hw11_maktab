const fs = require("fs");

const fileContent = "Hello World!";

fs.writeFile("text.txt", fileContent, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
