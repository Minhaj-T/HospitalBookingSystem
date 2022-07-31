import './doctorprofile.css';
import '../Doctorsearch/doctorsearch.css';
import * as api from '../../../api/index';
import { Link, useParams } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaThumbsUp,
  FaBookmark,
  FaCommentAlt,
  FaPhone,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import moment from 'moment';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite_doctor,
  reset,
  removeFavorite_doctor
} from '../../../features/users/auth/authSlice';
import { toast } from 'react-toastify';

function DoctorProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // get the current state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [Doctor, setDoctor] = useState({ loading: false, done: false });

  useEffect(() => {
    !Doctor.done && getDoctor(id);
  }, []);

  const getDoctor = async (id) => {
    setDoctor((prev) => ({ ...prev, loading: true }));
    let { data } = await api.getDoctor(id);

    if (data?.data) {
      setDoctor((prev) => ({
        ...prev,
        ...data?.data,
        loading: false,
        done: true,
      }));
    }
  };
  
  //add favorites
  const handleAddFavorite = (event) => {
    event.preventDefault();
    const data = {
      doctorId: Doctor?._id,
    };
    dispatch(addFavorite_doctor(data));
  };
  
  //remove favorites
  const handleRemoveFavorite = (event) => {
    event.preventDefault();
    const data = {
      doctorId: Doctor?._id,
    };
    dispatch(removeFavorite_doctor(data));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  // Loading page
  if (Doctor.loading || isLoading) {
    return <Spinner />;
  }

  console.log('a  ');

  return (
    <>
      <Header />
      <div className="content mt-5" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="doctor-widget">
                <div className="doc-info-left">
                  <div className="doctor-img">
                    <img
                      src={Doctor?.profile_image}
                      className="img-fluid"
                      alt="User"
                    />
                  </div>
                  <div className="doc-info-cont">
                    <h4 className="doc-name">
                      Dr.{Doctor?.name} {Doctor?.lastname}
                    </h4>
                    <p className="doc-speciality">{Doctor?.degree}</p>
                    <p className="doc-department">{Doctor?.specialization}</p>
                    <div className="clinic-details">
                      <p className="doc-location">
                        <FaMapMarkerAlt /> {Doctor?.state},{Doctor?.country} -{' '}
                        <Link to={''}>Get Directions</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="doc-info-right">
                  <div className="clini-infos">
                    <ul>
                      <li>
                        <FaThumbsUp /> 99%
                      </li>
                      <li>
                        <FaMapMarkerAlt /> {Doctor?.city}, {Doctor?.state}
                      </li>
                      <li>
                        <FaMoneyBillAlt /> ₹1000 per hour{' '}
                      </li>
                    </ul>
                  </div>
                  <div className="doctor-action">
                    {user['favourites'].some(
                      (D) => D.doctorId === Doctor._id
                    ) ? (
                      <Link
                        to={''}
                        className="btn btn-white fav-btn active"
                        onClick={handleRemoveFavorite}
                      >
                        <FaBookmark />
                      </Link>
                    ) : (
                      <Link
                        to={''}
                        className="btn btn-white fav-btn"
                        onClick={handleAddFavorite}
                      >
                        <FaBookmark />
                      </Link>
                    )}

                    <Link to={''} className="btn btn-white msg-btn">
                      <FaCommentAlt />
                    </Link>
                    <Link
                      to={''}
                      className="btn btn-white call-btn"
                      data-toggle="modal"
                      data-target="#voice_call"
                    >
                      <FaPhone />
                    </Link>
                  </div>
                  <div className="clinic-booking">
                    <Link to={''} className="apt-btn">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body pt-0">
              {/* Tab Menu  */}
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to={'#doc_overview'}
                      data-bs-toggle="tab"
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={'#doc_business_hours'}
                      data-bs-toggle="tab"
                    >
                      Business Hours
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /Tab Menu  */}

              {/* Tab Content  */}
              <div className="tab-content pt-0">
                {/* Overview Content  */}
                <div
                  role="tabpanel"
                  id="doc_overview"
                  className="tab-pane fade show active"
                >
                  <div className="row">
                    <div className="col-md-12 col-lg-9">
                      {/* About Details  */}
                      <div className="widget about-widget">
                        <h4 className="widget-title">About Me</h4>
                        <p>{Doctor?.biography}</p>
                      </div>
                      {/* /About Details  */}

                      {/* Education Details  */}
                      <div className="widget education-widget">
                        <h4 className="widget-title">Education</h4>
                        <div className="experience-box">
                          <ul className="experience-list">
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <Link to={''} className="name">
                                    {Doctor?.college}
                                  </Link>
                                  <div>{Doctor?.degree}</div>
                                  <span className="time">
                                    {Doctor?.completion}
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /Education Details  */}

                      {/* Experience Details  */}
                      <div className="widget experience-widget">
                        <h4 className="widget-title">Work & Experience</h4>
                        <div className="experience-box">
                          <ul className="experience-list">
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <Link to={''} className="name">
                                    {Doctor?.hospitalname}
                                  </Link>
                                  <span className="time">
                                    {Doctor?.from}-{Doctor?.to}
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /Experience Details  */}

                      {/* Awards Details  */}
                      {/* <div className="widget awards-widget">
                        <h4 className="widget-title">Awards</h4>
                        <div className="experience-box">
                          <ul className="experience-list">
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <p className="exp-year">July 2019</p>
                                  <h4 className="exp-title">Humanitarian Award</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Proin Link ipsum tellus.
                                    Interdum et malesuada fames ac ante ipsum
                                    primis in faucibus.
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <p className="exp-year">March 2011</p>
                                  <h4 className="exp-title">
                                    Certificate for International Volunteer
                                    Service
                                  </h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Proin Link ipsum tellus.
                                    Interdum et malesuada fames ac ante ipsum
                                    primis in faucibus.
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <p className="exp-year">May 2008</p>
                                  <h4 className="exp-title">
                                    The Dental Professional of The Year Award
                                  </h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Proin Link ipsum tellus.
                                    Interdum et malesuada fames ac ante ipsum
                                    primis in faucibus.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      {/* /Awards Details  */}

                      {/* Services List  */}
                      {/* <div className="service-list">
                        <h4>Services</h4>
                        <ul className="clearfix">
                          <li>Tooth cleaning </li>
                          <li>Root Canal Therapy</li>
                          <li>Implants</li>
                          <li>Composite Bonding</li>
                          <li>Fissure Sealants</li>
                          <li>Surgical Extractions</li>
                        </ul>
                      </div> */}
                      {/* /Services List  */}

                      {/* Specializations List  */}
                      {/* <div className="service-list">
                        <h4>Specializations</h4>
                        <ul className="clearfix">
                          <li>Children Care</li>
                          <li>Dental Care</li>
                          <li>Oral and Maxillofacial Surgery </li>
                          <li>Orthodontist</li>
                          <li>Periodontist</li>
                          <li>Prosthodontics</li>
                        </ul>
                      </div> */}
                      {/* /Specializations List  */}
                    </div>
                  </div>
                </div>

                {/* Business Hours Content  */}
                <div
                  role="tabpanel"
                  id="doc_business_hours"
                  className="tab-pane fade"
                >
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      {/* Business Hours Widget  */}
                      <div className="widget business-widget">
                        <div className="widget-content">
                          <div className="listing-hours">
                            <div className="listing-day current">
                              <div className="day">
                                Today <span>{moment().format('LL')}</span>
                              </div>
                              <div className="time-items">
                                <span className="open-status">
                                  <span className="badge bg-success-light">
                                    Open Now
                                  </span>
                                </span>
                                <span className="time">
                                  07:00 AM - 09:00 PM
                                </span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Monday</div>
                              <div className="time-items">
                                <span className="time">
                                  07:00 AM - 09:00 PM
                                </span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Tuesday</div>
                              <div className="time-items">
                                <span className="time">
                                  07:00 AM - 09:00 PM
                                </span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Wednesday</div>
                              <div className="time-items">
                                <span className="time">
                                  07:00 AM - 09:00 PM
                                </span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Thursday</div>
                              <div className="time-items">
                                <span className="time">
                                  07:00 AM - 09:00 PM
                                </span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Friday</div>
                              <div className="time-items">
                                <span className="time">
                                  07:00 AM - 09:00 PM
                                </span>
                              </div>
                            </div>
                            <div className="listing-day">
                              <div className="day">Saturday</div>
                              <div className="time-items">
                                <span className="time">
                                  07:00 AM - 09:00 PM
                                </span>
                              </div>
                            </div>
                            <div className="listing-day closed">
                              <div className="day">Sunday</div>
                              <div className="time-items">
                                <span className="time">
                                  <span className="badge bg-danger-light">
                                    Closed
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Business Hours Widget */}
                    </div>
                  </div>
                </div>
                {/* Business Hours Content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;
