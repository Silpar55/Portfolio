import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGit,
  faDocker,
  faLinux,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

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
    color: "#000000",
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

const TableSkills = () => {
  return (
    <table className="table-fixed w-full md:w-8/12 m-auto text-center">
      <thead className="text-2xl font-semibold">
        <tr>
          <th>Technology</th>
          <th>Experience level</th>
        </tr>
      </thead>
      <tbody className="text-xl font-medium">
        {tableContent.map(
          ({ technology, experience, icon, color, details, url }, index) => (
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
                      className="pointer-events-auto hover:scale-105 duration-500 transition"
                    />
                    {technology === "C++" && (
                      <>
                        <FontAwesomeIcon
                          icon={faPlus}
                          size="2xs"
                          color={color}
                          className="pointer-events-auto hover:scale-110 duration-300 transition"
                        />
                        <FontAwesomeIcon
                          icon={faPlus}
                          size="2xs"
                          color={color}
                          className="pointer-events-auto hover:scale-105 duration-500 transition"
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
                    className={`${experience === "High" && "text-green-600"} ${
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
                          className="text-blue-500 duration-500 hover:text-blue-700  transition pointer-events-auto"
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
  );
};

export default TableSkills;
