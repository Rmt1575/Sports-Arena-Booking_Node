console.log("user.js is running...");

var userName = "MoMo";
var userAge = 21;

const userData = (i) => {
  console.log("userData is running...", i);
  return i ** 2;
};

//export userName,userAge,userData;
module.exports = {
  userName,
  userAge,
  userData,
};
