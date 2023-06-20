import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

interface IconLanguages {
  faHtml5: any;
  color: string;
}

const iconLanguages = [
  {
    faHtml5,
    color: "#e34c26",
  },
  {
    faReact,
    color: "#61dafb",
  },
  {
    faCss3,
    color: "#264de4",
  },
  {
    faSquareJs,
    color: "#f7df1e",
  },
];

export default function Home() {
  return (
    <>
      <main className="mt-5 bg-slate-700 p-5">
        <div className="flex-col justify-center space-y-5">
          <h1 className="text-5xl text-center text-indigo-300 ">
            Welcome to my portfolio
          </h1>
          <h1 className="text-4xl text-center text-gray-100 font-medium">
            Alejandro Silva
          </h1>
          <p className="text-center text-2xl text-gray-100  font-semibold">
            Full stack development
          </p>
        </div>
      </main>
      <section className="md:flex  md:px-10 ">
        <div className="container  sm mx-auto flex p-3 m-5 gap-2">
          <div className="grid grid-cols-2 ">
            {iconLanguages.map((icon, index) => (
              <FontAwesomeIcon
                key={index}
                icon={Object.values(icon)[0]}
                className=" text-6xl"
                color={Object.values(icon)[1]}
              />
            ))}
          </div>

          <div className="basis-9/12">
            <p className="text-lg  from-neutral-600">
              In this portfolio you will find my skills, my projects and my
              contact information. I am passionate to web development and I am
              always learning new technologies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
