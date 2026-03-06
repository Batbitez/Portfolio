import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-16 py-4 mt-10">
      {/* left group */}
      <ul className="flex">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>

      {/* right group */}
      <ul className="flex gap-4">
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li> · </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li> · </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
