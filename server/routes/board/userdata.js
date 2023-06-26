const jwt = require("jsonwebtoken");
require("dotenv").config();

const userData = (req, res) => {
  try{
    const access_token = req.headers.authorization;

    const user_data = jwt.decode(access_token,process.env.ACCESS_SECRET);

    return res.status(200).send(user_data);
      
  }catch (err) {
    return res.status(409).send("토큰을 재발급 받으세요"); 
  }
  
}

module.exports = userData;