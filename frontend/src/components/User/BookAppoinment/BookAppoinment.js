import "./bookappoinment.css"
import mm from '../../../images/myImage.jpg';
import { Link } from 'react-router-dom';
import {  FaCalendarAlt, 
          FaChevronDown, 
          FaChevronLeft, 
          FaChevronRight, 
          FaMapMarked 
        } from 'react-icons/fa';

function BookAppoinment() {
  return (
    <>
    	{/* Page Content */}
			<div className="content">
				<div className="container">
				
					<div className="row">
						<div className="col-12">
						
							<div className="card">
								<div className="card-body">
									<div className="booking-doc-info">
										<Link to={""} className="booking-doc-img">
											<img src={mm} alt="User Image"/>
										</Link>
										<div className="booking-info">
											<h4><Link to={""}>Dr. Darren Elder</Link></h4>
											{/* <div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">35</span>
											</div>  */}
											<p className="text-muted mb-0"><FaMapMarked/> Newyork, USA</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-sm-4 col-md-6">
									<h4 className="mb-1">11 November 2022</h4>
									<p className="text-muted">Monday</p>
								</div>
								<div className="col-12 col-sm-8 col-md-6 text-sm-right">
									<div className="bookingrange btn btn-white btn-sm mb-3">
										<FaCalendarAlt/>
										<span></span>
										<FaChevronDown ml-2/>
									</div>
								</div>
                            </div>
							{/* Schedule Widget */}
							<div className="card booking-schedule schedule-widget">
							
								{/* Schedule Header */}
								<div className="schedule-header">
									<div className="row">
										<div className="col-md-12">
										
											{/* Day Slot */}
											<div className="day-slot">
												<ul>
													<li className="left-arrow">
														<Link to={""}>
															<FaChevronLeft/>
														</Link>
													</li>
													<li>
														<span>Mon</span>
														<span className="slot-date">11 July <small className="slot-year">2022</small></span>
													</li>
													<li>
														<span>Tue</span>
														<span className="slot-date">12 July <small className="slot-year">2022</small></span>
													</li>
													<li>
														<span>Wed</span>
														<span className="slot-date">13 July <small className="slot-year">2022</small></span>
													</li>
													<li>
														<span>Thu</span>
														<span className="slot-date">14 July <small className="slot-year">2022</small></span>
													</li>
													<li>
														<span>Fri</span>
														<span className="slot-date">15 July <small className="slot-year">2022</small></span>
													</li>
													<li>
														<span>Sat</span>
														<span className="slot-date">16 July <small className="slot-year">2022</small></span>
													</li>
													<li>
														<span>Sun</span>
														<span className="slot-date">17 July <small className="slot-year">2022</small></span>
													</li>
													<li className="right-arrow">
														<Link to={""}>
															<FaChevronRight/>
														</Link>
													</li>
												</ul>
											</div>
											{/* /Day Slot*/}
											
										</div>
									</div>
								</div>
								 {/* /Schedule Header */}
								
								{/* Schedule Content */}
								<div className="schedule-cont">
									<div className="row">
										<div className="col-md-12">
										
											{/* Time Slot */}
											<div className="time-slot">
												<ul className="clearfix">
													<li>
														<Link className="timing" to={""}>
															<span>9:00</span> <span>AM</span>
														</Link>
														<Link className="timing" to={""}>
															<span>10:00</span> <span>AM</span>
														</Link>
														<Link className="timing selected" to={""}>
															<span>11:00</span> <span>AM</span>
														</Link>
													</li>
													
												</ul>
											</div>
											{/* /Time Slot */}
											
										</div>
									</div>
								</div>
								{/* /Schedule Content*/}
								
							</div>
							 {/* /Schedule Widget */}
							
							{/* Submit Section */}
							<div className="submit-section proceed-btn text-right">
								<Link to={""} className="btn btn-primary submit-btn">Proceed to Pay</Link>
							</div>
						 {/* /Submit Section */}
							
						</div>
					</div>
				</div>

			</div>		
			 {/* /Page Content  */}
    </>
  )
}

export default BookAppoinment