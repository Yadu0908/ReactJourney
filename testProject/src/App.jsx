import { useState, useEffect } from 'react'
import './App.css'


function App() {
  
  let [counter, setCounter]  = useState(0)

  const useEeectFunction = ()=>{

    setCounter(counter+1);
    
  }
  useEffect(()=> {
    console.log(`Value of counter is changed ${counter}`)}, 
  [counter])
  
  return (
    <>
      <h1>Hook Test file</h1>
      <h2>Effect: {counter}</h2>

      <button onClick={useEeectFunction}>Click me to see effect</button>
    </>
  )
}

export default App
