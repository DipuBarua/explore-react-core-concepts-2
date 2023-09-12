import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  const handleBtn = () => {
    alert('button clicked');
  }
  const handleBtnThree = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React core concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleBtn}>click</button>
      <button onClick={() => { alert('2nd button clicked') }}>click2</button>
      <button onClick={() => { handleBtnThree(5) }}>click3</button>
    </>
  )
}

export default App
