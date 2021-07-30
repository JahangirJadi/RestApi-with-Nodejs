const sql = require("./db.js")

const UserInfo = function(user){
    this.DeviceMac = user.DeviceMac;
    this.Longitude = user.Longitude;
    this.Latitude = user.Latitude;
    this.CreatedDate = user.CreatedDate;
    this.Login = user.Login;
}

UserInfo.create = (userInfo, result)=>{
sql.query("INSERT INTO userinfo SET ?",userInfo, (err,res)=>{
    if(err){
        console.log("error: ",err);
        result(err,null)
        return;
    }

    console.log("created user: ", { id: res.insertId, ...userInfo });
    result(null, { id: res.insertId, ...userInfo });

})
}

UserInfo.findById = (Id,result) => {
    sql.query(`SELECT * FROM userinfo where Id = ${Id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("userlist: ", res);
      result(null, res);
    });
  };

UserInfo.getAll = result => {
    sql.query("SELECT * FROM userinfo", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("userlist: ", res);
      result(null, res);
    });
  };

  module.exports = UserInfo;