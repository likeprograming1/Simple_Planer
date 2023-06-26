const db = require('../../db');
const jwt = require("jsonwebtoken");

const Myboard = (req, res) => {

  try {
    const access_token = req.headers.authorization;
    const user_data = jwt.decode(access_token,process.env.ACCESS_SECRET);
    if(access_token){
      db.query("select * from board where user_name=?",[user_data.id],(err, rows) => {
        res.status(200).send(rows.reverse() );
      });
    }
    
  } catch (error) {
    return error;
  }

}

module.exports = Myboard;