function Todo(props) {
  //we can either define the an anonymous function in the on click
  //or pass the function reference variable

  function deleteHandler() {
    console.log("Clicked");
    console.log(props.title);
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
