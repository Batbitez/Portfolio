import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-24 py-2 mt-10 text-lg">
      {/* left group */}
      <ul className="flex">
        <li>
          <NavLink to="/">
            <img
              src="/images/ui/Logo_White.png"
              alt="Home"
              className="h-26 w-auto"
            />
          </NavLink>
        </li>
      </ul>

      {/* right group */}
      <ul className="flex gap-4">
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
        <li> · </li>
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
        <li> · </li>
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
        <li> · </li>
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
