import React, { useRef } from 'react'
import '../css/peacock-animation.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const Peacock = () => {
  const peacockref = useRef()

useGSAP(()=>{

    // Motion path animation
    gsap.to(peacockref.current, {
      duration: 5,
      motionPath: {
        path: [
          { x: 183, y: -70 },
          { x: 366, y: -100 },
          { x: 550, y: -150 },
          { x: 550, y: -250 },
          { x: 366, y: -120 },
          { x: 733, y: -70 },
          { x: 810, y: -100 },
        ],
        align: peacockref.current,
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      },
      width: '300px',  // Increase the width as it moves
      height: '300px', // Increase the height as it moves
      ease: 'power2.inOut'
    });
})

  return (
    <div>
      <div className='peacock-animation' style={{height:"100vh"}}>
      
        <div className='peacock-tex'>
          <p>
            Unleash creativity that knows no bounds, transforming ideas into captivating stories that resonate and inspire.
          </p>
          
        </div>
        <img src='images/animation/pecock/peacock.png' alt='' ref={peacockref} className='peacock' />
      </div>
    </div>
  )
}

export default Peacock
