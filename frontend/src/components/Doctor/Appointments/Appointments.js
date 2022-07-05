import './appointments.css'
import { Link, } from 'react-router-dom';
import mm from '../../../images/myImage.jpg'
import {FaClock,
       FaMapMarkerAlt,
       FaEnvelope,
       FaPhone,
       FaEye,
       FaCheck,
       FaTimes
 }  from 'react-icons/fa';

function Appointments() {
  return (
    <>
      <div className="appointments">
        <div className="appointment-list">
          <div className="profile-info-widget">
            <Link to={""} className="booking-doc-img">
              <img src={mm} alt="User Image" style={{marginBottom: "1rem"}} />
            </Link>
            <div className="profile-det-info">
              <h3>
                <Link to={""}>Richard Wilson</Link>
              </h3>
              <div className="patient-details">
                <h5>
                  <FaClock/> 14 Nov 2019, 10.00 AM
                </h5>
                <h5>
                  <FaMapMarkerAlt/> Newyork, United States
                </h5>
                <h5>
                  <FaEnvelope/> richard@example.com
                </h5>
                <h5 className="mb-0">
                  <FaPhone/> +1 923 782 4575
                </h5>
              </div>
            </div>
          </div>
          <div className="appointment-action">
            <Link
              to={""}
              className="btn btn-sm bg-info-light"
              data-toggle="modal"
              data-target="#appt_details"
            >
              <FaEye/> View
            </Link>
            <Link to={""} className="btn btn-sm bg-success-light">
              <FaCheck/> Accept
            </Link>
            <Link to={""} className="btn btn-sm bg-danger-light">
              <FaTimes/> Cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointments;
