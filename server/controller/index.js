const express = require("express");
const login = require("../routes/login");
const router = express.Router();

// 로그인
router.post('/login', login);

// 회원가입
router.post("/signup", );

module.exports = router;