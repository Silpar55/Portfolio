import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
  slide: number;
  slideNumber: number;
  imgUrl?: string;
  imgUrl2?: string;
};

const Slide = ({ children, slide, slideNumber, imgUrl, imgUrl2 }: Props) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:gap-5 md:px-10 justify-center items-center  text-white text-center pointer-events-none ${
        slide > slideNumber
          ? "-translate-y-full opacity-0 md:-translate-x-full md:-translate-y-0"
          : slide < slideNumber
          ? "translate-y-full opacity-0 md:translate-x-full md:translate-y-0"
          : ""
      } transition duration-1000 absolute`}
    >
      <div className="z-10">{children}</div>

      {imgUrl && (
        <Image
          src={imgUrl}
          alt="Picture of the author"
          width={400}
          height={400}
          className={`object-cover h-auto sm:w-2/3 z-0 opacity-70 mt-5 md:w-2/5 ${
            slideNumber == 3 && "bg-gray-600"
          } ${slideNumber == 4 && "w-1/2"} ${
            slideNumber == 5 && "h-24 w-auto sm:w-auto md:w-auto"
          }`}
        />
      )}
      {imgUrl2 && (
        <Image
          src={imgUrl2}
          alt="Picture of the author"
          width={400}
          height={400}
          className={`object-cover h-auto w-auto z-0 opacity-70 mt-5 
          ${slideNumber == 5 && "w-2/5 md:w-1/4"}`}
        />
      )}
    </div>
  );
};

export default Slide;
