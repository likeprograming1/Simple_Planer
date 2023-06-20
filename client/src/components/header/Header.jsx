import { Box } from "./HeaderStyles";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAsync } from "../../redux/action/loginAction";
import user_profile from "../../images/user_profile.svg";
import alert from "../../images/alert.png";

export const Header = () => {
  const IsLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogoutAsync());
  };

  return (
    <Box>
      {IsLogin ? (
        <div className="box-main">
          <Link to="/">
            <img src={logo} alt="header logo" className="Logo"></img>
          </Link>

          <nav className="box-nav">
            <img src={alert} alt="알림 이미지" className="alert"></img>
            <Link to="/login" className="header-btn">
              shop
            </Link>
            <Link to="#" className="header-btn">
              <img src={user_profile} alt="유저 프로필 이미지"></img>
              user_name
            </Link>
            <Link to="/" className="header-btn" onClick={() => handleLogout()}>
              logout
            </Link>
          </nav>
        </div>
      ) : (
        <div className="box-main">
          <Link to="/">
            <img src={logo} alt="header logo" className="Logo"></img>
          </Link>

          <nav className="box-nav">
            <Link to="/login" className="header-btn">
              Login
            </Link>
            <Link to="/signup" className="header-btn">
              SignUp
            </Link>
          </nav>
        </div>
      )}
    </Box>
  );
};
