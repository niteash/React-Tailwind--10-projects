import React, { useState } from "react";
import { Container } from "./Container";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <section>
        <nav className="cursor-pointer w-full bg-white p-5 flex flex-wrap sm:flex-nowrap  justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <img src="./images/brand_logo.png" alt="logo" className="h-8 w-auto md:h-10 lg:h-12" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="block sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`w-full sm:flex sm:flex-row sm:mx-auto justify-center font-bold uppercase mt-4 sm:mt-0 ${
              menuOpen ? '' : 'hidden sm:block'
            } md:text-lg lg:text-xl`}
          >
            <li className="mx-4 hover:text-[#50e466] transition-all hover:underline hover:underline-offset-8 md:mx-6 lg:mx-8">
              <a href="#">Menu</a>
            </li>
            <li className="mx-4 hover:text-[#50e466] transition-all hover:underline hover:underline-offset-8 md:mx-6 lg:mx-8">
              <a href="#">Location</a>
            </li>
            <li className="mx-4 hover:text-[#50e466] transition-all hover:underline hover:underline-offset-8 md:mx-6 lg:mx-8">
              <a href="#">About</a>
            </li>
            <li className="mx-4 hover:text-[#50e466] transition-all hover:underline hover:underline-offset-8 md:mx-6 lg:mx-8">
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* Login Button */}
          <button className="bg-black text-white hidden sm:block px-4 py-2 uppercase font-bold transition-all hover:bg-[#3efb5a] hover:text-black md:px-6 lg:px-8">
            login
          </button>
        </nav>
      </section>
    </Container>
  );
};

export default Nav;
