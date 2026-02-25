console.log("NodeJS is running...");

var x = 10;
console.log("x = " + x);

const users = require("./users");
console.log(users);
console.log(users.userName);
console.log(users.userAge);
console.log(users.userData(5));
