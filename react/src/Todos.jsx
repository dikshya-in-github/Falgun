import { useState } from "react";
import "./main"

export default function Todos() {
  let todosData = [
    {
      title: "Html",
      status: true,
    },
    {
      title: "Css",
      status: true,
    },
    {
      title: "Javascript",
      status: false,
    },
  ];

  const [todoList, setTodoList] = useState([...todosData]);
  const [newTodos, setNewTodos] = useState("");
  const [checked, setChecked] = useState(false);

  function handleChange(event) {
    setNewTodos(event.target.value);
  }

  function addTodos() {
    setTodoList([...todoList, {title: newTodos, status: true}]);
  }


  function check(event) {
    setChecked(event.target.true);
  }

  return (
    <>
      <h2>Todos</h2>

      <input required type="text" onChange={handleChange} />
      <button onClick={addTodos}> Add </button>

      <ul>
        {todoList.map((el, idx) => {
          return (
            <li key={idx}>
              <input checked={el.status} type="checkbox" onChange={check} />
              {el.title}
              {/* {checked ? <div> checked</div> : <div> not-checked. </div>} */}
            </li>
          );
        })}
      </ul>
    </>
  );
}
