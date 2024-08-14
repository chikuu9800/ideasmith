import React from 'react';
import './css/AboutUs.css'; // Add your custom styles here
import Joureny from './mod/Joureny';


const AboutUs = () => {
  return (
    <div className="about-us container">
      <Joureny />
      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="event">
          <h3>2008</h3>
          <p>Founded with a vision to innovate...</p>
        </div>
        <div className="event">
          <h3>2015</h3>
          <p>Expanded to new markets...</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
