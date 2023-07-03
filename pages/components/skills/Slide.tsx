import Image from "next/image";

type Props = {
  title: string;
  text: string;
  imgUrl?: string;
  imgUrl2?: string;
};

const Slide = ({ imgUrl, imgUrl2, title, text }: Props) => {
  return (
    <section
      className={`flex flex-col xl:flex-row justify-center items-center h-full gap-5 px-5  md:px-20 `}
    >
      <div className="text-center xl:basis-2/3">
        <h1 className="font-bold text-5xl md:text-6xl xl:text-7xl text-cyan-600">
          {title}
        </h1>
        <p className="text-xl md:text-2xl xl:text-3xl px-5 mt-5 font-semibold">
          {text}
        </p>
      </div>
      <div className="flex-col xl:basis-1/3 px-5">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="Picture of the author"
            width={400}
            height={400}
            className={`object-cover w-auto  ${
              imgUrl2 ? "h-32 md:h-56" : " h-44"
            } xl:w-full xl:h-auto m-auto`}
          />
        )}
        {imgUrl2 && (
          <Image
            src={imgUrl2}
            alt="Picture of the author"
            width={400}
            height={400}
            className={`object-cover w-auto h-32 md:h-48 xl:w-full xl:h-auto m-auto`}
          />
        )}
      </div>
    </section>
  );
};

export default Slide;
