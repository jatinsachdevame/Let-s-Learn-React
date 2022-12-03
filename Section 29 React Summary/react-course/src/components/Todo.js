import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  //we can either define the an anonymous function in the on click
  //or pass the function reference variable

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        <button onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick = {closeModalHandler} />}
    </div>
  );
}

export default Todo;
