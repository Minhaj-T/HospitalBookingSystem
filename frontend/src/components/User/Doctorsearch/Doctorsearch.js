import './doctorsearch.css';
import mm from '../../../images/myImage.jpg';
import { Link } from 'react-router-dom';
import { FcInfo } from 'react-icons/fc';
import { FaMapMarkerAlt, FaMoneyBillAlt,FaThumbsUp } from 'react-icons/fa';

function Doctorsearch() { 
  return ( 
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="card search-filter">
                <div className="card-header">
                  <h4 className="card-title mb-0">Search Filter</h4>
                </div>
                <div className="card-body">
                  <div className="filter-widget">
                    <div className="cal-icon">
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="Select Date"
                      />
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4>Gender</h4>
                    <div>
                      <label className="custom_radio">
                      <input type="checkbox" name="gender_type" />
                        <span className="checkmark"></span> Male Doctor
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input type="checkbox" name="gender_type" />
                        <span className="checkmark"></span> Female Doctor
                      </label>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <h4>Select Specialist</h4>
                    <div>
                      <label className="custom_radio">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          checked
                        />
                        <span className="checkmark"></span> Urology
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          checked
                        />
                        <span className="checkmark"></span> Neurology
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark"></span> Dentist
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark"></span> Orthopedic
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark"></span> Cardiologist
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input type="checkbox" name="select_specialist" />
                        <span className="checkmark"></span> Cardiologist
                      </label>
                    </div>
                  </div>
                  <div className="btn-search">
                    <button type="button" className="btn btn-block">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <Link to={""}>
                          <img
                            src={mm}
                            className="img-fluid"
                            alt="User"
                          />
                        </Link>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <Link to={""}>Dr. Minhaj</Link>
                        </h4>
                        <p className="doc-speciality">
                          MDS - Periodontology and Oral Implantology, BDS
                        </p>
                        <h5 className="doc-department">
                          {/* <img
                            src="assets/img/specialities/specialities-05.png"
                            className="img-fluid"
                            alt="Speciality"
                          /> */}
                          Dentist
                        </h5>
                        {/* <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating">
                            (17)
                          </span>
                        </div> */}
                        <div className="clinic-details">
                          <p className="doc-location">
                            <FaMapMarkerAlt/> Kerala, India
                          </p>
                        </div>
                        
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <div className="clini-infos">
                        <ul>
                          <li>
                            <FaThumbsUp/> 98%
                          </li>
                          <li>
                            <FaMapMarkerAlt/> Malppuram, Kerala
                          </li>
                          <li>
                            <FaMoneyBillAlt/> ₹300 - ₹1000{' '}
                            <FcInfo size={18} data-toggle="tooltip" title="cellWithImg" />
                          </li>
                        </ul>
                      </div>
                      <div className="clinic-booking">
                        <Link className="view-pro-btn" to={"/doctor-profile"}>
                          View Profile
                        </Link>
                        <Link className="apt-btn" to={"/user/book-appoinment"}>
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="load-more text-center">
                <Link className="btn btn-primary btn-sm" to={""}>
                  Load More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctorsearch;
