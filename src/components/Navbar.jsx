import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-8xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LEFT */}
        <div className="nav-left flex items-center gap-8">
          {/* Logo */}
          <div className="logo">
            <Logo />
          </div>
          {/* Menu */}
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-blue-700">
                Company Reviews
              </Link>
            </li>
            <li>
              <Link to="/salary" className="hover:text-blue-700">
                Salary Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="nav-right flex items-center gap-6 text-sm font-medium">
          <Link to="/signin" className="text-blue-700 hover:underline">
            Sign in
          </Link>

          <ul>
            <li className="border-l pl-6 text-gray-700 hover:text-blue-700 cursor-pointer">
              Employers / Post Jobs
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
