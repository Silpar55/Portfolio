/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faC,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGit,
  faDocker,
  faLinux,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { useSwipeable } from "react-swipeable";
import Slide from "../components/skills/Slide";

export default function index() {
  const [slide, setSlide] = useState<number>(0);
  let slideNumber = -1;

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (slide < slideNumber && window.innerWidth <= 768) {
        setSlide(slide + 1);
      }
    },
    onSwipedDown: () => {
      if (slide > 0 && window.innerWidth <= 768) {
        setSlide(slide - 1);
      }
    },
    onSwipedLeft: () => {
      if (slide < slideNumber && window.innerWidth > 768) {
        setSlide(slide + 1);
      }
    },
    onSwipedRight: () => {
      if (slide > 0 && window.innerWidth > 768) {
        setSlide(slide - 1);
      }
    },

    trackMouse: true,
    trackTouch: true,
  });

  const slidesContent = [
    {
      title: "My skills",
      text: "I really like to learn new things, and I am always open to new technologies. The following technologies are my forte.",
      image: "/images/codeThinking.svg",
      slideNumber: (slideNumber += 1),
    },
    {
      title: "Static web",
      text: "I used to create my websites with HTML, CSS and JavaScript. I get use to use pure CSS, but I also used Bootstrap, TailwindCSS and NexUI.",
      image: "/images/htmlCss.svg",
      slideNumber: (slideNumber += 1),
    },
    {
      title: "React",
      text: "I have been using React for a while now. I have created some projects with it, and I am currently using it for my personal website. I have experience with frameworks such as Vite, NextJS and Remix.",
      image: "/images/react.svg",
      slideNumber: (slideNumber += 1),
    },
    {
      title: "Next Js",
      text: "About React frameworks, the most that I have used is NextJs. I like use this framework because it help me to improve my SEO and my web performance using their features such as Static Site Generation or Incremental Site Generation.",
      image: "/images/next.svg",
      slideNumber: (slideNumber += 1),
    },
    {
      title: "About Backend",
      text: "I have a wide experiences about node js and how to create a backend with it. I have used frameworks such as Express, NestJs and Fastify.",
      image: "/images/nestjs.svg",
      slideNumber: (slideNumber += 1),
    },
    {
      title: "Databases",
      text: "I have used SQL database such as MySQL and PostgreSQL, and NoSQL databases such as MongoDB.",
      image: "/images/mongodb.svg",
      secondImage: "/images/postgresql.png",
      slideNumber: (slideNumber += 1),
    },
  ];

  const tableContent = [
    {
      technology: "Git",
      experience: "High",
      icon: faGit,
      color: "#F1502F",
      details: "Since 2019",
      url: "https://git-scm.com/",
    },
    {
      technology: "GitHub",
      experience: "High",
      icon: faGithub,
      color: "#4078c0",
      details: "Since 2019",
      url: "https://github.com/",
    },
    {
      technology: "Docker",
      experience: "Medium",
      icon: faDocker,
      color: "#0db7ed",
      details: "Since 2022",
      url: "https://www.docker.com/",
    },
    {
      technology: "Linux",
      experience: "Medium",
      icon: faLinux,
      color: "#FFFFFF",
      details: "Since 2020, Linux distribution: Ubuntu ",
      url: "https://ubuntu.com/",
    },
    {
      technology: "Python",
      experience: "Medium",
      icon: faPython,
      color: "#4F7942",
      details: "Since 2021",
      url: "https://www.python.org",
    },
    {
      technology: "C",
      experience: "Medium",
      icon: faC,
      color: "#30B7BA",
      details: "Since 2022",
      url: "https://www.w3schools.com/c/c_intro.php",
    },
    {
      technology: "C++",
      experience: "Medium",
      icon: faC,
      color: "#30B7BA",
      details: "Since 2022",
      url: "https://www.w3schools.com/cpp/cpp_intro.asp",
    },
    {
      technology: "Java",
      experience: "Low",
      icon: faJava,
      color: "#f89820",
      details: "First programming language that I learned",
      url: "https://www.java.com/",
    },
  ];
  return (
    <>
      <section className="relative h-screen" {...handlers}>
        <div className="absolute w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center overflow-hidden">
          <div className="w-full contents">
            {slidesContent.map(
              ({ title, text, image, secondImage, slideNumber }, index) => (
                <Slide
                  key={index}
                  slide={slide}
                  slideNumber={slideNumber}
                  imgUrl={image}
                  imgUrl2={secondImage}
                >
                  <h1 className="font-bold text-6xl xl:text-7xl text-yellow-300">
                    {title}
                  </h1>
                  <p className="text-2xl px-5 mt-5 font-semibold xl:text-3xl">
                    {text}
                  </p>
                </Slide>
              )
            )}
            <Slide
              key={slideNumber + 1}
              slideNumber={(slideNumber += 1)}
              slide={slide}
            >
              <h1 className="font-bold text-2xl text-yellow-300 mb-5">
                Other technologies...
              </h1>
              <table className="table-fixed w-full md:w-8/12 m-auto text-center">
                <thead className="text-2xl font-semibold">
                  <tr>
                    <th>Technology</th>
                    <th>Experience level</th>
                  </tr>
                </thead>
                <tbody className="text-xl font-medium">
                  {tableContent.map(
                    (
                      { technology, experience, icon, color, details, url },
                      index
                    ) => (
                      <tr key={index} className=" border-b border-cyan-500">
                        <td>
                          <div className="my-1">
                            <div
                              onClick={() => {
                                if (url) {
                                  window.open(url, "_blank");
                                }
                              }}
                              className="flex justify-center items-center gap-2 cursor-pointer"
                            >
                              <FontAwesomeIcon
                                icon={icon}
                                color={color}
                                size="xl"
                              />
                              {technology === "C++" && (
                                <>
                                  <FontAwesomeIcon
                                    icon={faPlus}
                                    size="2xs"
                                    color={color}
                                  />
                                  <FontAwesomeIcon
                                    icon={faPlus}
                                    size="2xs"
                                    color={color}
                                  />
                                </>
                              )}
                            </div>
                            <span className="text-xl md:text-2xl">
                              {technology !== "C++" &&
                                technology !== "C" &&
                                technology !== "Git" &&
                                technology}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="my-1">
                            <span
                              className={`${
                                experience === "High" && "text-green-600"
                              } ${
                                experience === "Medium" && "text-orange-500"
                              } ${experience === "Low" && "text-red-600"}`}
                            >
                              {experience}
                            </span>
                            <p className=" text-sm md:text-md">{details}</p>
                            <p className="text-sm md:text-md">
                              {technology === "GitHub" && (
                                <>
                                  GitHub currently account:{" "}
                                  <a
                                    href="https://github.com/Silpar55"
                                    target="_blank"
                                    className="text-blue-500 duration-500 hover:text-blue-700 transition"
                                  >
                                    Silpar55
                                  </a>
                                </>
                              )}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </Slide>
          </div>
          <div className="relative flex flex-col-reverse md:flex-row md:rotate-180 justify-between items-center w-full h-full p-5 ">
            <div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`text-white hover:text-yellow-500 transition duration-500 cursor-pointer -rotate-90 md:rotate-180 ${
                  !(slide < slideNumber) && "disabled: opacity-25"
                }`}
                onClick={() => {
                  if (slide < slideNumber) {
                    setSlide(slide + 1);
                  }
                }}
                size="2x"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faAngleLeft}
                className={` text-white hover:text-yellow-500 transition duration-500 cursor-pointer -rotate-90 md:rotate-180 ${
                  !(slide != 0) && "disabled: opacity-25"
                }`}
                onClick={() => {
                  if (slide != 0) {
                    setSlide(slide - 1);
                  }
                }}
                size="2x"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 xl:w-11/12 m-auto"></section>
    </>
  );
}
