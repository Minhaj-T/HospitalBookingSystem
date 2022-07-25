import './appointments.css';
import { Link } from 'react-router-dom';
import {
  FaClock,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaEye,
  FaCheck,
  FaTimes,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Appointments() {
  const { appointment } = useSelector((state) => state.appointments);

  return (
    <>
      <div className="appointments">
        {appointment &&
          appointment.map((row) => (
            <div key={row._id} className="appointment-list">
              <div className="profile-info-widget">
                <Link to={''} className="booking-doc-img">
                  <img
                    src={row.userId['profile_image']}
                    alt="User"
                    style={{ marginBottom: '1rem' }}
                  />
                </Link>
                <div className="profile-det-info">
                  <h3>
                    <Link to={''}>{row.userId['name']}</Link>
                  </h3>
                  <div className="patient-details">
                    <h5>
                      <FaClock /> 14 Nov 2019, 10.00 AM
                    </h5>
                    <h5>
                      <FaMapMarkerAlt /> {row.userId['city']}, {row.userId['state']}
                    </h5>
                    <h5>
                      <FaEnvelope /> {row.userId['email']}
                    </h5>
                    <h5 className="mb-0">
                      <FaPhone /> {row.userId['mobile']}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="appointment-action">
                <Link
                  to={''}
                  className="btn btn-sm bg-info-light"
                  data-toggle="modal"
                  data-target="#appt_details"
                >
                  <FaEye /> View
                </Link>
                <Link to={''} className="btn btn-sm bg-success-light">
                  <FaCheck /> Accept
                </Link>
                <Link to={''} className="btn btn-sm bg-danger-light">
                  <FaTimes /> Cancel
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Appointments;
