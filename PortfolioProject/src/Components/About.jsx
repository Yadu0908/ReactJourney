import React from "react";
import image1 from "../assets/Images/port/image1.png";
import image2 from "../assets/Images/port/image2.png";
import image3 from "../assets/Images/port/image3.png";
import image5 from "../assets/Images/port/image5.png";
import image4 from "../assets/Images/port/image4.png";
import image6 from "../assets/Images/port/image6.png";

function About() {
  const divArray = [
    {
      id: 1,
      heading: "Education",
      text: "I completed my high school and secondary school from Jawahar Navodaya Vidyalaya Chamoli in 2019 and 2021, followed by a diploma in Information Technology, and I am currently pursuing a B.Tech in Computer Science.",
      image: image1,
    },
    {
      id: 2,
      heading: "Qualification",
      text: (
        <>
          <p className="mb-3">
            I have completed my education with the following qualifications:
          </p>
          <ul className="list-disc pl-5">
            <li>High School: 78% (Jawahar Navodaya Vidyalaya Chamoli, 2019)</li>
            <li>Secondary School: 80% (Jawahar Navodaya Vidyalaya Chamoli, 2021)</li>
            <li>Diploma in Information Technology: 75%</li>
          </ul>
        </>
      ),
      image: image2,
    },
    {
      id: 3,
      heading: "Technology",
      text: (
        <>
          <p className="mb-3">
            Over the course of my journey, I have learned and worked with the following technologies:
          </p>
          <ul className="list-disc pl-5">
            <li>HTML, CSS, JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Python</li>
            <li>Java</li>
            <li>Currently learning React and Node.js</li>
          </ul>
        </>
      ),
      image: image3,
    },
    {
      id: 4,
      heading: "Projects",
      text: (
        <>
          <p className="mb-3">
            Here are some of the projects I’ve worked on:
          </p>
          <ul className="list-disc pl-5">
            <li>Hotel website using PHP and SQL</li>
            <li>Basic hotel website using Python</li>
            <li>Clone websites</li>
          </ul>
          <p className="mt-4">
            You can view my projects on GitHub:{" "}
            <a
              href="https://github.com/Yadu0908"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub
            </a>
          </p>
        </>
      ),
      image: image4,
    },
    {
      id: 5,
      heading: "Editing",
      text: (
        <>
          <p className="mb-3">
            I have developed various editing skills, including:
          </p>
          <ul className="list-disc pl-5">
            <li>Photoshop</li>
            <li>Filmora video editing</li>
            <li>Canva designing</li>
            <li>Audio mix mastering</li>
          </ul>
        </>
      ),
      image: image5,
    },
    {
      id: 6,
      heading: "UI/UX",
      text: (
        <>
          <p className="mb-3">
            My UI/UX experience includes:
          </p>
          <ul className="list-disc pl-5">
            <li>User interface design</li>
            <li>User experience research</li>
            <li>Wireframing and prototyping</li>
            <li>Responsive design principles</li>
            <li>Usability testing</li>
            <li>Tools: Figma, Sketch, Adobe XD</li>
          </ul>
        </>
      ),
      image: image6,
    },
  ];

  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 mb-10 md:px-20">
      <div className="h-20 rounded-sm flex items-center justify-center font-bold mb-4 mt-5">
        <h1 className="text-5xl ">About</h1>
      </div>

      <div className="h-full mb-28">
        <p className="text-xl text-justify">
          Hello, I'm Yadu, a passionate programmer and web developer with experience in crafting dynamic web applications. My journey in technology has allowed me to work on various projects using Python, HTML, CSS, and JavaScript. From backend logic to creating responsive and user-friendly interfaces, I enjoy bringing ideas to life on the web.
          I've built projects ranging from functional websites to interactive applications, always aiming to create efficient and maintainable code. Beyond these, I'm continuously exploring new technologies and frameworks to stay up-to-date with the latest industry trends.

          Whether it's tackling a complex problem or fine-tuning the front-end experience, I’m always up for a challenge and driven to learn and improve. Let's create something amazing together!
        </p>
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-6 lg:gap-14">
        {divArray.map(({ id, heading, text, image }) => (
          <div
            key={id}
            className="relative group h-48 xs:h-64 sm:h-72 lg:h-80 overflow-hidden rounded-lg shadow-2xl"
          >
            {/* Image Layer with Lazy Loading and Object Contain */}
            <img
              src={image}
              alt={heading}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ transform: "translateZ(0)", willChange: "opacity" }}
            />
            {/* Text Layer */}
            <div className="absolute inset-0 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gray-900 bg-opacity-70 p-2 xs:p-4 sm:p-5 lg:p-6">
              <h1 className="text-lg xs:text-2xl sm:text-2xl lg:text-3xl font-semibold text-white mb-1 xs:mb-2 sm:mb-3">
                {heading}
              </h1>
              <p className="text-sm xs:text-base sm:text-lg text-white">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
