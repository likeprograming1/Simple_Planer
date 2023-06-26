const express = require("express");
const userData = require("../routes/board/userdata");
const board = require("../routes/board/board");
const Myboard = require("../routes/board/myboard");
const deleteboard = require("../routes/board/deleteboard");
const writeboard = require("../routes/board/writeboard");
const router = express.Router();

// 유저정보 가져오기
router.get("/userdata", userData);

// 게시판 전부 가져오기
router.get("/data", board);

// 내가 작성한 게시판 가져오기
router.get("/myboard", Myboard);

// 게시판 삭제
router.post("/delete", deleteboard);

// 게시판 작성
router.post("/write", writeboard);

module.exports = router;