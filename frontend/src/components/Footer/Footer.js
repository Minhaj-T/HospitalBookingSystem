import './footer.css'
import { Link } from 'react-router-dom';
import { FaDribbble, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
									<img src="assets/img/footer-logo.png" alt="logo"/>
								</div>
								<div className="footer-about-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									<div className="social-icon">
										<ul>
											<li>	<Link to={""} target="_blank"><FaFacebook/> </Link>
											</li>
											<li>	<Link to={""} target="_blank"><FaTwitter/> </Link>
											</li>
											<li>	<Link to={""} target="_blank"><FaLinkedin/> </Link>
											</li>
											<li>	<Link to={""} target="_blank"><FaInstagram/></Link>
											</li>
											<li>	<Link to={""} target="_blank"><FaDribbble/> </Link>
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
									<li><Link to={""}>Search for Doctors</Link>
									</li>
									<li><Link to={""}>Login</Link>
									</li>
									<li><Link to={""}>Register</Link>
									</li>
									<li><Link to={""}>Booking</Link>
									</li>
									<li><Link to={""}>Patient Dashboard</Link>
									</li>
								</ul>
							</div>
							
						</div>
						<div className="col-lg-3 col-md-6">
							
							<div className="footer-widget footer-menu">
								<h2 className="footer-title">For Doctors</h2>
								<ul>
									<li><Link to={""}>Appointments</Link>
									</li>
									<li><Link to={""}>Chat</Link>
									</li>
									<li><Link to={""}>Login</Link>
									</li>
									<li><Link to={""}>Register</Link>
									</li>
									<li><Link to={""}>Doctor Dashboard</Link>
									</li>
								</ul>
							</div>
							
						</div>
						<div className="col-lg-3 col-md-6">
						
							<div className="footer-widget footer-contact">
								<h2 className="footer-title">Contact Us</h2>
								<div className="footer-contact-info">
									<div className="footer-address">	<span><i className="fas fa-map-marker-alt"></i></span>
										<p>3556 Beech Street, San Francisco,
											<br/>California, CA 94108</p>
									</div>
									<p>	<i className="fas fa-phone-alt"></i>
										+1 315 369 5943</p>
									<p className="mb-0">	<i className="fas fa-envelope"></i>
										doccure@example.com</p>
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
									<p className="mb-0">&copy; 2020 Doccure. All rights reserved.</p>
								</div>
							</div>
							<div className="col-md-6 col-lg-6">
								
								<div className="copyright-menu">
									<ul className="policy-menu">
										<li><Link to={""}>Terms and Conditions</Link>
										</li>
										<li><Link to={""}>Policy</Link>
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
  )
}

export default Footer