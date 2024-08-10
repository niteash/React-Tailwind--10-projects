import React from "react";
import { Container } from "./Container";

const Hero = () => {
  return (
    //put your own responsiveness into every section below coded

        <Container>
                <main className="h-full  hover:last-child:text-red w-full p-10 bg-black text-white grid sm:grid-cols-1 cursor-pointer lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
      <div className="m-20">
        <h1 className="font-extrabold lg:text-7xl sm:mb-8 mb-5 text-left transition-all md:text-9xl md:ms-10 group">
          YOUR FEET DESERVE THE{" "}
          <span className=" transition-all group-hover:text-[#3efb5a]">
            BEST
          </span>
        </h1>

        <p className="md:ms-10 text-xs w-3/5 opacity-50 mb-8 hover:text-[#3efb5a] transition-all">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className=" md:ms-10 flex gap-8 mb-8">
          <button className="bg-[#3efb5a] hover:bg-white hover:text-black transition-all text-black px-4 py-2">
            Shop Now
          </button>
          <button className="border border-2  hover:bg-white hover:text-black transition-all border-white px-4 py-2">
            Category
          </button>
        </div>
        <div className="md:ms-10">
          <p className="text-sm opacity-40 mb-6 hover:text-[#3efb5a] transition-all uppercase ">
            Also Available On
          </p>
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" mx-auto mt-10 h-auto ">
        <img src="./images/pngwing.com.png" alt="" srcset="" />
      </div>
    </main>
        </Container>
  );
};

export default Hero;
