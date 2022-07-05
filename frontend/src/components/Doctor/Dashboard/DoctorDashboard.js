import './doctorDashboard.css'
import { Link, } from 'react-router-dom';
import mm from '../../../images/myImage.jpg'

function DoctorDashboard() {
  return (
    <div class="row">
      <div class="col-md-12">
        <h4 class="mb-4">Patient Appoinment</h4>
        <div class="appointment-tab">
          <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
            <li class="nav-item">
              <a
                class="nav-link active"
                href="#upcoming-appointments"
                data-toggle="tab"
              >
                Upcoming
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#today-appointments" data-toggle="tab">
                Today
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane show active" id="upcoming-appointments">
              <div class="card card-table mb-0">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Patient Name</th>
                          <th>Appt Date</th>
                          <th>Purpose</th>
                          <th>Type</th>
                          <th class="text-center">Paid Amount</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 class="table-avatar">
                              <a
                                href="patient-profile.html"
                                class="avatar avatar-sm mr-2"
                              >
                                <img
                                  class="avatar-img rounded-circle"
                                  src={mm}
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Richard Wilson
                                <span>#PT0016</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            11 Nov 2019
                            <span class="d-block text-info">10.00 AM</span>
                          </td>
                          <td>General</td>
                          <td>New Patient</td>
                          <td class="text-center">$150</td>
                          <td class="text-right">
                            <div class="table-action pe-5">
                              <Link 
                                to={""}
                                class="btn btn-sm bg-info-light"
                              >
                                <i class="far fa-eye"></i> View
                              </Link>

                              <Link
                                to={""}
                                class="btn btn-sm bg-success-light"
                              >
                                <i class="fas fa-check"></i> Accept
                              </Link>
                              <Link
                                to={""}
                                class="btn btn-sm bg-danger-light"
                              >
                                <i class="fas fa-times"></i> Cancel
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
