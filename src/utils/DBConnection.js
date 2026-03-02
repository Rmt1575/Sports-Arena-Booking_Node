const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/2026_internship_project")
    .then(() => {
      console.log("DB Connected!!");
    })
    .catch((error) => {
      console.log("DB Connection Failed!!", error);
    });
};

module.exports = dbConnection;
