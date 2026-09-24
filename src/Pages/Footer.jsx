import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Container from "../components/ui/Container";
import Logo from "../components/ui/Logo";
import { profile, socials } from "../data/profile";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="mt-auto border-t border-line bg-surface">
    <Container className="py-14">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link to="/" className="inline-flex rounded-lg">
            <Logo markClassName="h-9 w-9" />
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {profile.headline}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            <FiMail aria-hidden="true" />
            {profile.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
            Navigate
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
            Elsewhere
          </h2>
          <ul className="mt-4 flex gap-3">
            {socials.map(({ label, href, icon }) => {
              const Icon = iconMap[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-line pt-6">
        <p className="text-xs text-faint">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;
