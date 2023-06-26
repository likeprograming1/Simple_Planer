const db = require("../../db");

const deleteboard = (req, res) => {

  const {board_id} = req.body;
  console.log(board_id);
  
  db.query(`delete from board where board_id=?`,[board_id]);

  res.status(200).send("삭제되었습니다.");
}

module.exports = deleteboard;