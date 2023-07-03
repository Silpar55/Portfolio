/* eslint-disable react-hooks/rules-of-hooks */

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";

import Text from "../components/global/Text";

import Slide from "../components/skills/Slide";

import TableSkills from "../components/skills/TableSkills";

// Create an array with the content of each slide
const slidesContent = [
  {
    title: "My skills",
    text: "I really like to learn new things, and I am always open to new technologies. The following technologies are my forte.",
    image: "/images/codeThinking.svg",
  },
  {
    title: "Static web",
    text: "I used to create my websites with HTML, CSS and JavaScript. I get use to use pure CSS, but I also used Bootstrap, TailwindCSS and NexUI.",
    image: "/images/htmlCss.svg",
  },
  {
    title: "React",
    text: "I have been using React since 2020. I have created some projects with it and I am currently using it for my personal website. I have experience with frameworks such as Vite, NextJS and Remix.",
    image: "/images/react.svg",
  },
  {
    title: "Next Js",
    text: "I like use this framework because it help me to improve my SEO and my web performance using their features such as Static Site Generation or Incremental Site Generation.",
    image: "/images/next.svg",
  },
  {
    title: "About Backend",
    text: "I have a wide experiences about node js and how to create a backend with it. I have used frameworks such as Express, NestJs and Fastify.",
    image: "/images/nestjs.svg",
  },
  {
    title: "Databases",
    text: "I have used SQL database such as MySQL and PostgreSQL, and NoSQL databases such as MongoDB.",
    image: "/images/mongodb.svg",
    secondImage: "/images/postgresql.png",
  },
];

export default function index() {
  return (
    <>
      {/*Slides*/}
      <section>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
          navigation
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          className="bg-neutral-300 h-screen"
        >
          {slidesContent.map(({ title, text, image, secondImage }, index) => (
            <SwiperSlide key={index} className="m-auto">
              <Slide
                imgUrl={image}
                imgUrl2={secondImage}
                title={title}
                text={text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="flex-col xl:flex-row gap-5 p-5 items-center ">
        <div className="text-center basis-1/2">
          <h1 className="font-bold text-5xl text-cyan-600 mb-1">
            Other technologies...
          </h1>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            voluptates incidunt ratione ab cum accusamus numquam nemo
            accusantium, totam asperiores debitis at sed ea deleniti quam
            dolorem nam voluptatum id!
          </Text>
        </div>
        <TableSkills />
      </section>
    </>
  );
}
