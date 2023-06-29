import Image from "next/image";
import Link from "next/link";

import Text from "../global/Text";

export const ProjectSection = () => {
  let i = [1, 2, 3, 4];

  return (
    <section className="mt-10 px-5 lg:w-10/12 lg:m-auto lg:mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 m-auto items-center lg:gap-5">
        {i.map((i: number, index) => (
          <div className="relative" key={i}>
            <Image
              src="/images/project1.png"
              width={500}
              height={300}
              alt="project1"
              className="block rounded-md"
            />
            <div className="absolute bg-opacity-30 bg-black flex flex-col justify-end items-center inset-0 rounded-md transition duration-700 hover:bg-opacity-70 cursor-pointer text-transparent hover:text-yellow-500">
              <h1
                className="absolute text-xl font-bold h-full w-full flex justify-center items-center mb-2"
                onClick={() => {
                  window.open("https://premier-market-rates-client.vercel.app");
                }}
              >
                Go to the project
              </h1>
              <Link
                href={"https://github.com/Silpar55/premier-market-rates-client"}
                target="_blank"
                className="absolute bg-indigo-700 text-white text-lg w-full py-2 rounded-t-3xl mt-5 block text-center  transition transform duration-300 ease-in-out hover:text-slate-400"
              >
                See the code
              </Link>
            </div>
          </div>
        ))}
        <div className="col-span-2 sm:row-start-1 sm:col-end-4 sm:col-span-1 sm:row-span-2 md:col-end-5 md:col-span-2 sm:px-5 lg:row-auto lg:col-span-5">
          <h1
            className="
          text-3xl 
          text-center
          font-bold
          text-indigo-500
          my-5
          "
          >
            Collection of my experiences
          </h1>
          <Text>
            I have been practising web developement since 2019. I have been
            working with many technologies and frameworks and this the result of
            my journey!
          </Text>
        </div>
      </div>
    </section>
  );
};
