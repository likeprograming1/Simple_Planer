const express = require("express");
const login = require("../routes/member/login");
const reissuance = require("../routes/member/reissuance");
const signup = require("../routes/member/signup");
const repwd = require("../routes/member/repwd");
const router = express.Router();

// 로그인
router.post('/login', login);

// 토큰 재발급;
router.post('/refresh', reissuance);

// 회원가입
router.post("/signup", signup);

// 비밀번호 찾기
router.post("/repwd", repwd);
module.exports = router;