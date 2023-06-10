const db = require("../../db");

const signup = (req, res) => {
  try {
    const {user_id, pwd, user_name} = req.body;
    
    console.log(user_id + ", "+ pwd + ", " + user_name );
    if(user_id !== undefined && pwd !== undefined && user_name !== undefined){
      db.query("insert into member(user_id, pwd, user_name, point) values (?,?,?,?)", [user_id, pwd, user_name, 0]);
    }
    
    res.status(200).json("생성완료");
  } catch (error) {
    res.status(500).json(error);
  } 

};

module.exports = signup;