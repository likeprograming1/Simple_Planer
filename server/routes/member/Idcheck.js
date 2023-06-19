const db = require('../../db');

const Idcheck = (req, res) => {

  const { user_id } = req.body;

  db.query("select * from member where user_id=?", [req.body], (err, result) => {
    if(err) console.log(err);
    else console.log(result);
  })
}

module.exports = Idcheck;