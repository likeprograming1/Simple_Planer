const db = require("../../db");

const loginsearch = (req, res) => {
  const {email, user_name} = req.body;

  if(email !== undefined && user_name !== undefined){

    db.query(`select * from member where user_name=? and email=?`,[user_name, email], (err, rows) => {
      if(rows.length){
        res.status(200).send(`당신의 아이디는 ${rows[0].user_id}입니다.`);
      }else {
        res.status(404).send("정보가 일치하지 않거나 존재하지 않습니다.");
      }
    })

  }else {
    res.status(404).send("제대로 입력해주세요!");
  }
}

module.exports = loginsearch;