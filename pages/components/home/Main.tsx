import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Main = () => {
  return (
    <main className="flex justify-center items-center h-screen overflow-hidden bg-black bg-opacity-90">
      <Image
        src={"/images/collection.svg"}
        alt="test"
        width={100}
        height={100}
        className="absolute w-full h-full opacity-20"
      />
      <div className="relative flex-col text-center justify-center space-y-10 text-amber-400">
        <h1 className="text-5xl sm:text-7xl font-medium">Alejandro Silva</h1>
        <p className="text-4xl sm:text-5xl font-semibold">Web development</p>
        <Link
          href={"/about-me"}
          className="flex justify-center gap-2 text-4xl sm:text-5xl hover:text-sky-700 hover:scale-125 transition duration-700 cursor-pointer"
        >
          <span>About me</span>
          <span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-5xl sm:text-6xl"
            />
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Main;
