import '../../User/DashBoard/userdashboard.css';
import '../Mypatients/mypatients.css';
import './userprofile.css';
import { Link, useParams } from 'react-router-dom';
import { FaEye, FaMapMarkerAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import AddPrescription from '../AddPrescription/AddPrescription';
import AddMedicalrecords from '../AddMedicalrecords/AddMedicalrecords';
import AddBilling from '../AddBilling/AddBilling';
import { useEffect } from 'react';
import { notification } from '../../../utilities/notification';
import { reset } from '../../../features/Doctor/userProfile/userProfileSlice';
import moment from 'moment';
import CustomizedDialogs from './PrescriptionModal';
import Spinner from '../../User/Spinner/Spinner';
import CustomizedDialogs1 from './BillingModal';

function UserProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { appointment } = useSelector((state) => state.appointments);
  //filter the appointment
  const [current_appointment] = appointment?.filter((row) => row?._id === id);

  // get the current state
  const {
    prescription,
    medicalRecords,
    billing,
    isLoading,
    isError,
    isSuccess,
    message,
  } = useSelector((state) => state.userprofile);

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
    (row) => row?.userId === current_appointment?.userId['_id']
  );

  const user_medicalRecords = medicalRecords?.filter(
    (row) => row?.userId === current_appointment?.userId['_id']
  );

  const user_billing = billing?.filter(
    (row) => row?.userId === current_appointment?.userId['_id']
  );

  console.log('user Profile page', isLoading);
  // Loading page
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div
        className="row"
        style={{ marginTop: '5.3rem', backgroundColor: '#f5f5f5' }}
      >
        <div className="col-md-5 col-lg-4 col-xl-3">
          <div className="card widget-profile pat-widget-profile">
            <div className="card-body">
              <div className="pro-widget-content">
                <div className="profile-info-widget">
                  <Link to={''} className="booking-doc-img">
                    <img
                      src={current_appointment?.userId['profile_image']}
                      alt="User"
                    />
                  </Link>
                  <div className="profile-det-info">
                    <h3>
                      <Link to={''}>{current_appointment?.userId['name']}</Link>
                    </h3>

                    <div className="patient-details">
                      <h5>
                        <b>Patient ID :</b>
                        {current_appointment?.userId['_id'].slice(0, 5)}
                      </h5>
                      <h5 className="mb-0">
                        <FaMapMarkerAlt /> {current_appointment?.userId['city']}
                        , {current_appointment?.userId['state']}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="patient-info">
                <ul>
                  <li>
                    Phone <span>{current_appointment?.userId['mobile']}</span>
                  </li>
                  <li>
                    Age{' '}
                    <span>
                      {current_appointment?.userId['age']} Years old,{' '}
                      {current_appointment?.userId['gender']}
                    </span>
                  </li>
                  <li>
                    Blood Group{' '}
                    <span>{current_appointment?.userId['blood_group']}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
          <div className="card">
            <div className="card-body pt-0">
              <div className="user-tabs">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to={'#pres'}
                      data-bs-toggle="tab"
                    >
                      <span>Prescription</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={'#medical'}
                      data-bs-toggle="tab"
                    >
                      <span className="med-records">Medical Records</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={'#billing'}
                      data-bs-toggle="tab"
                    >
                      <span>Billing</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                {/* Prescription Tab */}
                <div className="tab-pane fade show active" id="pres">
                  <div className="text-right">
                    <AddPrescription
                      userId={current_appointment?.userId['_id']}
                      doctor1={current_appointment?.doctorId}
                    />
                  </div>
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
                                <tr key={row._id}>
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
                                      <Link
                                        to={''}
                                        style={{ paddingLeft: '10px' }}
                                      >
                                        Dr {row?.doctorId['name']}{' '}
                                        <span>
                                          {row?.doctorId['specialization']}
                                        </span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="main">
                                      {/* <Link
                                    to={''}
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <FaPrint /> Print
                                  </Link> */}
                                      <CustomizedDialogs id={row._id} />
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

                {/* Medical Records Tab */}
                <div className="tab-pane fade" id="medical">
                  <div className="text-right">
                    <AddMedicalrecords
                      userId={current_appointment?.userId['_id']}
                      doctor1={current_appointment?.doctorId}
                    />
                  </div>
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Date </th>
                              <th>Description</th>
                              <th>Created</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {user_medicalRecords &&
                              user_medicalRecords.map((row) => (
                                <tr>
                                  <td>
                                    <Link to={''}>
                                      #{row['_id'].substr(0, 10)}
                                    </Link>
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
                                      <Link
                                        to={''}
                                        style={{ paddingLeft: '10px' }}
                                      >
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
                {/* /Medical Records Tab */}

                {/* Billing Tab */}
                <div className="tab-pane" id="billing">
                  <div className="text-right ">
                    <AddBilling
                      userId={current_appointment?.userId['_id']}
                      doctor1={current_appointment?.doctorId}
                    />
                  </div>
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Invoice No</th>
                              <th>Doctor</th>
                              <th>Amount</th>
                              <th>Paid On</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                          {user_billing&&
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
                                 Dr {row?.doctorId['name']} <span>{row?.doctorId['specialization']}</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>$450</td>
                              <td>{moment(row?.date).format('LL')}</td>
                              <td className="text-right">
                                <div className="main">
                                  <CustomizedDialogs1 id={row._id}/>
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
                {/* Billing Tab */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
