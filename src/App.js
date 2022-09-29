import useFetch from "./util/useFetch";
import "./styles.css";

//useFetch, useInput, useForm : custom hook
export default function App() {
  const fetchData = useFetch("data.json");

  // console.log(fetchData)

  return (
    <div className="App">
      <h1>To do List</h1>
      <div className="todo-list">
        {fetchData &&
          fetchData.todo.map((el) => {
            return <li key={el.id}>{el.todo}</li>;
          })}
      </div>
    </div>
  );
}
