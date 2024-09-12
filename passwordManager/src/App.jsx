import { useState } from 'react'

function App() {

  const [length, setLength]= useState(8);


  return (

    <>

      <div className='w-full h-96 bg-slate-950 text-white max-w-md mx-auto mt-36 px-6 rounded-xl'>


          <h1 className='
            text-2xl font-bold capitalize text-center pt-4
            '>
          
            password generator</h1>
            <div className='w-full flex  mt-4 pt-28 pb-10  rounded-xl overflow-hidden'>


              <input type="text" 
                className='w-full h-10 px-3 rounded-md'
                placeholder='Password'
              />

              <button className='bg-blue-700 px-4 outline-none py-0.5 shrink-0'>Copy</button>

            </div>

            <div className='flex text-m gap-x-2'>

              <div className='w-full h-10 '>

                <input type="range" min={8} max={100}
                value={length} 
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}/>

                <label className='text-md px-2'>Length: {length}</label>

              </div>
              <div className='w-full h-10 flex items-center gap-x-1'>

                <input type="checkbox" id='numberInput' />
                <label className='text-md px-2'>Numbers</label>


              </div>
              <div className='w-full h-10 flex items-center gap-x-1'>

                <input type="checkbox" />
                <label className='text-md px-2'>Character</label>
              
              </div>

            </div>


      </div>
      
    </>
  )
}

export default App
