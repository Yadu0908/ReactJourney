import React from "react";
import pic from "../assets/Images/favicon.png";

function Navbar() {

    const navArray = [

        {
            id: 1, 
            text: "Home",
            link: "Home.jsx"
        }, 

        {

            id: 2,
            text: "About",
            link: "About.jsx"
            
        },

        {

            id: 3,
            text: "Services",
            link: "Services.jsx"
        },

        {
            id: 4, 
            text: "Portfolio",
            link: "Portfolio.jsx"
        }, 
        

        {

            id: 5, 
            text: "Contact",
            link: "Conatct.jsx"
        }
    ]

    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-2">
                    <img src={pic} alt="Logo" className="h-12 w-12" />
                    <div>
                        <h1 className="font-semibold text-2xl cursor-pointer">
                            Port
                            <span className="text-yellow-500">folio</span>
                        </h1>
                        <p className="text-sm">Web Developer</p>
                    </div>
                </div>

                <ul className="flex space-x-4 md">

                    {navArray.map(({id, text, link})=>(
                        <li id={id} className="hover:scale-105 duration-200">
                            <a href= {`${link}`} className="hover:text-yellow-500 duration-200 text-xl px-2">{text}</a>
                        </li>
                    ))}


                </ul>
            </div>
        </div>
    );
}

export default Navbar;
