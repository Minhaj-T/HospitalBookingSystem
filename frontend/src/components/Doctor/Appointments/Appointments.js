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
  FaHandshake,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from '../../../features/Doctor/appointments/appointmentSlice';
import EmptyPage from '../../EmptyPage/EmptyPage';

function Appointments() {
  const { appointment } = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  return (
    <>
      <div className="appointments">
        {appointment.length !== 0 ? (
          <>
            {appointment.map((row) => (
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
                      <Link to={`/doctor/patient-profile/${row?._id}`}>{row.userId['name']}</Link>
                    </h3>
                    <div className="patient-details">
                      <h5>
                        <FaClock /> {row?.slotDetails['Date']} {' ,'}{' '}
                        {row?.slotDetails['Slot']}
                      </h5>
                      <h5>
                        <FaMapMarkerAlt /> {row.userId['city']},{' '}
                        {row.userId['state']}
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
                  {row?.status === 'pending' && (
                    <>
                      <Link
                        to={''}
                        className="btn btn-sm bg-success-light"
                        onClick={(e) => {
                          e.preventDefault();
                          const data = { id: row._id, status: true };
                          dispatch(changeStatus(data));
                        }}
                      >
                        <FaCheck /> Accept
                      </Link>

                      <Link
                        to={''}
                        className="btn btn-sm bg-danger-light"
                        onClick={(e) => {
                          e.preventDefault();
                          const data = { id: row._id, status: false };
                          dispatch(changeStatus(data));
                        }}
                      >
                        <FaTimes /> Cancel
                      </Link>
                    </>
                  )}
                  {row?.status == 'true' && (
                    <>
                      <Link
                        to={''}
                        className="btn btn-sm bg-danger-light"
                        onClick={(e) => {
                          e.preventDefault();
                          const data = { id: row._id, status: false };
                          dispatch(changeStatus(data));
                        }}
                      >
                        <FaTimes /> Cancel
                      </Link>
                      <Link
                        to={''}
                        className="btn btn-sm bg-success-light"
                        onClick={(e) => {
                          e.preventDefault();
                          const data = { id: row._id, status: 'complete' };
                          dispatch(changeStatus(data));
                        }}
                      >
                        <FaHandshake /> Complete
                      </Link>
                    </>
                  )}
                  {row?.status == 'false' && (
                    <Link
                      to={''}
                      className="btn btn-sm bg-success-light"
                      onClick={(e) => {
                        e.preventDefault();
                        const data = { id: row._id, status: true };
                        dispatch(changeStatus(data));
                      }}
                    >
                      <FaCheck /> Accept
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <EmptyPage />
        )}
      </div>
    </>
  );
}

export default Appointments;
