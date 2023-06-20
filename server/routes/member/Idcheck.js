const db = require('../../db');

const Idcheck = (req, res) => {
  const { user_id } = req.body; 

  try {
    const req = new RegExp(/^(?=.*?[a-z])(?=.*?[0-9]).{4,}$/);
    if(user_id.length >= 4){
      if(!req.test(user_id)){
        res.status(404).send("아이디를 영문과숫자를 포함해 4자로 적어주세요");
      }else {
        db.query("select * from member where user_id=?", [user_id], (err, result) => {
          if(result[0] === undefined){
            res.status(200).send("사용가능 한 아이디입니다.");
          }else {
            res.status(404).send("존재하는 아이디입니다.");
          }
        })
      }
    }else {
      res.status(404).send("아이디는 4글자 이상 적어주세요.");
    }
  } catch (error) {
    res.status(404).send(err);
  }
   
}

module.exports = Idcheck;