import { Box } from "./HeaderStyles";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAsync } from "../../redux/action/loginAction";

export const Header = () => {
  const IsLogin = useSelector((state) => state.login.isLogin);
  const accessToken = useSelector((state) => state.login.AccessToken);
  const dispatch = useDispatch();
  console.log(IsLogin + ", " + accessToken);

  const handleLogout = () => {
    dispatch(LogoutAsync(accessToken));
  };

  return (
    <Box>
      {IsLogin ? (
        <div className="box-main">
          <Link to="/">
            <img src={logo} alt="header logo" className="Logo"></img>
          </Link>

          <nav className="box-nav">
            <Link to="/login" className="header-btn">
              shop
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
