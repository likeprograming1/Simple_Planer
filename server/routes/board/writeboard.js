const db = require("../../db");

const writeboard = (req, res) => {

  const {user_name, board_title, board_content} = req.body;
  console.log(user_name, board_title, board_content);

  const sql = `insert into board(user_name, board_title, board_content) values(?,?,?)`;
  const values = [user_name, board_title, board_content];

  if(user_name.length !== 0 && board_title.length !== 0 && board_content.length !== 0){
    db.query(sql, values, (err, result) => {
      try {
        if(result){
          res.status(201).send("게시판 작성 성공");
        }
      } catch (error) {
        res.status(505).send(error);
      }
    }) 
  }else {
    res.status(505).send(err);
  }
  
} 

module.exports = writeboard;