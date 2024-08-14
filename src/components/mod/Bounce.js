import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/bounce.css';

gsap.registerPlugin(ScrollTrigger);

const Bounce = ({ text, duration = 0.6, stagger = 0.1 }) => {
  const bounceRef = useRef(null);

  useEffect(() => {
    const spans = bounceRef.current.querySelectorAll('.word span');

    gsap.fromTo(
      spans,
      { opacity: 1, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        stagger: stagger,
        scrollTrigger: {
          trigger: bounceRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onEnter: () => {
            spans.forEach((span, idx) => {
              setTimeout(() => {
                span.classList.add('active');
              }, 750 * idx);
            });
          },
          onLeaveBack: () => {
            spans.forEach((span) => {
              span.classList.remove('active');
            });
          },
        },
      }
    );

    return () => {
      spans.forEach((span) => {
        span.classList.remove('active');
      });
    };
  }, [duration, stagger]);

  return (
    <div style={{ margin: '20px' }} ref={bounceRef}>
      <div className="word">
        {text.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </div>
  );
};

export default Bounce;
