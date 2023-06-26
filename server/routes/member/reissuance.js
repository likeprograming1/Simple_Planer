const db = require("../../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const reissuance = (req, res) => {
  try { 
      const {Refresh_Token} = req.cookies;
      const data = jwt.verify(Refresh_Token, process.env.REFRESH_SECRET);

      const access_token = jwt.sign({
        id: data.id,
        username: data.username,
        point: data.point
      }, process.env.ACCESS_SECRET, {
        expiresIn : '30m',
        issuer : "About Tech", 
      })
       
      res.set("Authorization", "Bearer " + access_token);
      res.status(200).json("성공");

  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = reissuance;