import React from "react"
import {
    FaFacebook,
    FaLinkedin,
    FaReddit,
    FaInstagramSquare,
    FaGithub,
    FaReact,
    FaPython,
    FaJsSquare,
    FaJava 
  } from "react-icons/fa";


function BottomNav() {

    const SocialIcons = [

        {
          id: 1,
          name: "LinkedIn",
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/lsyadu09/",
        },
        {
          id: 2,
          name: "Reddit",
          icon: <FaReddit />,
          url: "https://www.reddit.com/user/Yadvendra_090/",
        },
        {
          id: 3,
          name: "Instagram",
          icon: <FaInstagramSquare />,
          url: "https://www.instagram.com/ls_yadu/",
        },
        {
          id: 4,
          name: "GitHub",
          icon: <FaGithub />,
          url: "https://github.com/Yadu0908",
        },
      ];
    
    return (
        <>    
        <p className="text-center mt-10 text-lg">Thanks for visiting my portfolio.</p>
        <nav className="max-w-screen-2xl container mx-auto px-4 flex justify-center md:px-20 mt-6 ">

                <div className="flex space-x-4 mb-10">
                    {SocialIcons.map(({ id, name, url, icon }) => (
                        <a
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-yellow-500 transition duration-300"
                        aria-label={name}
                        >
                        {icon}
                        </a>
                    ))}
                    </div>
        </nav>
      </>

    );
  }
  
  export default BottomNav;