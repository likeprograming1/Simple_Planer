import { Routes, Route } from "react-router-dom";
import MainDisplay from "./pages/main/MainDisplay.jsx";
import Login from "./pages/login/Login.jsx";
import { Header } from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import styled from "styled-components";
import FindId from "./pages/login/findId/FindId.jsx";
import FindPw from "./pages/login/findPw/FindPw.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Mboard from "./pages/board/Mboard.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Retoken } from "./redux/action/loginAction.js";
const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .wrapper {
    height: 100%;
    .Boxsizing {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid var(--Black);
      border-radius: 10px;
      padding: 50px 30px;
    }
  }
  Footer {
    bottom: 0;
  }
`;

function App() {
  const ac = sessionStorage.getItem("access_token");
  const dispatch = useDispatch();

  useEffect(()=>{
    if(ac){
      setInterval(()=>{
        dispatch(Retoken());
      }, 1400000);
    }
  },[])
  
  return (
    <BodyBox>
    <Header/>
    <main className="wrapper">
      <Routes >
        <Route path="/" element={<MainDisplay />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/login/findId" element={<FindId/>} />
        <Route path="/login/findPw" element={<FindPw />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/board" element={<Mboard />} />
      </Routes>
    </main>
    <Footer />
    </BodyBox>
  );
}

export default App;
