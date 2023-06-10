const db = require("../../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const reissuance = (req, res) => {
  try { 
    const token = req.cookies.Refresh_Token;
    const data = jwt.verify(token, process.env.REFRESH_SECRET);
    const user = db.query("select * from member", (err, rows, fields) => {
      const userdata = rows.filter(item => {
        return item.user_id === data.id
      })[0];

      return userdata;
    })

    console.log(user);

    const access_token = jwt.sign({
      id: user.user_id,
      username: user.user_name,
      point: user.point
    }, process.env.ACCESS_SECRET, {
      expiresIn : '1m',
      issuer : "About Tech",
    })

    res.set("Authorization", "Bearer " + access_token);
    res.status(200).json("성공");

  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = reissuance;