import { useState,useCallback } from 'react'

function App() {
  
  const [length, setLength]= useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [pswd, setPswd]= useState("")

  const pswdGenerator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str += "0123456789"
    }

    else if(charAllowed){

      str += "!@#$%^&*()_+-={}[]|:;'<>,.?/"
    }

    4:50
    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length+ 1)

      pass = str.charAt(char)
      
    }

    setPswd(pass)


  }, [length, numberAllowed, charAllowed, setPswd])
  
  return (

    <>
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800'>
        <h1 className="text-center my-6 text-3xl">Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input 
          type="text"
          value={pswd}
          className='outline-none w-full py-2 px-3 text-2xl'
          placeholder='Password'
          readOnly
          />

          <button className='outline-none bg-blue-700 px-3 py-0.5 shrink-0'>Copy</button>


        </div>

        <div className='flex test-sm gap-x-2 '>

            <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />

            <label>Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked= {numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=> !prev)
            }} />

            <label>Numbers</label>
            </div>


            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked= {numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=> !prev)
            }} />

            <label>Characters</label>
            </div>


        </div>
        
      </div>
    </>
    
  )
}

export default App
