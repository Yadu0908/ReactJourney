import React from "react";
import image1 from "../assets/Images/Tech/html.png"; 
import image2 from "../assets/Images/Tech/css.png"; 
import image3 from "../assets/Images/Tech/js.png"; 
import image5 from "../assets/Images/Tech/php.png"; 
import image4 from "../assets/Images/Tech/mysql.png"; 
import image6 from "../assets/Images/Tech/python.png"; 
import image7 from "../assets/Images/Tech/react.png"; 

function Projects() {
  const divArray = [
    {
      id: 1,
      heading: "Netflix clone",
      image: image1,
      link: "https://github.com/Yadu0908/Netflix-Clone-HTML-CSS",
    },
    {
      id: 2,
      heading: "CSS Skills",
      image: image2,
      link: "https://github.com/Yadu0908/OnlineWebEditor"
    },

    {
      id: 3,
      heading: "Annoying Button",
      image: image3,
      link: "https://github.com/Yadu0908/AnnoyingButton"
    },
    {

      id: 4,
      heading: "Voting system",
      image: image4,
      link: "https://github.com/Yadu0908/VotingSystemProject/tree/main/EVMOnline"
    },
    {
        id: 5,
        heading: "Hotel web page",
        image: image5,
        link: "https://github.com/Yadu0908/HotelWebWithPHP"
    },

   {
        id: 6,
        heading: "Notepad Clone",
        image: image6,
        link: "https://github.com/Yadu0908/Notepad-Clone-Python"
    },

    {
        id: 7,
        heading: "Portfolio website",
        image: image7,
        link: "https://github.com/Yadu0908/ReactJourney/tree/main/PortfolioProject"
    }


  ];


//   Github fetch

  return (
    <div name="Project" className="max-w-screen-2xl container mx-auto px-4 mb-2 mt-10 sm:mt-20 md:px-20">
      <div className="h-16 sm:h-20 rounded-sm flex items-center justify-center font-bold mb-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl">Project's Featured</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {divArray.map(({ id, heading, image, link }) => (
          <div
            key={id}
            className="relative group h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg shadow-2xl"
          >
            {/* Image Layer with Lazy Loading and Object Contain */}
            <img
              src={image}
              alt={heading}
              loading="lazy"
              className="absolute h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 object-contain opacity-100 group-hover:transition duration-300 ease-in-out"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                willChange: 'opacity',
              }}
            />

            <div className="flex justify-between items-center absolute bottom-0 left-0 right-0 bg-zinc-800 bg-opacity-50 p-2">
              {/* Heading */}
              <h1 className="text-lg sm:text-xl font-semibold text-white">{heading}</h1>
              {/* Link */}
              <a
                href={link}
                className="text-base sm:text-lg text-blue-500 hover:underline hover:text-blue-300"
              >
                Source code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
