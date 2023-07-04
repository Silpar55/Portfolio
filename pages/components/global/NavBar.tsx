import Link from "next/link";
import { useRouter } from "next/router";

interface link {
  title: string;
  url: string;
}
const links = [
  { title: "Home", url: "/" },
  { title: "Skills", url: "/skills" },
  { title: "My projects", url: "/projects" },
  { title: "Contact me", url: "/contact-me" },
  { title: "About me", url: "/about-me" },
];

const NavBar = () => {
  const router = useRouter();

  const { pathname } = router;

  return (
    <nav
      className={`flex flex-col justify-center items-center w-full bg-slate-200 z-10 text-lg sm:sticky sm:top-0 sm:flex-row sm:space-x-4 md:space-x-8 md:text-lg`}
    >
      {links.map(({ title, url }: link, index) => (
        <Link
          className={`rounded-lg px-3 py-2 my-1 sm:my-2 text-slate-700 ${
            pathname === url
              ? "bg-sky-400 text-white"
              : "hover:bg-slate-300 hover:text-slate-900 text-center"
          } font-medium`}
          key={index}
          href={url}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
