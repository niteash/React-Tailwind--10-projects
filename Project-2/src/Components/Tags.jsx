import React from "react";
import { Container } from "./Container";

const Tags = () => {
  return (
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="m-4 lg:m-10">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex items-center bg-black text-white py-3  hover:bg-white hover:text-black hover:border hover:border-black transition-all  px-4 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <button className="font-bold uppercase text-sm lg:text-base">
                Support Chat
              </button>
            </div>

            <div className="flex items-center bg-black text-white  hover:bg-white hover:text-black hover:border hover:border-black transition-all py-3 px-4 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <button className="font-bold uppercase text-sm lg:text-base">
                Via Call
              </button>
            </div>
          </div>

          <div className="mt-6 lg:mt-10">
            <div className="flex items-center border border-2 border-black py-3 px-4 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>

              <button className="font-bold uppercase text-sm lg:text-base">
                Via Email
              </button>
            </div>
          </div>

          <div className="mt-6 lg:mt-10">
            <input
              type="text"
              className="border border-black border-2 px-4 py-2 w-full lg:w-full"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              className="border border-black border-2 px-4 py-2 mt-4 w-full lg:w-full"
              placeholder="Your Email"
              required
            />

            <textarea
              name="textArea"
              rows="4"
              className="px-4 py-2 mt-4 border border-2 border-black w-full lg:w-full"
              placeholder="Leave a message"
            ></textarea>

            <div className="flex items-center bg-black text-white mt-6 py-3 px-4 gap-2 w-full lg:w-1/2">
              <button className="font-bold uppercase text-sm lg:text-base w-full">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center lg:col-span-1">
          <div className="w-full">
            <img
              src="./public/images/Batman.png"
              alt="Batman"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Tags;
