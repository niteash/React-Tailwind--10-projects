import React from 'react'
import { Container } from './Container'

const Nav = () => {
  return (
   <Container>
     <section className='flex justify-between p-5 items-center'>
        <div className="">
            <img src="./public/images/Batman-Logo.png" className='w-[100px]' alt="" />
        </div>
        <div className=" uppercase font-bold">
            <ul className='flex gap-5 '>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
        </div>

    </section>
   </Container>
  )
}

export default Nav