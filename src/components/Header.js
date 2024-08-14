import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css';
import { useTheme } from './context/Themecontext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    // Function to close the navbar on link click
    const closeNavbar = () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    };

    return (
        <header className={darkMode ? 'header-dark-mode' : ''}>
            <Navbar expand="lg" variant={darkMode ? 'dark' : 'light'}>
                <Container>
                    <Navbar.Brand >
                       <Link to="/"><img src={darkMode ? "images/logo-dark.png" : "images/logo-light.png"} alt="Agency Logo" width="150" /></Link> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" onClick={closeNavbar}><h5>Home</h5></Nav.Link>
                            <Nav.Link as={Link} to="/about" onClick={closeNavbar}><h5>About Us</h5></Nav.Link>
                            <Nav.Link as={Link} to="/services" onClick={closeNavbar}><h5>Services</h5></Nav.Link>
                            <Nav.Link as={Link} to="/portfolio" onClick={closeNavbar}><h5>Portfolio</h5></Nav.Link>
                            <Nav.Link as={Link} to="/contact" onClick={closeNavbar}><h5>Contact</h5></Nav.Link>

                            <div className="custom-toggle-container ms-3">
                                <label className="bb8-toggle">
                                    <input
                                        className="bb8-toggle__checkbox"
                                        type="checkbox"
                                        checked={darkMode}
                                        onChange={toggleDarkMode}
                                    />
                                    <div className="bb8-toggle__container">
                                        <div className="bb8-toggle__scenery">
                                            {/* Add stars and other scenery elements here */}
                                            <div className="bb8-toggle__star"></div>
                                            <div className="bb8-toggle__star"></div>
                                            <div className="bb8-toggle__star"></div>
                                            <div className="bb8-toggle__star"></div>
                                            <div className="bb8-toggle__star"></div>
                                            <div className="bb8-toggle__star"></div>
                                            <div className="bb8-toggle__star"></div>
                                            <div className="tatto-1"></div>
                                            <div className="tatto-2"></div>
                                            <div className="gomrassen"></div>
                                            <div className="hermes"></div>
                                            <div className="chenini"></div>
                                            <div className="bb8-toggle__cloud"></div>
                                            <div className="bb8-toggle__cloud"></div>
                                            <div className="bb8-toggle__cloud"></div>
                                        </div>
                                        <div className="bb8">
                                            <div className="bb8__head-container">
                                                <div className="bb8__antenna"></div>
                                                <div className="bb8__antenna"></div>
                                                <div className="bb8__head"></div>
                                            </div>
                                            <div className="bb8__body"></div>
                                        </div>
                                        <div className="artificial__hidden">
                                            <div className="bb8__shadow"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
