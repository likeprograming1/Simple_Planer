const nodemailer = require('nodemailer');
const db = require("../../db");

const repwd = (req, res) => {

  // 임시비밀번호 생성
  const randnum = [];

  for(let i = 0; i < 6; i++){
    randnum.push(Math.floor(Math.random()*8+1));
  }
    
  const temporary = randnum.join('');

  const { user_id, user_name, email } = req.body;
  console.log(user_id +", "+ user_name);

  if(user_id !== undefined && user_name !== undefined){
    const user = db.query("select * from member where user_id=? and user_name=?", [user_id, user_name], (err, rows) => {
      
      const usermail = rows[0].email;

      if(usermail !== undefined && usermail === email){
        
        console.log(usermail+", "+temporary);

        // 이메일 연결
        const transporter = nodemailer.createTransport({
          service: "Naver", // 이용할 서비스
          auth: {
              user: "hsj2216@naver.com",
              pass: process.env.PASS
          },
          tls: {
              rejectUnauthorized: false
          }
        });

        // 보내는 곳 지정
        const mailOptions = {
          from: "Simple_Planer <hsj2216@naver.com>",
          to: usermail,
          subject: '고객님의 임시비밀번호를 발급해드렸습니다.',
          html: '<h2>'+rows[0].user_name +'님의 임시비밀번호는 </h2> <h1>' + temporary + '입니다.</h1>'
        };

        // 메일 보내는 코드
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err);
            return false;
          } else {
            console.log('Email sent: ' + usermail);
            console.log("새로운 비밀번호가 발송되었습니다.");
            return true;
          }
        }); 
        
        // 임시 비밀번호로 바꾸는 코드
        db.query(`update member set pwd=${temporary} where user_id='${rows[0].user_id}'`);
        
        res.status(200).json(usermail);
      }else {
        if(usermail !== email){
          res.status(500).json("email이 다릅니다.");
        }else {
          res.status(500).json(err);
        }
      }
      return user;
    });
  }else {
      res.status(500).json("Error");
  }
};

module.exports = repwd;