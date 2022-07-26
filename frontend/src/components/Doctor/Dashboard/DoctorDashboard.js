import './doctorDashboard.css';
import { Link } from 'react-router-dom';
import { FaEye, FaCheck, FaTimes, FaHandshake } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from '../../../utilities/notification';
import { reset } from '../../../features/Doctor/appointments/appointmentSlice';
import Spinner from '../../User/Spinner/Spinner';
import moment from 'moment';
import { changeStatus } from '../../../features/Doctor/appointments/appointmentSlice';

function DoctorDashboard() {
  const dispatch = useDispatch();

  // get the current state
  const { appointment, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.appointments
  );

  useEffect(() => {
    if (isError) {
      notification.error(message);
    }
    dispatch(reset());
  }, [appointment, isError, isSuccess, message, dispatch]);

  //filter the today date
  const today_date = moment().format('YYYY-M-D');
  const today_appointment = appointment?.filter(
    (row) => moment().format(row['slotDate']) == today_date
  );

  // Loading page
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h4 className="mb-4">Patient Appoinment</h4>
          <div className="appointment-tab">
            <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
              <li className="nav-item">
                <Link
                  to={'#upcoming-appointments'}
                  className="nav-link active"
                  data-bs-toggle="tab"
                >
                  Upcoming
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'#today-appointments'}
                  className="nav-link"
                  data-bs-toggle="tab"
                >
                  Today
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane show active" id="upcoming-appointments">
                <div className="card card-table mb-0">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Patient Name</th>
                            <th>Appt Date</th>
                            <th>Purpose</th>
                            <th className="text-center">Paid Amount</th>
                            <th></th>
                          </tr>
                        </thead>
                        {appointment &&
                          appointment?.map((row) => (
                            <tbody key={row._id}>
                              <tr>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link
                                      to={''}
                                      className="avatar avatar-sm mr-2"
                                    >
                                      <img
                                        alt="User"
                                        src={row.userId['profile_image']}
                                        className="avatar-img rounded-circle"
                                      />
                                    </Link>
                                    <Link
                                      to={'/doctor/patient-profile'}
                                      style={{ marginLeft: '6px' }}
                                    >
                                      {row.userId['name']}
                                      <span>#{row['payId'].substr(4, 6)}</span>
                                    </Link>
                                  </h2>
                                </td>
                                <td>
                                  {row['slotDate']}
                                  <span className="d-block text-info">
                                    10.00 AM
                                  </span>
                                </td>
                                <td>General</td>
                                <td className="text-center">
                                  ₹{row['amount']}
                                </td>
                                <td className="text-right">
                                  <div className="table-action pe-5">
                                    <Link
                                      to={''}
                                      className="btn btn-sm bg-info-light"
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
                                            const data = {
                                              id: row._id,
                                              status: true,
                                            };
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
                                            const data = {
                                              id: row._id,
                                              status: false,
                                            };
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
                                            const data = {
                                              id: row._id,
                                              status: false,
                                            };
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
                                            const data = {
                                              id: row._id,
                                              status: 'complete',
                                            };
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
                                          const data = {
                                            id: row._id,
                                            status: true,
                                          };
                                          dispatch(changeStatus(data));
                                        }}
                                      >
                                        <FaCheck /> Accept
                                      </Link>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="tab-content">
          <div className="tab-pane " id="today-appointments">
            <div className="card card-table mb-0">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Patient Name today</th>
                        <th>Appt Date</th>
                        <th>Purpose</th>
                        <th className="text-center">Paid Amount</th>
                        <th></th>
                      </tr>
                    </thead>
                    {today_appointment &&
                      today_appointment.map((row) => (
                        <tbody key={row._id}>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <Link to={''} className="avatar avatar-sm mr-2">
                                  <img
                                    alt="User"
                                    src={row.userId['profile_image']}
                                    className="avatar-img rounded-circle"
                                  />
                                </Link>
                                <Link
                                  to={'/doctor/patient-profile'}
                                  style={{ marginLeft: '6px' }}
                                >
                                  {row.userId['name']}
                                  <span>#{row['payId'].substr(4, 6)}</span>
                                </Link>
                              </h2>
                            </td>
                            <td>
                              11 Nov 2019
                              <span className="d-block text-info">
                                10.00 AM
                              </span>
                            </td>
                            <td>General</td>
                            <td className="text-center">₹{row['amount']}</td>
                            <td className="text-right">
                              <div className="table-action pe-5">
                              <Link
                                      to={''}
                                      className="btn btn-sm bg-info-light"
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
                                            const data = {
                                              id: row._id,
                                              status: true,
                                            };
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
                                            const data = {
                                              id: row._id,
                                              status: false,
                                            };
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
                                            const data = {
                                              id: row._id,
                                              status: false,
                                            };
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
                                            const data = {
                                              id: row._id,
                                              status: 'complete',
                                            };
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
                                          const data = {
                                            id: row._id,
                                            status: true,
                                          };
                                          dispatch(changeStatus(data));
                                        }}
                                      >
                                        <FaCheck /> Accept
                                      </Link>
                                    )}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDashboard;
