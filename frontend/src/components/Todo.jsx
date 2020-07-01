import React, { useState } from 'react'
import axios from 'axios'
import './Todo.css'

const Todo = props => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([])

  const inputChangeHandler = (event) => {
    setTodoName(event.target.value)
  }

  const todoAddHandler = (event) => {
    event.preventDefault()
    setTodoList(todoList.concat(todoName))
    console.log(todoName);
    axios.post('http://localhost:3100/api/todo',{
      title: todoName
    })
      .then((res) => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

    setTodoName('')
  }

  return (
    <div className="todo">
      <form onSubmit={todoAddHandler} >
        <input
          type="text"
          placeholder="Todo..."
          onChange={inputChangeHandler}


          value={todoName}
        />
        <button className="btn">Add</button>
      </form>
      <ul>
        {
          todoList.map(todo => {
            return <li key={todo}>{todo}</li>
          })
        }
      </ul>
    </div>

  );
}

export default Todo;