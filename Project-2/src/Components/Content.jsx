import React from 'react';
import { Container } from './Container';

const Content = () => {
  return (
    <Container>
      <section className="p-4 lg:p-10">
        <div className="text-center md:text-left">
          <div className="uppercase font-extrabold text-4xl md:text-7xl mb-8">
            <h1>Contact Us</h1>
          </div>
          <div className="text-slate-500 text-sm md:text-base mx-auto md:mx-0 w-full md:w-4/5">
            <p>
              LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Content;
