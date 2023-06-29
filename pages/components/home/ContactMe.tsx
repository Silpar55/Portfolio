import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Text from "../global/Text";

export const ContactMe = () => {
  const iconSocial = [
    {
      faGithub,
      color: "#FFFFFFF",
    },
    {
      faLinkedin,
      color: "#007bb8",
    },
    {
      faInstagram,
      color: "#DD2A7B",
    },
  ];

  return (
    <section className="mt-10 relative  h-72  w-11/12 md:w-7/12 transition duration-500 m-auto mb-10">
      <Image src={"/images/collection.svg"} alt="collection" fill />
      <div className=" bg-black bg-opacity-60 absolute w-full h-full rounded-lg transition hover:bg-opacity-70 duration-500 ">
        <div className="flex flex-col justify-center items-center h-full text-white p-2">
          <h1 className="text-5xl  font-bold mb-5">Contact me</h1>
          <div className="flex justify-center gap-5">
            {iconSocial.map((icon, index) => (
              <FontAwesomeIcon
                icon={Object.values(icon)[0]}
                key={index}
                className="text-6xl m-2 hover:scale-110 transition duration-500"
                color={Object.values(icon)[1]}
              />
            ))}
          </div>
          <Text>
            I am always open to new opportunities. If you want to contact me for
            any reason, please feel free to contact me!
          </Text>
        </div>
      </div>
    </section>
  );
};
