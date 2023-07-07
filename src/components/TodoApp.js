import React, { useState } from "react";

const TodoApp = () => {
  const [messageList, setMessageList] = useState(["Milk", "Sugar", "Butter"]);
  const [completedList, setCompletedList] = useState([]);

  const addTodo = (message) => {
    setMessageList([...messageList, message]);
  };

  const deleteTodo = (message,completedList) => {
    let deleteMessageIndex = messageList.indexOf(message);
    setMessageList([
      ...messageList.slice(0, deleteMessageIndex),
      ...messageList.slice(deleteMessageIndex + 1)
    ]);
    setCompletedList([...completedList, message]);
  };

  return (
    <div>
      <TodoHeader/>
      <TodoForm addTodo={addTodo} /> <br /> {/* Why */}
      <TodoList messageList={messageList} deleteTodo={deleteTodo} completedList={completedList}/>
      <TodoCompleted completedList={completedList}/>
    </div>
  );
};
const TodoHeader = () => {
    return(
        <div className="mt-28 text-3xl">
           <h2>Todo List</h2>
         </div>
        )
};
const TodoForm = ({  addTodo }) => {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    addTodo(input);
    setInput("");
  };

  return (
    <div id="form">
      <input
        className="h-9 mt-5 mr-2 p-2 border border-solid
        border-orange-100" 
        type="text"
        value={input}
        onChange={changeHandler}
      />
      <button id="form__submit" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
};

const TodoList = ({ messageList, deleteTodo, completedList }) => (
  <>
  <div className="mt-2 text-lg font-bold">Open Tasks</div>
  <ol id="todolist">
    {messageList.map((message, index) => (
      <Todo message={message} deleteTodo={deleteTodo} completedList={completedList} key={index} index={index} />
    ))}
  </ol>
  </>
);

const Todo = ({ message, deleteTodo, completedList, index}) => {
  const handleSubmit = (event) => {
    deleteTodo(message,completedList);
  };

  return (
    <li >
      <span >{index+1}- {message + "  "}</span>
      <button className="m-1 text-sm h-9 p-2 bg-orange-50 cursor-pointer" onClick={handleSubmit}>
        Done
      </button>
    </li>
  );
};

const TodoCompleted = ({completedList}) =>{
  return(
    <>
    <div className="mt-4 text-lg font-bold">Completed Tasks</div>
    {completedList.map((message, index) => (
     <div className="m-1 " key={index}>{index+1}- {message}</div>
    ))}
    </>
  )
}

export default TodoApp;
