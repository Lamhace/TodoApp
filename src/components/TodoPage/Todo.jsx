import "./Todo.css";
import './TodoMedia.css'
import { useEffect, useRef, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

export default function Todo() {
  const [Todo, setTodo] = useState("");
  const [NewTodo, setNewTodo] = useState([]);
  const inputRef = useRef(null);

  const setTodoState = (e) => {
    setTodo(e.target.value);
  };
  const addNewTodo = () => {
    if (Todo === "") {
      alert("Todo input value is empty");
      return;
    } else {
      setNewTodo((prevTodo) => {
        return [
          ...prevTodo,
          { id: Math.floor(Math.random() * 1000) + 1, text: Todo },
        ];
      });
    }
    setTodo("");
  };
  const clearTodo = () => {
    setNewTodo([]);
  };
  const deleteTodo = (id) => {
    setNewTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2 className="welcome-msg">
          Welcome to the Todo app that turns your goals into achievements! 🌟
          Ready to conquer your day? Add your tasks, stay focused, and let's
          make progress together!
        </h2>

      <div>
        <div className="todo-container">
          <div className="input-area">
            <input
              ref={inputRef}
              type="text"
              value={Todo}
              onChange={setTodoState}
            />
            <div onClick={addNewTodo} className="addTodo">
              <IoMdAdd />
            </div>
          </div>
          <div>
            {NewTodo.map((todo, id) => {
              return (
                <div className="list-items">
                 <div><li className="todos" key={id}>{todo.text}</li></div>
                  <div onClick={() => deleteTodo(todo.id)}>
                    <RiDeleteBin6Fill className="delete" />
                  </div>
                </div>
              );
            })}
          </div>
          {NewTodo.length ? (
            <button onClick={clearTodo}>Clear</button>
          ) : (
            <div className="noTodoMessage">
              No Todo is available at the moment
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
