const db = require("../../db");

const signup = (req, res) => {
  try {
    const {user_id, pwd, user_name, email} = req.body;

    if(user_id !== undefined && pwd !== undefined && user_name !== undefined){
      db.query("insert into member(user_id, pwd, user_name, point, email) values (?,?,?,?,?)", [user_id, pwd, user_name, 0, email]);
    }
    
    res.status(200).json("생성완료");
  } catch (error) {
    res.status(500).json(error);
  } 

};

module.exports = signup;