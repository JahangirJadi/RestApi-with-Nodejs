const UserInfo = require("../models/userinfo.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    console.log("USER INCOMING DATA::::"+req.body.Login)

 // Create a User
 const userInfo = new UserInfo({
    Login: req.body.Login,
    DeviceMac: req.body.DeviceMac,
    Longitude: req.body.Longitude,
    Latitude: req.body.Latitude,
    CreatedDate: req.body.CreatedDate
  });

 // Save UserInfo in the database
 UserInfo.create(userInfo, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding userInfo."
      });
    else res.send(data);
  });


}


exports.findOne = (req, res) => {
    UserInfo.findById(req.params.Id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.Id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving user with id " + req.params.Id
          });
        }
      } else res.send(data);
    });
  };


exports.findAll = (req, res) => {
    UserInfo.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving userInfo."
        });
      else res.send(data);
    });
  };

