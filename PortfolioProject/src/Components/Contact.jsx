import React from "react";



function Contact(){

    

    return (

        <>
            <div name= "Contact" className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="max-w-2xl w-full px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Contact me</h1>
        <p className="text-center text-gray-300 mb-8">Please fill out the form below to contact me</p>
        
        <form className="space-y-6" action="https://getform.io/f/bxojxzga" method="POST"
   
        >
          <h2 className="text-2xl mb-4 text-center text-white">Send your messages</h2>
          
          <div>
            <label htmlFor="name" className="block text-gray-200 text-xl font-bold mb-2">
              Full Name
            </label>
            <input 
              type="text" 
              id="name"
              name= "name"
              className="w-full h-10 p-2 rounded bg-gray-300 text-black text-lg"
            />
          </div>


          <div>
            <label htmlFor="message" className="block text-gray-100 text-xl font-bold mb-2">
              Message
            </label>
            <textarea 
              id="message"
              name="message"
              className="w-full h-40 p-2 rounded bg-gray-300 text-black text-lg"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}

export default Contact