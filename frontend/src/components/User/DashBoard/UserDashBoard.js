import './userdashboard.css';
import { FaPrint, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import heart_rate from '../../../images/pt-dashboard-01.png';
import body_temp from '../../../images/pt-dashboard-02.png';
import glucose_level from '../../../images/pt-dashboard-03.png';
import blood_pressure from '../../../images/pt-dashboard-04.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as api from '../../../api/index';
import { errorHandler } from '../../../utilities/errorMessege';
import { notification } from '../../../utilities/notification';
import Spinner from '../Spinner/Spinner';
import moment from 'moment';
import { reset } from '../../../features/Doctor/userProfile/userProfileSlice';
import BillingModal from './BillingModal';
import PrescriptionModal from './PrescriptionModal';



function UserDashBoard() {
  const dispatch = useDispatch();
  const [Fulldata, setFulldata] = useState({ loading: false, done: false });
  const { user } = useSelector((state) => state.auth);

  const {
    prescription,
    medicalRecords,
    billing,
    isLoading,
    isError,
    isSuccess,
    message,
  } = useSelector((state) => state.userDetails);

  useEffect(() => {
    if (isError) {
      notification.error(message);
    }
    dispatch(reset());
  }, [
    prescription,
    medicalRecords,
    billing,
    isLoading,
    isError,
    isSuccess,
    message,
    dispatch,
  ]);

  const user_prescription = prescription?.filter(
    (row) => row?.userId === user?._id
  );

  const user_medicalRecords = medicalRecords?.filter(
    (row) => row?.userId === user?._id
  );

  const user_billing = billing?.filter((row) => row?.userId === user?._id);

  //create a tocken
  const { token } = user ? user : '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    !Fulldata.done && fetchAllAppointments();
  }, []);
  const fetchAllAppointments = async () => {
    setFulldata((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await api.getAllappointment(config,5);
      if (data?.data) {
        setFulldata((prev) => ({
          ...prev,
          ...data,
          loading: false,
          done: true,
        }));
      }
    } catch (error) {
      return notification.error(errorHandler(error));
    }
  };

  // Loading page
  if (Fulldata.loading || isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <img src={heart_rate} alt="" width="55" />
              </div>
              <h5>Heart Rate</h5>
              <h6>{user.heart_rate}</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <img src={body_temp} alt="" width="55" />
              </div>
              <h5>Body Temperature</h5>
              <h6>18 C</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <img src={glucose_level} alt="" width="55" />
              </div>
              <h5>Glucose Level</h5>
              <h6>{user.glucose}</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <img src={blood_pressure} alt="" width="55" />
              </div>
              <h5>Blood Pressure</h5>
              <h6>{user.bp}</h6>
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
                  to={'#pat_appointments'}
                  className="nav-link active"
                  data-bs-toggle="tab"
                >
                  Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'#pat_prescriptions'}
                  className="nav-link"
                  data-bs-toggle="tab"
                >
                  Prescriptions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'#pat_medical_records'}
                  className="nav-link"
                  data-bs-toggle="tab"
                >
                  <span className="med-records">Medical Records</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'#pat_billing'}
                  className="nav-link"
                  data-bs-toggle="tab"
                >
                  Billing
                </Link>
              </li>
            </ul>
          </nav>
          {/* /Tab Menu  */}

          {/* Tab Content  */}
          <div className="tab-content pt-0">
            {/* Appointment Tab  */}
            <div id="pat_appointments" className="tab-pane fade show active">
              <div className="card card-table mb-0">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Doctor</th>
                          <th>Appt Date</th>
                          <th>Booking Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      {Fulldata?.data &&
                        Fulldata?.data.map((row) => (
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to={''}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={row['doctorId']?.profile_image}
                                      alt="User"
                                    />
                                  </Link>
                                  <Link to={''} style={{ paddingLeft: '5px' }}>
                                    Dr.{row['doctorId']?.name}{' '}
                                    {row['doctorId']?.lastname}{' '}
                                    <span>
                                      {row['doctorId']?.specialization}
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                {row?.slotDetails['Date']}
                                <span className="d-block text-info">
                                  {row?.slotDetails['Slot']}
                                </span>
                              </td>
                              <td>{moment().format('YYYY-M-D')}</td>
                              <td>₹{row['amount']}</td>
                              <td>
                                {row['status'] === 'true' && (
                                  <span className="badge badge-pill bg-success-light">
                                    Confirm
                                  </span>
                                )}
                                {row['status'] === 'false' && (
                                  <span className="badge badge-pill bg-danger-light">
                                    Rejected
                                  </span>
                                )}
                                {row['status'] === 'pending' && (
                                  <span className="badge badge-pill bg-warning-light">
                                    Pending
                                  </span>
                                )}
                                {row['status'] === 'complete' && (
                                  <span className="badge badge-pill bg-primary-light">
                                    Completed
                                  </span>
                                )}
                              </td>
                              <td className="text-right">
                                
                              </td>
                            </tr>
                          </tbody>
                        ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Appointment Tab  */}

            {/* Prescription Tab */}
            <div className="tab-pane fade" id="pat_prescriptions">
              <div className="card card-table mb-0">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Date </th>
                          <th>Prescription ID</th>
                          <th>Created by </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {user_prescription &&
                          user_prescription.map((row) => (
                            <tr>
                              <td>{moment(row?.date).format('LL')}</td>
                              <td>{row['_id'].substr(0, 10)}</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to={''}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={row?.doctorId['profile_image']}
                                      alt="User"
                                    />
                                  </Link>
                                  <Link to={''} style={{ paddingLeft: '5px' }}>
                                    Dr {row?.doctorId['name']}{' '}
                                    <span>
                                      {row?.doctorId['specialization']}
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <PrescriptionModal id={row._id} />
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Prescription Tab */}

            {/* Medical Records Tab  */}
            <div id="pat_medical_records" className="tab-pane fade">
              <div className="card card-table mb-0">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Date </th>
                          <th>Description</th>
                          <th>Attachment</th>
                          <th>Created</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {user_medicalRecords &&
                          user_medicalRecords.map((row) => (
                            <tr>
                              <td>
                                <Link to={''}>#{row['_id'].substr(0, 10)}</Link>
                              </td>
                              <td>{moment(row?.date).format('LL')}</td>
                              <td>{row['description']}</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to={''}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={row?.doctorId['profile_image']}
                                      alt="User"
                                    />
                                  </Link>
                                  <Link to={''} style={{ paddingLeft: '10px' }}>
                                    Dr {row?.doctorId['name']}
                                    <span>
                                      {row?.doctorId['specialization']}
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-right">
                                <div className="main">
                                  <a
                                    className="btn btn-sm bg-info-light"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={row['document']}
                                  >
                                    <FaEye /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Medical Records Tab  */}

            {/* Billing Tab  */}
            <div id="pat_billing" className="tab-pane fade">
              <div className="card card-table mb-0">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Invoice No</th>
                          <th>Doctor</th>
                          <th>Date</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {user_billing &&
                          user_billing.map((row) => (
                            <tr>
                              <td>
                                <Link to={''}>#{row['_id'].substr(0, 10)}</Link>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to={''}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={row?.doctorId['profile_image']}
                                      alt="User"
                                    />
                                  </Link>
                                  <Link to={''} style={{ paddingLeft: '10px' }}>
                                    Dr {row?.doctorId['name']}{' '}
                                    <span>
                                      {row?.doctorId['specialization']}
                                    </span>
                                  </Link>
                                </h2>
                              </td>
                              <td>{moment(row?.date).format('LL')}</td>
                              <td className="text-right">
                                <div className="main">
                                  <BillingModal id={row._id} />
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Billing Tab */}
          </div>
          {/* Tab Content  */}
        </div>
      </div>
    </>
  );
}

export default UserDashBoard;
