const db = require("../db");

const login = (req, res) => {
  const {user_id, pwd} = req.body;

  const user_Info = db.query("select * from member", (err, rows, fields) => {

    const user = rows.filter(item => {
      return item.user_id === user_id && item.pwd === pwd;
    })

    if(!user) return console.log('로그인 성공');
    else return console.log('로그인 실패');
    console.log(user);
  })

  return user_Info;
}

module.exports = login;