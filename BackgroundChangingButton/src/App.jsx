import {cloneElement, useState } from "react";

function App() {
  let [color, setColor] = useState("Black");

  function setRedColor(){

    setColor("#aa0000")
  }

  return (
    <div className="w-full h-screen text-white duration-200" style={{background:color
    }}>
      <div
        className="flex justify-center items-center h-full">
        Screen wala div
        </div>
        <div className="w-full h-20 bg-green-100 text-black fixed bottom-0 text-center " style={{}}>
  
        <button className="px-6 py-2 mt-2 mr-2 outline-none rounded-md" style={{background: "red", color: "white"}} onClick={setRedColor}>Red</button>
        <button className="px-6 py-2 mt-2 mr-2 outline-none rounded-md" style={{background: "green", color: "white"}} onClick={()=>setColor("Green")}>Green</button>
        <button className="px-6 py-2 mt-2 mr-2 outline-none rounded-md" style={{background: "yellow", color: "black"}} onClick={()=>setColor("Yellow")}>Yellow</button>
        
        </div>
    </div>
  );
}

export default App;
