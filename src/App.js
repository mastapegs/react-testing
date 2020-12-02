import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)
  return (
    <>
      <h1>To Do App</h1>
      <p>Value is: {value}</p>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </>
  )
}

export default App;
