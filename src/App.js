import React, { useState } from 'react'

const App = () => {
  const [formValue, setFormValue] = useState("")
  const [todoList, setTodoList] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault()
    setTodoList([
      ...todoList,
      formValue
    ])
    setFormValue("")
  }
  const handleDelete = (listItem) => setTodoList(todoList.filter(currentValue => currentValue !== listItem))
  return (
    <>
      <h1>To Do App</h1>
      <form onSubmit={handleSubmit}>
        <input value={formValue} onChange={(event) => setFormValue(event.target.value)} />
      </form>
      <button onClick={() => setTodoList([])}>clearList</button>
      <ul>
        {todoList.map(listItem => (
          <li>
            {listItem}
            <button onClick={() =>handleDelete(listItem)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
