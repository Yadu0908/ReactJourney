import React from "react";
import pic from "../assets/Images/myImage.png";
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
import { SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  const para =
    "I'm Yadu, a developer with a few years of experience specializing in web development and Python programming. I've honed my skills through consistent practice and am passionate about building efficient and scalable solutions.";

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

  const techIcons = [
    { id: 1, name: "React", icon: <FaReact /> },
    { id: 2, name: "Python", icon: <FaPython /> },
    { id: 3, name: "JavaScript", icon: <FaJsSquare /> },
    { id: 4, name: "MongoDB", icon: <SiMongodb /> },
    { id: 5, name: "Java", icon: <FaJava /> }
  ];

  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <p className="text-2xl md:text-4xl my-3">
            Welcome to my Port<span>folio</span>
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 text-4xl md:text-6xl font-bold">
            <h1 className="mr-1">Hello I'm a</h1>
            <ReactTyped 
              className="text-yellow-500"
              strings={["Developer", "Designer", "Coder"]}
              typeSpeed={50}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className="text-base md:text-lg text-justify">{para}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-20">
            <div>
              <h1 className="text-xl">Available on:</h1>
              <div className="flex space-x-4 mt-4">
                {SocialIcons.map(({ id, name, url, icon }) => (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl hover:text-yellow-500 transition duration-300"
                    aria-label={name}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-xl">Currently working on:</h1>
              <div className="flex flex-wrap gap-4 mt-4">
                {techIcons.map(({ id, name, icon }) => (
                  <span
                    key={id}
                    className="text-2xl md:text-3xl hover:text-yellow-500 hover:scale-110 transition duration-300"
                    aria-label={name}
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={pic} alt="Profile" className="w-3/4 md:w-auto max-w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;