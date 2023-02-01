const fs = require("fs");

let userData = [];

const getAndLog = () => {
  fs.readFile("./user-data.json", "utf8", (err, data) => {
    if (err) throw err;
    userData = JSON.parse(data);

    userData.forEach((user) => {
      if (user.age > 18) {
        console.log(user);
      }
    });
  });
};

getAndLog();
