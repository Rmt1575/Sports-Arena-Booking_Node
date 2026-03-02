//create an object of express router
const router = require("express").Router()

//require the employee controller
const employeeController = require("../controllers/EmployeeController")
router.get("/employeetest",employeeController.getEmployees)
router.get("/employeedata",employeeController.getEmployeeData)
router.get("/employees",employeeController.getAllEmployees)
router.get("/employees/:id",employeeController.getEmployeeById)

module.exports = router;
