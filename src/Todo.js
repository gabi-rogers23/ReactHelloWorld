import React, { useState } from "react";

const TodoForm = (props) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <form
      className="todo-form"
      onSubmit={(event) => {
        event.preventDefault();
        props.addTodo(newTodo);
        setNewTodo("");
      }}
    >
      <input
        placeholder="What do you want to do?"
        type="text"
        value={newTodo}
        onChange={(event) => {
          setNewTodo(event.target.value);
        }}
      />
      <button>Add Todo</button>
    </form>
  );
};

const TodoList = (props) => {
 
  return (
    <div className="todo-list">
      {props.todoList.map((item, index) => {
        return (
          <h3 className="listItem" key={index}>
            <span>{item}</span>
          </h3>
        );
      })}
    </div>
  );
};

const Todo = (props) => {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todo) {
    let copy = [...todoList];
    copy.push(todo);
    setTodoList(copy);
  }

  return (
    <div className="todo">
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Todo;
