import React from 'react'
import '../css/globals.css'
import { Navbar } from './Navbar'
import { About } from './About'
import { Detection } from './Detection'
import { Feedback } from './Feedback'
import { Carousell } from './Carousell'
import { Footer } from '../component/Footer'
import { Info } from './Info'
export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='relative w-full h-screen  gap-12 z-20 '>
        <img className='w-[70%] absolute bottom-0 left-0 h-full z-10' src="/assets/home/kisan.svg" alt="" />
      <div className='absolute z-10 top-80 right-96 text-white flex flex-col font-bold'>
        <span className='text-7xl'>Keep Your</span>
        <span className='text-7xl'>Plant alive</span>
        <span className='text-xl text-center'>Protect Your crop , Early Detection , Better Yeild</span>
      </div>
        <img className='absolute top-0 z-0 w-full h-full' src="/assets/bg/bg.png" alt="" />
    </div>
    <Carousell/>
    <Info/>
    <About/>
    <Detection/>
    <Feedback/>
    <Footer/>
    </>
  )
}
