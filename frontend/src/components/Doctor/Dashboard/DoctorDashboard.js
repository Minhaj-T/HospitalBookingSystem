import './doctorDashboard.css'
import { Link, } from 'react-router-dom';
import mm from '../../../images/myImage.jpg'
import {
  FaEye,
  FaCheck,
  FaTimes
}  from 'react-icons/fa';

function DoctorDashboard() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h4 className="mb-4">Patient Appoinment</h4>
        <div className="appointment-tab">
          <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
            <li className="nav-item">
              <Link
              to={""}
                className="nav-link active"
                data-toggle="tab"
              >
                Upcoming
              </Link>
            </li>
            <li className="nav-item">
              <Link to={""} className="nav-link"  data-toggle="tab">
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
                          <th>Type</th>
                          <th className="text-center">Paid Amount</th>
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
                                  alt="User Image"
                                  src={mm}
                                  className="avatar-img rounded-circle"
                                />
                              </Link>
                              <Link to={""} style={{marginLeft: '6px'}}>
                                Richard Wilson
                                <span>#PT0016</span>
                              </Link>
                            </h2>
                          </td>
                          <td>
                            11 Nov 2019
                            <span className="d-block text-info">10.00 AM</span>
                          </td>
                          <td>General</td>
                          <td>New Patient</td>
                          <td className="text-center">$150</td>
                          <td className="text-right">
                            <div className="table-action pe-5">
                              <Link 
                                to={""}
                                className="btn btn-sm bg-info-light"
                              >
                                <FaEye/> View
                              </Link>

                              <Link
                                to={""}
                                className="btn btn-sm bg-success-light"
                              >
                                <FaCheck/> Accept
                              </Link>
                              <Link
                                to={""}
                                className="btn btn-sm bg-danger-light"
                              >
                                <FaTimes/> Cancel
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
