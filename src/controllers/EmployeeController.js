//API Creation (Get API) for employees

//test API
const getEmployees = (req, res) => {
  console.log("Get Employees API is called...");
  res.send("Get Employees API is called...");
};

//dummy object of employee
const getEmployeeData = (req, res) => {
  const employeeObj = {
    id: 1,
    name: "Mihir",
    email: "mihir@gmail.com",
    age: 25,
    salary: 50000,
  };

  res.json({
    message: "Get Employee Data!!",
    data: employeeObj,
  });
};

//dummy array of employees
const employees = [
  {
    id: 1,
    name: "Mihir",
    email: "maggi@gmail.com",
    age: 25,
    salary: 50000,
  },
  {
    id: 2,
    name: "Mox",
    email: "momo@gmail.com",
    age: 28,
    salary: 60000,
  },
  {
    id: 3,
    name: "Rushang",
    email: "rushi@gmail.com",
    age: 21,
    salary: 65000,
  },
  {
    id: 4,
    name: "Rutvik",
    email: "rutu@gmail.com",
    age: 23,
    salary: 55000,
  },
  {
    id: 5,
    name: "Santosh",
    email: "santu@gmail.com",
    age: 24,
    salary: 50000,
  },
];

const getAllEmployees = (req, res) => {
  res.json({
    message: "All Employees data!!",
    data: employees,
  });
};

//get employee by id from dummy array of employees

const getEmployeeById = (req, res) => {
  const foundEmployee = employees.find((employee) => employee.id == req.params.id);
  if (foundEmployee) {
    res.json({
      message: `Employee with id ${req.params.id} is found!!`,
      data: foundEmployee,
    });
  } else {
    res.json({
      message: `Employee with id ${req.params.id} is not found!!`,
    });
  }
};

module.exports = {
  getEmployees,
  getEmployeeData,
  getAllEmployees,
  getEmployeeById
};
