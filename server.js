const express = require("express");

const app = express();

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "test"
  };

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Test application." });
  });

  require("./app/routes/userinfo.routes.js")(app);
  
  // set port, listen for requests
  app.listen(4567, () => {
    console.log("Server is running on port 4567.");
  });