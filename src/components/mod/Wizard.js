import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Col, Row } from 'react-bootstrap';

gsap.registerPlugin(ScrollTrigger);

const Wizard = () => {
  const wandRef = useRef(null);
  const burstImgRef = useRef(null);
  const bulbImgRef = useRef(null);
  const wizardRef = useRef(null);
  const wizardImgRef = useRef(null);

  useEffect(() => {
    // Initial setup: Wizard is visible
    gsap.set(wizardImgRef.current, { opacity: 1 });
    gsap.set([wandRef.current, burstImgRef.current, bulbImgRef.current], { opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wizardRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(wandRef.current, {
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
        // Wand rotates back and forth 3 times
        gsap.to(wandRef.current, {
          rotation: -30,
          yoyo: true,
          repeat: 5, // 3 times back and forth equals 6 animations
          duration: 0.2,
        });
      },
    })
    .to(wizardImgRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.5, // Wait for wand rotation to finish
    })
    .to(burstImgRef.current, {
      opacity: 1,
      duration: 0.5,
    }, '-=0.5') // Start burst fade-in as wizard fades out
    .to(wandRef.current, {
      opacity: 0,
      duration: 0.5,
    }, '-=0.5') // Start wand fade-out as burst fades in
    .to(burstImgRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 1, // Let the burst stay visible for a moment
    })
    .to(bulbImgRef.current, {
      opacity: 1,
      duration: 0.5,
    });
  }, []);

  return (
    <>
      <div  style={wizardStyle}>
        <Row style={wizard_animation}>
          <Col xl={6}  >
            <div align="center" valign="center">
              <h1 className="title">Crafting Brands That Inspire Action</h1>
              <p>
                We blend creativity, strategy, and data-driven insights to
                elevate your brand and drive meaningful connections with your
                audience.
              </p>
            </div>
          </Col>
          <Col xl={6}  ref={wizardRef}>
            <div className="right" align="right">
              <div className="wizard-content">
                <img
                  src="images/animation/wizard/asset 1.png"
                  height="300px"
                  alt="wizard"
                  className="wizard"
                  ref={wizardImgRef}
                />
                <img
                  src="images/animation/wizard/wand.png"
                  width="150px"
                  alt="wand"
                  className="wand"
                  ref={wandRef}
                />
                <img
                  src="images/animation/wizard/pngegg.png"
                  width="100px"
                  alt="burst"
                  className="burst"
                  ref={burstImgRef}
                />
                <img
                  src="images/animation/wizard/pngegg (1).png"
                  width="30%"
                  alt="bulb"
                  className="bulb"
                  ref={bulbImgRef}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

const wizardStyle = {
  height: '50vh',
  // Add other styles as needed
  display:'flex',
  'justify-content':"center",
  'align-item':"center"
};

const wizard_animation = {
 

}

export default Wizard;
