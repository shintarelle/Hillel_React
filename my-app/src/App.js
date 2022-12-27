import React from "react";
import TodoList from "./Todo/TodoList";

const todos = [
  {id: 1, complited: false, title: 'bye milk'},
  {id: 2, complited: false, title: 'bye broad'},
  {id: 3, complited: false, title: 'bye butter'},
]

function App() {
  return (
    <div className='wrapper'>
      <h1>React Tutorial</h1>
      <TodoList todos={todos} />
    </div>

  );
}

export default App;
