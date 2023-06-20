const db = require("../../db");

const signup = (req, res) => {
  const {user_id, pwd, repwd, user_name, email} = req.body;

  if(user_id.length && repwd.length &&  pwd.length  && user_name.length && email.length){
    const req = new RegExp(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);
    const Ereq = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);

    if(user_id.length < 4){
      res.status(404).json("아이디는 4글자 이상 적어주세요.");
    }else if(!req.test(pwd) && !req.test(repwd)){
      res.status(404).json("비밀번호는 영문,숫자 포함하여 8자이상 적어주세요.");
    }else if(pwd !== repwd){
      res.status(404).json("비밀번호가 동일하지 않습니다.");
    }else if(!Ereq.test(email)) {
      res.status(404).json("이메일 형식으로 적어주세요.");
    }else if(user_name.length < 2){
      res.status(404).json("유저네임을 2글자 이상으로 적어주세요.");
    }else {
      db.query("select * from member where user_id =? and pwd =? and user_name =? and email=?", [user_id, pwd, user_name, email], (err, rows)=>{
        if(rows.length === 0){
          db.query("insert into member(user_id, pwd, user_name, point, email) values (?,?,?,?,?)", [user_id, pwd, user_name, 0, email]);
          res.status(200).json("생성완료");
        }else {
          res.status(404).json("존재하는 아이디입니다.");
        }

      })
      
    }
    
  }else {
    return res.status(404).json("모두 입력해주세요.");
  }

}; 

module.exports = signup; 