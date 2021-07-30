module.exports = app => {
    const userInfo = require("../controllers/userinfo.controller.js")


  // Add a new userInfo
  app.post("/userInfo", userInfo.create);

    // Retrieve all userInfo
    app.get("/userInfo", userInfo.findAll);

    app.get("/userInfo/:Id", userInfo.findOne);

}