import { useState } from "react"

function App() {

  let [color, setColor] = useState('#121222')

  
  function setRedColor(){

    setColor("red")

  }

  return (
    <>
      <div className="w-full h-screen duration-200" 
      
      style= {{backgroundColor: color}} >

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-4 rounded-xl ">

            <button className="px-3 py-1 mr-3 outline-none" style={{background: "red"}} onClick={setRedColor}>Red</button>
            <button className="bg-red-600 px-3 py-1 mr-3" style={{background: "Green"}} onClick={()=>setColor("Green")}>Green</button>
           
            
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
