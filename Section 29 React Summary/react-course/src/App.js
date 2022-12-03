import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
function App() {
  let arr = ["Todo1", "Todo2", "Todo3"];
  return (
    <div>
      <h1>My Todos</h1>

      <Todo title = "Title1" />
      <Todo title = "Title2" />
    </div>
  );
}

export default App;
