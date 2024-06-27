"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeText, 100);
      } else {
        currentIndex = 0;
        timeout = setTimeout(typeText, 1000);
      }
    };

    typeText();

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="bg-[#34353a] ">
      <div className="relative w-full h-full">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/Images/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl  lg:text-8xl">{`Hello, I'm Shivam,`}</h1>
          <br />
          <h1 className="text-white text-4xl lg:text-8xl">{text}</h1>
        </div>
      </div>
      <div>
        <h1 className="text-white ml-6 pt-6 mt-6 text-4xl my-10 italic">
          About
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div>
            <Image
              src="/Images/portfolioguy.png"
              width={400}
              height={400}
              alt="portfolioguy"
            />
          </div>
          <div>
            <p className="text-white w-[90vw] lg:w-[40vw]">
              I am a proficient full stack developer with a robust foundation in
              both frontend and backend technologies. My expertise encompasses a
              wide array of programming languages, frameworks, and tools,
              enabling me to craft comprehensive and efficient web applications.
              <br />
              <br />
              On the frontend, I excel in building responsive and dynamic user
              interfaces using HTML, CSS, JavaScript, and TypeScript. I am adept
              at leveraging modern frontend frameworks such as React.js and have
              a keen eye for UI/UX design, ensuring that applications are both
              visually appealing and user-friendly.
              <br />
              <br />
              My backend skills include working with Node.js and Express.js to
              develop scalable server-side applications. I have substantial
              experience with RESTful API design and implementation, as well as
              integrating GraphQL for efficient data querying. My database
              management capabilities span SQL and NoSQL databases, including
              MongoDB and PostgreSQL, ensuring data integrity and optimized
              performance.
              <br />
              <br />
              I am also proficient in DevOps practices, utilizing tools like
              Docker for containerization and AWS for cloud services, which
              streamline deployment and scalability. My knowledge extends to
              CI/CD pipelines, ensuring continuous integration and delivery for
              maintaining high code quality and seamless updates.
              <br />
              <br />
              In addition to my technical skills, I am passionate about learning
              new technologies and staying updated with industry trends. I
              thrive in collaborative environments, often contributing to team
              projects and open-source initiatives. My goal is to continually
              evolve as a developer and contribute to innovative solutions that
              drive technological advancement.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white ml-6 pt-6 mt-6 text-4xl my-10 italic">
          Skills
        </h1>
        <div className="flex flex-wrap justify-center items-center md:mx-16">
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image src="/Images/html.webp" width={90} height={90} alt="html" />
            <p className="text-white">HTML & CSS</p>
          </div>

          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/tailwind.png"
              width={90}
              height={90}
              alt="tailwind"
            />
            <p className="text-white">Tailwind</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/javascript.png"
              width={90}
              height={90}
              alt="javascript"
            />
            <p className="text-white">Javascript</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/Typescript.webp"
              width={90}
              height={90}
              alt="Typescript"
            />
            <p className="text-white">Typescript</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/React.png"
              width={120}
              height={120}
              alt="react"
            />
            <p className="text-white">React</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/Github.png"
              width={90}
              height={90}
              alt="github"
            />
            <p className="text-white">Github</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/Nodejs.png"
              width={90}
              height={90}
              alt="Nodejs"
            />
            <p className="text-white">Node & Express</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/Mongodb.png"
              width={90}
              height={90}
              alt="mongodb"
            />
            <p className="text-white">Mongodb</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/Postgressql.png"
              width={90}
              height={90}
              alt="Postgressql"
            />
            <p className="text-white">PostgreSQL</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/graphql.png"
              width={70}
              height={70}
              alt="graphql"
            />
            <p className="text-white">GraphQL</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image src="/Images/redis.png" width={90} height={90} alt="redis" />
            <p className="text-white">Redis</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/python.png"
              width={90}
              height={90}
              alt="python"
            />
            <p className="text-white">Python</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image src="/Images/aws.png" width={90} height={90} alt="aws" />
            <p className="text-white">AWS</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image src="/Images/ci-cd.png" width={90} height={90} alt="ci-cd" />
            <p className="text-white">CI-CD</p>
          </div>
          <div className=" w-40 h-32 rounded flex flex-col justify-center items-center bg-[#3d3e42] mx-3 my-2 transition-transform duration-300 transform hover:scale-105 shadow-2xl">
            <Image
              src="/Images/docker.png"
              width={90}
              height={90}
              alt="docker-logo"
            />
            <p className="text-white">Docker</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white ml-6 pt-6 mt-6 text-4xl my-10 italic">
          Projects
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-[90vw] h-[30vh] lg:w-[25vw] lg:h-[30vh] rounded flex justify-center items-center bg-[#3d3e42] mx-2 my-2 relative group">
            <h1 className="text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0 absolute text-3xl">
              Wandermate
            </h1>
            <p className="text-white text-center mx-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute">
              A platform where users can purchase tours or treks to various
              destinations, become guides to add new tours, and chat anonymously
              with other participants going on the same tour.
              <br />
              Built with: Nextjs / Express / Typescript / MongoDB / Stripe
            </p>
          </div>
          <div className="w-[90vw] h-[30vh] lg:w-[25vw] lg:h-[30vh] rounded flex justify-center items-center bg-[#3d3e42] mx-2 my-2 relative group">
            <h1 className="text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0 absolute text-3xl">
              AI Blog Generator
            </h1>
            <p className="text-white text-center mx-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute">
              A tool that allows users to input a YouTube URL, generates a blog
              from the video content using Assembly AI, and saves the audio.
              <br />
              Built with: Python / Django / Assembly AI
            </p>
          </div>
          <div className="w-[90vw] h-[30vh] lg:w-[25vw] lg:h-[30vh] rounded flex justify-center items-center bg-[#3d3e42] mx-2 my-2 relative group">
            <h1 className="text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0 absolute text-3xl">
              Anonymous Chat App
            </h1>
            <p className="text-white text-center mx-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute">
              A real-time chat application built with WebSocket that enables
              users to chat anonymously in groups without needing to log in,
              facilitating anonymous and real-time communication.
              <br />
              Built with: HTML&CSS / Javascript / Websocket
            </p>
          </div>
          <div className="w-[90vw] h-[30vh] lg:w-[25vw] lg:h-[30vh] rounded flex justify-center items-center bg-[#3d3e42] mx-2 my-2 relative group">
            <h1 className="text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0 absolute text-3xl">
              Home Decor
            </h1>
            <p className="text-white text-center mx-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute">
              An e-commerce application designed for purchasing home decoration
              items and daily essentials, offering a variety of products to
              enhance home aesthetics and functionality.
              <br />
              Built with: React / Express / MongoDB
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center my-6 lg:my-12">
          <a
            href="https://github.com/Shivam13-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#f0bf6c] text-black w-[90vw] h-[6vh] lg:w-[15vw] lg:h-[7vh] rounded">
              More Projects
            </button>
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-white ml-6 pt-6 mt-6 text-4xl my-10 italic ">
          Contact
        </h1>
        <div className="flex items-center justify-center lg:justify-evenly">
          <div>
            <h1 className="text-white text-5xl hidden lg:block underline">
              Contact Me
            </h1>
          </div>
          <div className="my-14">
            <div className="bg-[#31333b] h-[7vh] w-[90vw] lg:w-[27vw] my-2 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>

              <a
                href="https://github.com/Shivam13-tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-[#f0bf6c] text-center py-2 px-4">Github</h1>
              </a>
            </div>
            <div className="bg-[#31333b] h-[7vh] w-[90vw] lg:w-[27vw] my-2 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
              <a
                href="https://www.linkedin.com/in/shivampandey98/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-[#f0bf6c] text-center py-2 px-4">
                  Linkedin
                </h1>
              </a>
            </div>
            <div className="bg-[#31333b] h-[7vh] w-[90vw] lg:w-[27vw] my-2 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0f0"
                  d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"
                ></path>
                <path
                  fill="#fff"
                  d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"
                ></path>
              </svg>
              <h1 className="text-[#f0bf6c] text-center py-2 px-4">
                +91 9769663304
              </h1>
            </div>
            <div className="bg-[#31333b] h-[7vh] w-[90vw] lg:w-[27vw] my-2 flex justify-center items-center">
              <div className="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="email"
                >
                  <rect
                    width="20"
                    height="20"
                    x="1"
                    y="9"
                    fill="#ffc661"
                    rx="3"
                    ry="3"
                  ></rect>
                  <path
                    fill="#e49f4e"
                    d="M29.63,29.5h-24a3,3,0,0,1-3-3v-16a2.91,2.91,0,0,1,.3-1.29A3,3,0,0,0,1,12V28a3,3,0,0,0,3,3H28a3,3,0,0,0,2.69-1.71A2.9,2.9,0,0,1,29.63,29.5Z"
                  ></path>
                  <path
                    fill="#96d7ff"
                    d="M28,9H4a3,3,0,0,0-2.71,1.74L15.23,24.68a1.09,1.09,0,0,0,1.54,0L30.71,10.74A3,3,0,0,0,28,9Z"
                  ></path>
                  <path
                    fill="#ff9797"
                    d="M30.81,29,21.1,19.32a1.07,1.07,0,0,0-1.53,0L16,22.88l-3.57-3.56a1.07,1.07,0,0,0-1.53,0L1.19,29A3,3,0,0,0,4,31H28A3,3,0,0,0,30.81,29Z"
                  ></path>
                  <path
                    fill="#e47979"
                    d="M28.61,30.93l.28-.07.18-.07a2,2,0,0,0,.22-.09l.18-.1.2-.12.16-.12.17-.15a.67.67,0,0,0,.15-.14l.15-.17a1.83,1.83,0,0,0,.13-.16l.13-.2.09-.17,0-.07a3.06,3.06,0,0,1-1.05.2h-24a3,3,0,0,1-2.84-2.07L1.19,29c.05.12.11.25.17.37a.2.2,0,0,1,0,.08l.21.32.07.08a3.05,3.05,0,0,0,.48.47,1.27,1.27,0,0,0,.12.1l.2.12.26.15.2.08.34.1.17,0A2.51,2.51,0,0,0,4,31H28a2.32,2.32,0,0,0,.46,0A.8.8,0,0,0,28.61,30.93Z"
                  ></path>
                  <path
                    fill="#86c3ef"
                    d="M27.19,9H4.81v5.27L15.23,24.68a1.09,1.09,0,0,0,1.54,0L27.19,14.27Z"
                  ></path>
                  <path
                    fill="#eef5fd"
                    d="M26,4V15.45l-9.23,9.23a1.09,1.09,0,0,1-1.54,0L6,15.45V4A3,3,0,0,1,9,1H23A3,3,0,0,1,26,4Z"
                  ></path>
                  <path
                    fill="#d7e2f2"
                    d="M7.25,16.49V5a3,3,0,0,1,3-3h14a2.91,2.91,0,0,1,1.22.27A3,3,0,0,0,23,1H9A3,3,0,0,0,6,4V15.45l9.23,9.23a1.09,1.09,0,0,0,.47.26Z"
                  ></path>
                  <path
                    fill="#d7e2f2"
                    d="M21.31 7.38h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM21.31 11.42h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM21.31 15.46h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
                  ></path>
                  <path
                    fill="#ffc661"
                    d="M21 7H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 11H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 15H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
                  ></path>
                </svg>
              </div>
              <h1 className="text-[#f0bf6c] text-center py-2 px-4">
                Shivampandey19981313@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
