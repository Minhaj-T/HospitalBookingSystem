import '../../User/DashBoard/userdashboard.css';
import '../Mypatients/mypatients.css';
import './userprofile.css';
import { Link, useParams } from 'react-router-dom';
import { FaPrint, FaEye, FaMapMarkerAlt, FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import AddPrescription from '../AddPrescription/AddPrescription';
import { useEffect } from 'react';

function UserProfile() {
  const { id } = useParams();
  const { appointment } = useSelector((state) => state.appointments);
  //filter the appointment
  const [current_appointment] = appointment?.filter((row) => row?._id == id);

  console.log('this is the current appointment', current_appointment);

    

  

  return (
    <>
    <Header />
    
      <div className="row" style={{marginTop:'5.3rem',backgroundColor:'#f5f5f5'}}>
        <div className="col-md-5 col-lg-4 col-xl-3">
          <div className="card widget-profile pat-widget-profile">
            <div className="card-body">
              <div className="pro-widget-content">
                <div className="profile-info-widget">
                  <Link to={''} className="booking-doc-img">
                    <img src={current_appointment?.userId['profile_image']} alt="User" />
                  </Link>
                  <div className="profile-det-info">
                    <h3>
                      <Link to={''}>{current_appointment?.userId['name']}</Link>
                    </h3>

                    <div className="patient-details">
                      <h5>
                        <b>Patient ID :</b>{current_appointment?.userId['_id'].slice(0, 5)}
                      </h5>
                      <h5 className="mb-0">
                        <FaMapMarkerAlt /> {current_appointment?.userId['city']}, {current_appointment?.userId['state']}
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
                    Age <span>{current_appointment?.userId['age']} Years old, {current_appointment?.userId['gender']}</span>
                  </li>
                  <li>
                    Blood Group <span>{current_appointment?.userId['blood_group']}</span>
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
                      <AddPrescription doctor={current_appointment?.doctorId}/>
                  </div>
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Date </th>
                              <th>Name</th>
                              <th>Created by </th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>14 Nov 2019</td>
                              <td>Prescription 1</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to={''}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User"
                                    />
                                  </Link>
                                  <Link to={''}>
                                    Dr. Ruby Perrin <span>Dental</span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-right">
                                <div className="main">
                                  <Link
                                    to={''}
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <FaPrint /> Print
                                  </Link>
                                  <Link
                                    to={''}
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <FaEye /> View
                                  </Link>
                                </div>
                              </td>
                            </tr>
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
                    <Link
                      to={''}
                      className="add-new-btn"
                      data-toggle="modal"
                      data-target="#add_medical_records"
                    >
                      Add Medical Records
                    </Link>
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
                              <th>Attachment</th>
                              <th>Created</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link to={''}>#MR-0010</Link>
                              </td>
                              <td>14 Nov 2019</td>
                              <td>Dental Filling</td>
                              <td>
                                <Link to={''}>dental-test.pdf</Link>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to={''}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User"
                                    />
                                  </Link>
                                  <Link to={''}>
                                    Dr. Ruby Perrin <span>Dental</span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-right">
                                <div className="main">
                                  <Link
                                    to={''}
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <FaPrint /> Print
                                  </Link>
                                  <Link
                                    to={''}
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <FaEye /> View
                                  </Link>
                                </div>
                              </td>
                            </tr>
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
                    <Link className="add-new-btn" to={''}>
                      Add Billing
                    </Link>
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
                            <tr>
                              <td>
                                <Link to={''}>#INV-0010</Link>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to={''}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User"
                                    />
                                  </Link>
                                  <Link to={''}>
                                    Ruby Perrin <span>Dental</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>$450</td>
                              <td>14 Nov 2019</td>
                              <td className="text-right">
                                <div className="main">
                                  <Link
                                    to={''}
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <FaPrint /> Print
                                  </Link>
                                  <Link
                                    to={''}
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <FaEye /> View
                                  </Link>
                                </div>
                              </td>
                            </tr>
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
