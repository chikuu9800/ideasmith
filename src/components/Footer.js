import React from 'react';
import { useTheme } from './context/Themecontext';
import './css/Footer.css';

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    
    <footer className={darkMode ? 'footer-dark-mode' : ''}>
            <div className="container-xxl">
                <div className="upper">
                <div className="logo">
                <img src={darkMode ? "images/logo-dark.png" : "images/logo-light.png"} alt="Agency Logo" width="auto" height="30px" />
              </div>
                    <div className="connect" valign="center">
                        <div className="f-para">
                            <p>
                                connect with us
                            </p>
                        </div>
                        <div className="f-icon">
                        <div className="twitter">
                          <img 
                            src="images/footer/mdi--twitter.png" 
                            style={{ width: '20px' }} // Corrected inline style object
                            alt="twitter" 
                          />
                        </div>
                        <div className="instagram">
                          <img 
                            src="images/footer/mdi--instagram.png" 
                            style={{ width: '20px' }} // Corrected inline style object
                            alt="instagram" 
                          />
                        </div>
                      </div>
                      

                    </div>
                </div>
                <hr />
                <div className="lower">
                    <div className="terms">
                        <ul>
                            <li>terms & condition</li>
                            <li>contact</li>
                            <li>location</li>
                            <li> hiring </li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <p> &copy; ideasmith</p>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
