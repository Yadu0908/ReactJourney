import React, { useState, useEffect } from "react";
import pic from "../assets/Images/favicon.png";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const navArray = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Project" },
        { id: 4, text: "Stats" },
        { id: 5, text: "Contact" }
    ];

    // AI Generated code

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-2">
                    <img src={pic} alt="Logo" className="h-12 w-12" />
                    <div>
                        <h1 className="font-semibold text-2xl cursor-pointer">
                            Port<span className="text-yellow-500">folio</span>
                        </h1>
                        <p className="text-sm">Web Developer</p>
                    </div>
                </div>

                {/* desktop version */}
                <div>
                    <ul className={isMobile ? 'hidden' : 'flex space-x-4 text-xs'}>
                        {navArray.map(({id, text}) => (
                            <li key={id}
                                className="hover:text-yellow-500 hover:scale-105 duration-200 text-xl px-2"
                                style={{cursor: "pointer"}}>
                                <Link to={text}
                                    smooth={true}
                                    duration={500}
                                    activeClass="active"
                                    offset={-70}>
                                    {text}
                                </Link>    
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div onClick={() => setMenu(!menu)} className="md:hidden">
                    {menu ? <IoClose size={24}/> : <AiOutlineMenu size={24}/>}
                </div>
            </div>

            {/* mobile menu */}
            <div className="md:hidden">
                {menu && (
                    <ul className="flex flex-col items-center justify-center h-screen">
                        {navArray.map(({id, text}) => (
                            <li key={id}
                                className="hover:text-yellow-500 hover:scale-105 duration-200 text-2xl px-4 py-2"
                                style={{cursor: "pointer"}}>
                                <Link to={text}
                                    smooth={true}
                                    duration={500}
                                    activeClass="active"
                                    offset={-70}
                                    onClick={() => setMenu(false)}>
                                    {text}
                                </Link>    
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <hr className="border-1 border-red-50"/>
        </div>
    );
}

export default Navbar;