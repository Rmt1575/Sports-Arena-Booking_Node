// #express requires
const express = require("express"); // express module
// create an object of express app
const app = express();

// dummy array of users
const users = [
  { id: 1, name: "Mihir", email: "maggi@gmail.com", age: 25 },
  { id: 2, name: "Rutvik", email: "rutu@gmail.com", age: 23 },
  { id: 3, name: "Mox", email: "momo@gmail.com", age: 27 },
  { id: 4, name: "Rushang", email: "rushi@gmail.com", age: 26 },
  { id: 5, name: "Santosh", email: "santu@gmail.com", age: 24 },
];

// test api , url : http:localhost:4639/test
app.get("/test", (req, res) => {
  console.log("Test API is called...");
  res.send("Test API is started!!");
});

// API Creation (Get API)
// url: http:localhost:4639/users
app.get("/users", (req, res) => {
  res.send({ message: "All Users data!!", data: users });
});

// API Creation (Get API)
// url: http:localhost:4639/users/id -- any id
app.get("/users/:id", (req, res) => {
  const id = req.params.id; // get the id from url
  const user = users.find((user) => user.id == id); // find the user with the given id
  if (user) {
    res.send({ message: `User with id ${id} is found!!`, data: user });
  } else {
    res.send({ message: `User with id ${id} is not found!!` });
  }
});

// server setup
const PORT = 4639;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
