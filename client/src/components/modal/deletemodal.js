import Modal from "./style";

const Deleltemodal = ({navigate, dispatch, onclose, ondelete}) => {

  const handleDelete = () => {
    ondelete();
    dispatch();
    navigate();
  }

  const handleCancle = () => {
    onclose()
  }

  return (<Modal>
    <h1>삭제 하시겠습니까?</h1>
    <button onClick={()=>{handleDelete()}}>예</button>
    <button onClick={()=>{handleCancle()}}>아니요</button>
  </Modal>)
}

export default Deleltemodal;