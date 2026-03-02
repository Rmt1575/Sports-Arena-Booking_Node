//create an object of express router
const router = require("express").Router()

//require the user controller
const userController = require("../controllers/UserController")


// // dummy :::
// router.get("/usertest",userController.getUsers)
// router.get("/userdata",userController.getUserData)
// router.get("/users",userController.getAllUsers)
// router.get("/users/:id",userController.getUserById)

module.exports = router;
