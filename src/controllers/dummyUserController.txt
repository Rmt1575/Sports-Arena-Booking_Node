//API Creation (Get API) for users

//test API
const getUsers = (req, res) => {
  console.log("Get Users API is called...");
  res.send("Get Users API is called...");
};

//dummy object of user
const getUserData = (req, res) => {
  const userObj = {
    id: 1,
    name: "Mihir",
    email: "mihir@gmail.com",
    age: 25,
  };

  res.json({
    message: "Get User Data!!",
    data: userObj,
  });
};

//dummy array of users
const users = [
  {
    id: 1,
    name: "Mihir",
    email: "maggi@gmail.com",
    age: 25,
  },
  {
    id: 2,
    name: "Mox",
    email: "momo@gmail.com",
    age: 28,
  },
  {
    id: 3,
    name: "Rushang",
    email: "rushi@gmail.com",
    age: 21,
  },
  {
    id: 1,
    name: "Mihir",
    email: "mihir@gmail.com",
    age: 25,
  },
  {
    id: 4,
    name: "Rutvik",
    email: "rutu@gmail.com",
    age: 23,
  },
  {
    id: 5,
    name: "Santosh",
    email: "santu@gmail.com",
    age: 24,
  },
];

const getAllUsers = (req, res) => {
  res.json({
    message: "All Users data!!",
    data: users,
  });
};

//get user by id from dummy array of users

const getUserById = (req, res) => {
  const foundUser = users.find((user) => user.id == req.params.id);
  if (foundUser) {
    res.json({
      message: `User with id ${req.params.id} is found!!`,
      data: foundUser,
    });
  } else {
    res.json({
      message: `User with id ${req.params.id} is not found!!`,
    });
  }
};

module.exports = {
  getUsers,
  getUserData,
  getAllUsers,
  getUserById
};
