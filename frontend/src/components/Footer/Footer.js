import './footer.css';
import { Link } from 'react-router-dom';
import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import FooterLogo from '../../images/logoFooter.png';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src={FooterLogo} alt="logo" />
                  </div>
                  <div className="footer-about-content">
                    <p>
                      Carewell is on a mission to make quality healthcare
                      affordable and accessible for over a billion+ Indians. We
                      believe in empowering our users with the most accurate,
                      comprehensive, and curated information and care, enabling
                      them to make better healthcare decisions.
                    </p>
                    <div className="social-icon">
                      <ul>
                        <li>
                          {' '}
                          <Link to={''} target="_blank">
                            <FaFacebook />{' '}
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link to={''} target="_blank">
                            <FaTwitter />{' '}
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link to={''} target="_blank">
                            <FaLinkedin />{' '}
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link to={''} target="_blank">
                            <FaInstagram />
                          </Link>
                        </li>
                        <li>
                          {' '}
                          <Link to={''} target="_blank">
                            <FaDribbble />{' '}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Patients</h2>
                  <ul>
                    <li>
                      <Link to={'/doctor-search'}>Search for Doctors</Link>
                    </li>
                    <li>
                      <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                      <Link to={'/signup'}>Register</Link>
                    </li>
                    <li>
                      <Link to={'/doctor-search'}>Booking</Link>
                    </li>
                    <li>
                      <Link to={'/user'}>Patient Dashboard</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Doctors</h2>
                  <ul>
                    <li>
                      <Link to={'/doctor/appointments'}>Appointments</Link>
                    </li>
                    <li>
                      <Link to={'/doctor/messenger'}>Chat</Link>
                    </li>
                    <li>
                      <Link to={'/doctor'}>Login</Link>
                    </li>
                    <li>
                      <Link to={'/doctor'}>Register</Link>
                    </li>
                    <li>
                      <Link to={'/doctor/'}>Doctor Dashboard</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      {' '}
                      <span>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <p>
                        KUBZ Coworking & Office Space, Padamugal - Palachuvadu
                        Rd
                        <br /> Satellite Twp, Padamughal, Kakkanad, Kerala
                        682037
                      </p>
                    </div>
                    <p>
                      {' '}
                      <i className="fas fa-phone-alt"></i>
                      +91 9539920559
                    </p>
                    <p className="mb-0">
                      {' '}
                      <i className="fas fa-envelope"></i>
                      minhajt.mh@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container-fluid">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0">
                      &copy; 2020 Carewell. All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <Link to={''}>Terms and Conditions</Link>
                      </li>
                      <li>
                        <Link to={''}>Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
