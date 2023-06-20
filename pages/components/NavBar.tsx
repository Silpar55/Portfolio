import Link from "next/link";

interface link {
  title: string;
  url: string;
}

const NavBar = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about-me" },
    { title: "Skills", url: "/skills" },
    { title: "My projects", url: "/projects" },
    { title: "Contact me", url: "/contact-me" },
  ];

  return (
    <nav className="flex justify-center sm:space-x-4 md:space-x-8 md:text-lg bg-slate-50 ">
      {links.map((link: link, index) => (
        <Link
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
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
