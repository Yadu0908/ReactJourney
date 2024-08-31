import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


  const addValue = ()=>{

    // counter+=1
    // console.log(counter);
    if(counter < 20)
      setCounter(counter+1)
    }
  



  const removeValue = ()=>{

    if(counter > 0){

      setCounter(counter-1)
    }
  }


  return (
    <>
      <h1>Counter with Hooks</h1>
      <h2>Counter value: {counter}</h2>

      <button className= "btnClass" id='btn1' onClick={addValue}>Add value</button>
      <button className= "btnClass" id='btn2' onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
