/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";
import { Slide } from "../components/skills";

export default function index() {
  const [slide, setSlide] = useState<number>(0);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (slide < slides - 1 && window.innerWidth <= 768) {
        setSlide(slide + 1);
      }
    },
    onSwipedDown: () => {
      if (slide > 0 && window.innerWidth <= 768) {
        setSlide(slide - 1);
      }
    },
    onSwipedLeft: () => {
      if (slide < slides - 1 && window.innerWidth > 768) {
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

  const slides = 6;

  const imgUrls = [
    "/images/codeThinking.svg",
    "/images/htmlCss.svg",
    "/images/react.svg",
    "/images/next.svg",
    "/images/nestjs.svg",
    "/images/mongodb.svg",
    "/images/postgresql.png",
  ];

  return (
    <>
      <section className="relative h-screen" {...handlers}>
        <div className="absolute w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center overflow-hidden">
          <div className="w-full contents select-none">
            <Slide slide={slide} slideNumber={0} imgUrl={imgUrls[0]}>
              <h1 className="font-bold text-6xl text-yellow-300">My skills</h1>
              <p className="text-2xl px-5 mt-5 font-semibold">
                I really like to learn new things, and I am always open to new
                technologies. The following technologies are my forte.
              </p>
            </Slide>
            <Slide slide={slide} slideNumber={1} imgUrl={imgUrls[1]}>
              <h1 className="font-bold text-6xl text-yellow-500">Static web</h1>
              <p className="text-2xl px-5 mt-5">
                I used to create my websites with HTML, CSS and JavaScript. I
                get use to use pure CSS, but I also used Bootstrap, TailwindCSS
                and NexUI.
              </p>
            </Slide>
            <Slide slide={slide} slideNumber={2} imgUrl={imgUrls[2]}>
              <h1 className="font-bold text-6xl text-yellow-500">React</h1>
              <p className="text-2xl px-5 mt-5">
                I have been using React for a while now. I have created some
                projects with it, and I am currently using it for my personal
                website. I have experience with frameworks such as Vite, NextJS
                and Remix.
              </p>
            </Slide>
            <Slide slide={slide} slideNumber={3} imgUrl={imgUrls[3]}>
              <h1 className="font-bold text-6xl text-yellow-500">Next Js</h1>
              <p className="text-2xl px-5 mt-5">
                About React frameworks, the most that I have used is NextJs. I
                like use this framework because it help me to improve my SEO and
                my web performance using their features such as Static Site
                Generation or Incremental Site Generation.
              </p>
            </Slide>
            <Slide slide={slide} slideNumber={4} imgUrl={imgUrls[4]}>
              <h1 className="font-bold text-6xl text-yellow-500">
                About Backend
              </h1>
              <p className="text-2xl px-5 mt-5">
                I have a wide experiences about node js and how to create a
                backend with it. I have used frameworks such as Express, NestJs
                and Fastify.
              </p>
            </Slide>
            <Slide
              slide={slide}
              slideNumber={5}
              imgUrl={imgUrls[5]}
              imgUrl2={imgUrls[6]}
            >
              <h1 className="font-bold text-6xl text-yellow-500">Databases</h1>
              <p className="text-2xl px-5 mt-5">
                I have used SQL database such as MySQL and PostgreSQL, and NoSQL
                databases such as MongoDB.
              </p>
            </Slide>
          </div>
          <div className="relative flex flex-col-reverse md:flex-row md:rotate-180 justify-between items-center w-full h-full p-5 ">
            <div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`text-white hover:text-yellow-500 transition duration-500 cursor-pointer -rotate-90 md:rotate-180 ${
                  !(slide + 1 < slides) && "disabled: opacity-25"
                }`}
                onClick={() => {
                  if (slide + 1 < slides) {
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
    </>
  );
}
