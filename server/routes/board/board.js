const db = require('../../db');

const board = (req, res) => {

  try {
    const access_token = req.headers.authorization;

    if(access_token){
      db.query("select * from board",(err, rows) => {
        res.status(200).send(rows.reverse() );
      });
    }
    
  } catch (error) {
    return error;
  }

}

module.exports = board;