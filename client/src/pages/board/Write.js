import { WriteSection } from "./writestyle";
import { Link, useNavigate } from "react-router-dom";
import Loginlogo from "../../images/Loginlogo.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WriteBoard } from "../../redux/action/boardAction";
const Write = () => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const user_name = useSelector((state) => state.board.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    dispatch(WriteBoard(data))
    navigate('/board');
  }


  return <WriteSection>
    <div className="box">
      <Link to="/">
        <img src={Loginlogo} alt="로고"></img>
      </Link>
      <input 
        type="text" 
        onChange={(event)=>{setTitle(event.target.value)}} 
        className="titleinput"
        placeholder="Title"
      ></input>
      <textarea 
        onChange={(event)=>{setContent(event.target.value)}}
        className="textareabox"
        placeholder="Content"
      ></textarea>
      <div className="btnbox">
        <button 
          onClick={()=>{handleSubmit([user_name, Title, Content])}} 
          className="btns"
        >Submit</button>
        <button 
          onClick={()=>{navigate('/board')}} 
          className="btns"
          >Cancle</button>
      </div>
    </div>
  </WriteSection>
}

export default Write;