import { useEffect, useState } from "react";
import BoardSection from "./style";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBoard, MyBoarData, boarData, userData } from "../../redux/action/boardAction";
import { Link, useNavigate } from "react-router-dom";
import getDayMinuteCounter from "../../components/time/time";
import update from "../../images/update.png";
import trash from "../../images/trash.png";
import { Ismodal } from "../../redux/reducer/boardSlice";
import Deletemodal from "../../components/modal/deletemodal";

const Mboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [abled, setAbled] = useState(1);
  const [Id, setId] = useState(0);
  const access_token = sessionStorage.getItem("access_token");
  const user_name = useSelector((state) => state.board.userName);
  const boardData = useSelector((state) => state.board.data);
  const modal = useSelector(state => state.board.modal);

  console.log(modal);

  useEffect(()=>{
    dispatch(userData(access_token));
    dispatch(boarData(access_token));
  },[]);

  const handleTotalboard = (token) => {
    dispatch(boarData(token));
    setAbled(1)
  }
  const handleMyboard = (token) => {
    dispatch(MyBoarData(token));
    setAbled(0);
  }

  const handleDelete = (id) => {
    setId(id)
    dispatch(Ismodal());
  }

  return <BoardSection>
    {modal ? <Deletemodal 
    navigate = {()=>{window.location.href = '/board';}}
    dispatch={()=>{dispatch(Ismodal());}}
    ondelete={()=>{dispatch(DeleteBoard(Id))}}
    onclose={() => {dispatch(Ismodal());}}
    ></Deletemodal> : null}
    <div className="head">
      <h1 className="head_title">{user_name}님 오신걸 환영합니다.</h1>
      <button className="Write">Write</button>
    </div>
    <div className="box">
      <div className="boardbox">
        <button className={abled ? "leftboard able" : "leftboard disable"} 
        onClick={()=>{handleTotalboard(access_token)}}>전체 게시판</button>
        <button className={abled ? "rightboard disable" : "rightboard able"} 
        onClick={()=>{handleMyboard(access_token)}}>내가 작성한 게시판</button>
      </div>
      <div className="boards">
        {boardData.map((boardItem, idx) => {
          return ( 
          <div className="line" key={idx}>
            <h4 className="time">{getDayMinuteCounter(boardItem.board_created)}</h4>
            <Link to="#" className="title">{boardItem.board_title}</Link>
            {abled ? 
            (<h4 className="username">{boardItem.user_name}</h4>)
            :
            (<div className="MyBtns">
              <button className="userbtn"><img src={update} alt="수정버튼"></img></button>
              <button className="userbtn"><img src={trash} alt="삭제버튼" onClick={()=>{
                handleDelete(boardItem.board_id);
              }}></img></button>
            </div>)
            }
          </div> )
        })}
      </div>
    </div>
  </BoardSection>;
}

export default Mboard;
