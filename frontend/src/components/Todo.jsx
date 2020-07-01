import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './Todo.css'

const Todo = props => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3100/api/todo')
    .then((result)=>{
      const todoData =  result.data
      const todos = []

      for(const key in todoData){
        todos.push({
          id:key,
          title : todoData[key].title
        })
      }
      setTodoList(todos)
    })
  }, [])

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
            return <li key={todo.id}>{todo.title}</li>
          })
        }
      </ul>
    </div>

  );
}

export default Todo;