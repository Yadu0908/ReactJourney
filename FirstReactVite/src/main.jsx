import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Test from './new.jsx'


function MyApp(){
    return (
        <h1>Hello world working</h1>
    )
}

//But when we try to render the object it will throw the error's on the console window. cuz the render function take an function as an argument not object.

//Self defined object.

// let domElement = {

//     type: 'a',

//     props: {

//         href: 'https:www.google.com',
//         target: '_blank'
//     },

//     children: "Hey click me to visit google"
// }


function Newfun(){
    return(
    <a href="http://www.google.com" target='_blank'>Visit google</a>
    )
}

//Object defined as per the react.
let Reactelement = React.createElement(

    'a',
    {
        href: "https://www.google.com",
        target: "_blank"
    },

    'click me to visit google'
)


createRoot(document.getElementById('root')).render(
 
    // MyApp()      //we can execute our function like this

    // domElement
  
   <Test/>
)
