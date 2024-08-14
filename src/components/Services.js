import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './css/services.css'; // Import the CSS file for styling

const Services = () => {
  return (
    <Container className="services-container services-c">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Delivering top-notch solutions tailored to your needs</p>
      </header>

      <Row className="services-row">
        <Col md={4} className="service-item services-c">
          <div className="service-icon">
            <img src="images/video-ads.png" alt="Video Ads" />
          </div>
          <h2>Video Ads</h2>
          <p>Engage your audience with high-quality video advertisements that capture attention and drive results.</p>
          <Button variant="primary" href="#video-ads">Learn More</Button>
        </Col>
        <Col md={4} className="service-item services-c">
          <div className="service-icon">
            <img src="images/social-media.png" alt="Social Media" />
          </div>
          <h2>Social Media</h2>
          <p>Enhance your online presence and connect with your audience through strategic social media campaigns.</p>
          <Button variant="primary" href="#social-media">Learn More</Button>
        </Col>
        <Col md={4} className="service-item services-c">
          <div className="service-icon">
            <img src="images/headline.png" alt="Headlines" />
          </div>
          <h2>Headlines</h2>
          <p>Create impactful headlines that grab attention and convey your message effectively across all platforms.</p>
          <Button variant="primary" href="#headlines">Learn More</Button>
        </Col>
      </Row>

      <section id="video-ads" className="service-detail services-c">
        <h2>Video Ads</h2>
        <p>Detailed description about Video Ads service...</p>
        <Button variant="secondary">View More</Button>
      </section>
      <section id="social-media" className="service-detail services-c">
        <h2>Social Media</h2>
        <p>Detailed description about Social Media service...</p>
        <Button variant="secondary">View More</Button>
      </section>
      <section id="headlines" className="service-detail services-c">
        <h2>Headlines</h2>
        <p>Detailed description about Headlines service...</p>
        <Button variant="secondary">View More</Button>
      </section>
    </Container>
  );
};

export default Services;
