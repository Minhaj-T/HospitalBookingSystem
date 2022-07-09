import '../../User/DashBoard/userdashboard.css';
import '../Mypatients/mypatients.css';
import './userprofile.css'
import mm from '../../../images/myImage.jpg';
import { Link } from 'react-router-dom';
import {
  FaPrint,
  FaEye,
  FaMapMarkerAlt,
  FaEdit
} from 'react-icons/fa';
function UserProfile() {
  return (
    <>
      <div className="row">
        <div className="col-md-5 col-lg-4 col-xl-3">
          <div className="card widget-profile pat-widget-profile">
            <div className="card-body">
              <div className="pro-widget-content">
                <div className="profile-info-widget">
                  <Link to={""}  className="booking-doc-img">
                    <img src={mm} alt="User" />
                  </Link>
                  <div className="profile-det-info">
                    <h3>
                      <Link to={""}>Richard Wilson</Link>
                    </h3>

                    <div className="patient-details">
                      <h5>
                        <b>Patient ID :</b> P0016
                      </h5>
                      <h5 className="mb-0">
                        <FaMapMarkerAlt/> Alabama, USA 
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="patient-info">
                <ul>
                  <li>
                    Phone <span>+1 952 001 8563</span>
                  </li>
                  <li>
                    Age <span>38 Years, Male</span>
                  </li>
                  <li>
                    Blood Group <span>AB+</span>
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
					  to={"#pat_appointments"}
                      data-bs-toggle="tab"
                    >
                      Appointments
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"#pres"} data-bs-toggle="tab">
                      <span>Prescription</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link"  to={"#medical"} data-bs-toggle="tab">
                      <span className="med-records">Medical Records</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"#billing"} data-bs-toggle="tab">
                      <span>Billing</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                {/* Appointment Tab */}
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
                              <th>Follow Up</th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to={""}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-02.jpg"
                                      alt="User"
                                    />
                                  </Link>
                                  <Link to={""}>
                                    Dr. Darren Elder <span>Dental</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>
                                14 Nov 2019{' '}
                                <span className="d-block text-info">10.00 AM</span>
                              </td>
                              <td>12 Nov 2019</td>
                              <td>$160</td>
                              <td>16 Nov 2019</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">
                                  Confirm
                                </span>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <Link
                                    to={""}
                                    className="btn btn-sm bg-success-light"
                                  >
                                  <FaEdit/> Edit
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
                {/* /Appointment Tab */}

                {/* Prescription Tab */}
                <div className="tab-pane fade" id="pres">
                  <div className="text-right">
                    <Link to={""} className="add-new-btn">
                      Add Prescription
                    </Link>
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
                                    to={""}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User"
                                    />
                                  </Link>
                                  <Link to={""}>
                                    Dr. Ruby Perrin <span>Dental</span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-right">
                                <div className="main">
                                  <Link
                                    to={""}
                                    className="btn btn-sm bg-primary-light"
                                  >
                                  < FaPrint/> Print
                                  </Link>
                                  <Link
                                    to={""}
                                    className="btn btn-sm bg-info-light"
                                  >
                                  <FaEye/> View
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
                      to={""}
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
                                <Link to={""}>#MR-0010</Link>
                              </td>
                              <td>14 Nov 2019</td>
                              <td>Dental Filling</td>
                              <td>
                                <Link to={""}>dental-test.pdf</Link>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to={""}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User" 
                                    />
                                  </Link>
                                  <Link to={""}>
                                    Dr. Ruby Perrin <span>Dental</span>
                                  </Link>
                                </h2>
                              </td>
                              <td className="text-right">
                                <div className="main">
                                  <Link
                                    to={""}
                                    className="btn btn-sm bg-primary-light"
                                  >
                                    <FaPrint/> Print
                                  </Link>
                                  <Link
                                     to={""}
                                    className="btn btn-sm bg-info-light"
                                  >
                                  <FaEye/> View
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
                    <Link className="add-new-btn" to={""}>
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
                                <Link to={""}>#INV-0010</Link>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to={""}
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User"
                                    />
                                  </Link>
                                  <Link to={""}>
                                    Ruby Perrin <span>Dental</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>$450</td>
                              <td>14 Nov 2019</td>
                              <td className="text-right">
                                <div className="main">
                                  <Link
                                    to={""}
                                    className="btn btn-sm bg-primary-light"
                                  >
                                   <FaPrint/> Print
                                  </Link>
                                  <Link
                                    to={""}
                                    className="btn btn-sm bg-info-light"
                                  >
                                    <FaEye/> View
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
