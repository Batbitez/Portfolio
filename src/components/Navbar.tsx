import { NavLink } from "react-router";

const base = import.meta.env.BASE_URL;

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-24 py-4 text-lg">
      {/* Logo */}
      <div className="mb-4 sm:mb-0">
        <NavLink to="/">
          <img
            src={`${base}images/ui/Logo_White.png`}
            alt="Home"
            className="h-20 w-auto sm:h-26"
          />
        </NavLink>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-4 items-center justify-center w-full sm:w-auto">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive ? "text-gray-400" : "hover:text-plum"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="hidden sm:inline">·</li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive ? "text-gray-400" : "hover:text-plum"
              }`
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="hidden sm:inline">·</li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive ? "text-gray-400" : "hover:text-plum"
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li className="hidden sm:inline">·</li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive ? "text-gray-400" : "hover:text-plum"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
