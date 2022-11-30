import { navbarLinks } from "../../data/dummy";
import { NavbarLinkProps } from "./Navbar.types";

const Logo = () => <img src="assets/logo.png" alt="logo" className="w-32" />;

const NavbarLink = ({
  label,
  destination,
  variant = "primary",
}: NavbarLinkProps) => {
  const style =
    variant === "primary"
      ? "bg-btn-light-primary text-btn-light-primary"
      : "bg-btn-light-secondary text-btn-light-secondary";
  return (
    <a
      href={destination}
      className={`uppercase rounded-lg px-3 py-2 text-sm group relative ${style}`}
    >
      {label}
      {variant === "primary" ? (
        <span
          className="
          absolute left-0 -bottom-1
          h-1 w-0 bg-main-light-third
          group-hover:w-full
          transition-all duration-300
          "
        />
      ) : null}
    </a>
  );
};

const NavbarLinks = () => (
  <ul className="flex items-center gap-3 p-0 m-0">
    {navbarLinks.map((link) => (
      <NavbarLink key={link.label} {...link} />
    ))}
  </ul>
);

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
