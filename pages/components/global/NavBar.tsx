import Link from "next/link";

interface link {
  title: string;
  url: string;
}

const NavBar = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "Skills", url: "/skills" },
    { title: "My projects", url: "/projects" },
    { title: "Contact me", url: "/contact-me" },
    { title: "About", url: "/about-me" },
  ];

  return (
    <nav className="z-30 text-sm fixed top-0 w-full flex justify-center sm:space-x-4 md:space-x-8 md:text-lg bg-slate-50">
      {links.map((link: link, index) => (
        <Link
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-300 hover:text-slate-900 text-center"
          key={index}
          href={link.url}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
