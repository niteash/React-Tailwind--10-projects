import React from "react";
import { Container } from "./Container";

const Nav = () => {
  return (
 <Container>
     <section>
      <nav className=" cursor-pointer bg-white h p-5 flex justify-between items-center ">
        <div className="logo">
          <img src="./images/brand_logo.png" alt="logo" />
        </div>

        <ul className="flex transition-all font-bold uppercase">
          <li href="#" className="mx-4 hover:text-[#3efb5a] transition-all  hover:underline hover:under">
            <a href="#"> Menu</a>{" "}
          </li>
          <li href="#" className="mx-4 hover:text-[#3efb5a] transition-all  hover:underline hover:under">
            {" "}
            <a href="#">Location</a>{" "}
          </li>
          <li href="#" className="mx-4 hover:text-[#3efb5a] transition-all  hover:underline hover:under">
            {" "}
            <a href="#">About</a>{" "}
          </li>
          <li href="#" className="mx-4 hover:text-[#3efb5a] transition-all  hover:underline hover:under">
            {" "}
            <a href="#">Contact</a>{" "}
          </li>
        </ul>

        <button className="bg-black text-white px-4 py-2  uppercase font-bold transition-all hover:bg-[#3efb5a] hover:text-black">
          login
        </button>
      </nav>
    </section>
 </Container>
  );
};

export default Nav;
