import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './css/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        // Here you can add functionality to handle form submission
        // For example, sending data to a backend service
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <Container className="contact-container contact-c">
            <h1 className="text-center my-4">Contact Us</h1>
            <Row>
                <Col md={6}>
                    <h3>Get in Touch</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Your message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Send Message
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h3>Contact Information</h3>
                    <p><strong>Address:</strong> 123 Food Street, Gourmet City, FC 45678</p>
                    <p><strong>Email:</strong> support@fooddelivery.com</p>
                    <p><strong>Phone:</strong> +123 456 7890</p>
                    <div className="email" align="right">
                    <img className="email-img" width="30%" src="images/contact/email.png" alt='email'/></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
