const db = require("../../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
  const {user_id, pwd} = req.body;
  console.log(user_id, pwd);
  
  const user_Info = db.query("select * from member", (err, rows, fields) => {

    const user_In = rows.filter(item => {
      return item.user_id === user_id && item.pwd === pwd;
    })[0];
    console.log(user_In);

    if(user_In !== undefined){
      
      //access_token 발행
      const access_token = jwt.sign({
        id: user_In.user_id,
        username: user_In.user_name,
        point: user_In.point
      }, process.env.ACCESS_SECRET, {
        expiresIn : '1m',
        issuer : "About Tech",
      })

      //refresh_token 발행
      const refresh_token = jwt.sign({
        id: user_In.user_id,
        username: user_In.user_name,
        point: user_In.point
      }, process.env.REFRESH_SECRET, {
        expiresIn : '24h',
        issuer : "About Tech",
      })

      console.log("로그인 성공");
      res.set("Authorization", "Bearer " + access_token);
      res.cookie("Refresh_Token", refresh_token, {
        secure: false, 
        httpOnly : true 
      });
      res.status(200).send("로그인 성공");

    } else {
      console.log('로그인 실패')
      return res.status(403).send({message : "아이디나 비밀번호가 다릅니다."});
    }
  })

  return user_Info;
}

module.exports = login;
