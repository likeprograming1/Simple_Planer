const express = require("express");
const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const Rindex = require('./controller/index'); 
const cors = require("cors");
require("dotenv").config();

// 기초세팅
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieparser());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));

// 라우팅
app.use('/', Rindex);  

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
})