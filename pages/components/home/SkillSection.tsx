import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3,
  faSquareJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Text from "../global/Text";

const iconLanguages = [
  {
    faHtml5,
    color: "#e34c26",
  },
  {
    faSquareJs,
    color: "#f7df1e",
  },
  {
    faCss3,
    color: "#264de4",
  },
  {
    faReact,
    color: "#61dafb",
  },
  {
    faGithub,
    color: "#000000",
  },
];

import React from "react";
import Link from "next/link";

export const SkillSection = () => {
  return (
    <section className="md:flex gap-5 w-11/12 lg:w-8/12 m-auto mt-10">
      {
        // Image - desktop //
      }
      <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:basis-6/12 relative">
        <Image
          src="/images/designexp.svg"
          alt="Undraw design experience"
          className="w-auto"
          width={10}
          height={10}
        />
      </div>
      {
        // Skills text //
      }
      <div className="flex-col basis-6/12 ">
        <div className="flex justify-center gap-5">
          {iconLanguages.map((icon, index) => (
            <FontAwesomeIcon
              key={index}
              icon={Object.values(icon)[0]}
              className="text-center text-6xl"
              color={Object.values(icon)[1]}
            />
          ))}
        </div>
        <Text>
          In this portfolio you will find my skills, my projects and my contact
          information. I am passionate to web development and I am always
          learning new technologies.
        </Text>
        <Link
          href={"/skills"}
          className="bg-indigo-700 text-white  text-lg px-5 py-2  rounded-b-3xl mt-5 block text-center hover:bg-indigo-800 transition transform duration-300 ease-in-out hover:-translate-y-1  hover:text-slate-200 "
        >
          See my skills
        </Link>
      </div>
    </section>
  );
};
