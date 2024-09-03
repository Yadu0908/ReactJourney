import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card.jsx'
import './App.css'

function App() {

  let newVar = {

    username: "Yadu",
    age: 21
  }

  let newArr= [1,2,3,,4,5]

  let nameArray = ["Amit", "Ankit", "Ajay", "Anshul"]



  return (
    <>
      <h4 className='bg-green-500 text-black p-4 rounded-xl font-medium mb-3 ' >Tailwind test</h4>
      <Card chnnel= "Yadu" newObject= {newVar} newArray= {newArr} btnText= "Click me" />
      <Card btnText= "Visit me here"/>
      <Card name = "Yadu"/>
      <Card />
      <Card />
    </>
  )
}

export default App
