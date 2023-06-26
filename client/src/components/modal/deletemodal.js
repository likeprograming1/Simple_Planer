import Modal from "./style";

const Deleltemodal = ({ board, dispatch, onclose, ondelete}) => {

  const handleDelete = () => {
    ondelete();
    dispatch();
    board();
  }

  const handleCancle = () => {
    onclose()
  }

  return (<Modal>
    <h1>삭제 하시겠습니까?</h1>
    <div className="btn-box">
      <button onClick={()=>{handleDelete()}}>예</button>
      <button onClick={()=>{handleCancle()}}>아니요</button>
    </div>
  </Modal>)
}

export default Deleltemodal;