
const logout = (req, res) => {
  console.log("로그아웃 성공");
  res.cookie("Refresh_Token", "");
  res.status(200).send();
}

module.exports = logout;