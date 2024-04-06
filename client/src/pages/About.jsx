import React from 'react'
import {motion} from 'framer-motion'
export const About = () => {
  return (
    <div id='about' className='w-full h-screen flex justify-center items-center'>
      <span>About</span>
       <motion.img
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:30}}
        transition={{type:"spring"}}
       className='w-[60vw] z-40' src="/assets/home/model.svg" alt="" />
    </div>
  )
}
