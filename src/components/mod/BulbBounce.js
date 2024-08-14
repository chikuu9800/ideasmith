
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BulbAnimation = () => {
    const bulbRef = useRef(null);

    useEffect(() => {
        const animateBulb = () => {
            gsap.timeline()
                .to(bulbRef.current, {
                    scaleX: 2,
                    scaleY: 0.2,
                    duration: 0.35,
                    ease: "power1.inOut",
                })
                .to(bulbRef.current, {
                    scaleX: 1,
                    scaleY: 1,
                    y: -150,
                    duration: 0.15,
                    ease: "power1.inOut",
                })
                .to(bulbRef.current, {
                    scaleX: 1,
                    scaleY: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power1.inOut",
                })
                .to(bulbRef.current, {
                    x: 100,
                    duration: 0.5,
                    ease: "bounce.out",
                })
                .to(bulbRef.current, {
                    scale: 2,
                    duration: 0.5,
                    ease: "power1.inOut",
                });
        };

        animateBulb();
    }, []);

    return (
        <div style={{ marginTop: '20px' }}>
            <img
                src="images/animation/wizard/pngegg (1).png"
                alt="Bulb"
                ref={bulbRef}
                style={{ width: '100px', height: 'auto', position: "absolute", right: "100px" }}
            />
        </div>
    );
};

export default BulbAnimation;
