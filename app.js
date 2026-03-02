// #express requires
const express = require("express"); // express module
// create an object of express app
const app = express();

//DB Connection
const dbConnection = require("./src/utils/DBConnection")
dbConnection()


//require all the routes
// const userRoutes = require("./src/routes/UserRoutes")
// app.use("/user",userRoutes)

const employeeRoutes = require("./src/routes/EmployeeRoutes")
app.use("/emp",employeeRoutes)

const productRoutes = require("./src/routes/ProductRoutes")
app.use("/product",productRoutes)

// server setup
const PORT = 4639;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
