import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";
import { useTheme } from "../hooks/useTheme.jsx";
import { RESUME_URL } from "../data/profile";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm font-medium transition-colors ${
      isActive ? "text-accent" : "text-muted hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4">
          <NavLink to="/" className="rounded-lg">
            <Logo markClassName="h-8 w-8" />
          </NavLink>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={linkClass} end={item.to === "/"}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button href={RESUME_URL} size="sm" variant="outline">
                <FiDownload aria-hidden="true" />
                Resume
              </Button>
            </div>
          </div>

          {/* Mobile trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-bg md:hidden animate-fade-up"
        >
          <Container className="py-4">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.to} className="border-b border-line last:border-0">
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block py-3.5 text-base font-medium transition-colors ${
                        isActive ? "text-accent" : "text-muted"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button
              href={RESUME_URL}
              variant="outline"
              className="mt-4 w-full"
            >
              <FiDownload aria-hidden="true" />
              Download resume
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
