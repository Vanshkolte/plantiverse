import React,{useEffect, useRef} from 'react'
import { gsap } from 'gsap';
// import {motion} from 'framer-motion'
export const About = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.from(imgRef.current, 1, { opacity: 0, y: '-200%', ease: 'power3.out' });
  }, []);
  return (
    <div id='about' className='w-full h-screen flex justify-center items-center'>
      <span>About</span>
       <img
       ref={imgRef}
        initial={{opacity:0,y:'-200%'}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"spring"}}
       className='w-96' src="/assets/home/kisan.png" alt="" />
    </div>
  )
}
