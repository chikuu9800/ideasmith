import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TextCounter = () => {
  const valueRef = useRef(null);

  useEffect(() => {
    const animateValue = (start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        valueRef.current.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          // Trigger bounce effect after the number animation completes
          gsap.fromTo(valueRef.current, { y: -20 }, { y: 0, duration: 1, ease: "bounce.out" });
        }
      };
      window.requestAnimationFrame(step);
    };

    // Animate from 0 to 16 over 5 seconds
    animateValue(0, 16, 5000);
  }, []);

  return (
    <div style={{ marginTop: '20px', fontSize: '3rem', fontWeight: 'bold' }}>
      <div ref={valueRef}><h1>0
      </h1></div>
    </div>
  );
};

export default TextCounter;
