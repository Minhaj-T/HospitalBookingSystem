import './doctorsearch.css';
import * as api from '../../../api/index';
import { Link } from 'react-router-dom';
import { FcInfo } from 'react-icons/fc';
import { FaMapMarkerAlt, FaMoneyBillAlt, FaThumbsUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';

function Doctorsearch() {
  const [Date, setDate] = useState(null)

  const [fullData, setFullData] = useState({ loading: false, done: false });
  const [formData, setformData] = useState({
    date:'',
    gender: '',
    specialization:''
  })
  const{date,gender,specialization} =formData;

  useEffect(() => {
    !fullData.done && fetchAllDoctors(0, 10);
  }, []);

  const fetchAllDoctors = async (skip, limit) => {
    setFullData((prev) => ({ ...prev, loading: true }));
    let { data } = await api.getAllDoctors(skip, limit);
    if (data?.doctor) {
      setFullData((prev) => ({
        ...prev,
        ...data,
        loading: false,
        done: true,
      }));
    }
  };

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Loading page
  if (fullData.loading) {
    return <Spinner />;
  }
 console.log(formData);
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
                  <div className="filter-widget"onChange={onChange}>
                    <input
                      type="date"
                      className="form-control datetimepicker"
                      placeholder="Select Date"
                      name='date'
                    />
                  </div>
                  <div className="filter-widget"onChange={onChange}>
                    <h4>Gender</h4>
                    <div>
                      <label className="custom_radio">
                        <input type="radio"
                         name="gender"
                          value="Male"
                          />
                        <span className="checkmark"></span> Male Doctor
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input type="radio"
                         name="gender"
                         value='Female'
                         />
                        <span   className="checkmark"></span> Female Doctor
                      </label>
                    </div>
                  </div>
                  <div className="filter-widget" onChange={onChange}>
                    <h4>Select Specialist</h4>
                    <div>
                      <label className="custom_radio">
                        <input
                          type="radio"
                          name="specialization"
                          value="Urology"
                        />
                        <span className="checkmark"></span> Urology
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input
                          type="radio"
                          name="specialization"
                          value="Neurology"
                        />
                        <span className="checkmark"></span> Neurology
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input 
                        type="radio" 
                        name="specialization"
                        value="Dentist"
                        />
                        <span className="checkmark"></span> Dentist
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input 
                        type="radio" 
                        name="specialization"
                        value="Orthopedic"
                        />
                        <span className="checkmark"></span> Orthopedic
                      </label>
                    </div>
                    <div>
                      <label className="custom_radio">
                        <input 
                        type="radio" 
                        name="specialization" 
                        value="Cardiologist"
                        />
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
              {fullData?.doctor &&
                fullData.doctor.map((row) => (
                  <div key={row._id} className="card">
                    <div className="card-body">
                      <div className="doctor-widget">
                        <div className="doc-info-left">
                          <div className="doctor-img">
                            <Link to={''}>
                              <img
                                src={row.profile_image}
                                className="img-fluid"
                                alt="User"
                              />
                            </Link>
                          </div>
                          <div className="doc-info-cont">
                            <h4 className="doc-name">
                              <Link to={''}>Dr.{row.name}.{row.lastname}</Link>
                            </h4>
                            <p className="doc-speciality">{row.degree}</p>
                            <h5 className="doc-department">
                              {/* <img
                            src="assets/img/specialities/specialities-05.png"
                            className="img-fluid"
                            alt="Speciality"
                          /> */}
                              {row.specialization}
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
                                <FaMapMarkerAlt />
                                {row.state},{row.country}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="doc-info-right">
                          <div className="clini-infos">
                            <ul>
                              <li>
                                <FaThumbsUp /> 98%
                              </li>
                              <li>
                                <FaMapMarkerAlt /> {row.city}, {row.state}
                              </li>
                              <li>
                                <FaMoneyBillAlt /> ₹300 - ₹1000{' '}
                                <FcInfo
                                  size={18}
                                  data-toggle="tooltip"
                                  title="cellWithImg"
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="clinic-booking">
                            <Link
                              className="view-pro-btn"
                              to={`/doctor-profile/${row._id}`}
                            >
                              View Profile
                            </Link>
                            <Link
                              className="apt-btn"
                              to={'/user/book-appoinment'}
                            >
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              <div className="load-more text-center">
                <Link className="btn btn-primary btn-sm" to={''}>
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
