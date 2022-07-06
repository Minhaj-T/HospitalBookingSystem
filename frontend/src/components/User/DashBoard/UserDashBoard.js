import './userdashboard.css';
import mm from '../../../images/myImage.jpg';
import {
  FaPrint,
  FaEye
} from 'react-icons/fa';
function UserDashBoard() {
  return (
    <>
      <div class="card">
        <div class="card-body pt-0">
          {/* Tab Menu  */}
          <nav class="user-tabs mb-4">
            <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#pat_appointments"
                  data-bs-toggle="tab"
                >
                  Appointments
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pat_prescriptions" data-bs-toggle="tab">
                  Prescriptions
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#pat_medical_records"
                  data-bs-toggle="tab"
                >
                  <span class="med-records">Medical Records</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pat_billing" data-bs-toggle="tab">
                  Billing
                </a>
              </li>
            </ul>
          </nav>
          {/* /Tab Menu  */}

          {/* Tab Content  */}
          <div class="tab-content pt-0">
            {/* Appointment Tab  */}
            <div id="pat_appointments" class="tab-pane fade show active">
              <div class="card card-table mb-0">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover table-center mb-0">
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
                      <tbody>
                        <tr>
                          <td>
                            <h2 class="table-avatar">
                              <a
                                href="doctor-profile.html"
                                class="avatar avatar-sm mr-2"
                              >
                                <img
                                  class="avatar-img rounded-circle"
                                  src={mm}
                                  alt="User Image"
                                />
                              </a>
                              <a href="doctor-profile.html">
                                Dr. Olga Barlow <span>Dental</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            5 Nov 2019{' '}
                            <span class="d-block text-info">5.00 PM</span>
                          </td>
                          <td>1 Nov 2019</td>
                          <td>$100</td>
                          <td>
                            <span class="badge badge-pill bg-success-light">
                              Confirm
                            </span>
                          </td>
                          <td class="text-right">
                            <div class="table-action">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-sm bg-primary-light"
                              >
                                <FaPrint/> Print
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-sm bg-info-light"
                              >
                                <FaEye/> View
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Appointment Tab  */}

            {/* Prescription Tab */}
            <div class="tab-pane fade" id="pat_prescriptions">
              <div class="card card-table mb-0">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover table-center mb-0">
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
                          <td>5 Nov 2019</td>
                          <td>Prescription 10</td>
                          <td>
                            <h2 class="table-avatar">
                              <a
                                href="doctor-profile.html"
                                class="avatar avatar-sm mr-2"
                              >
                                <img
                                  class="avatar-img rounded-circle"
                                  src={mm}
                                  alt="User Image"
                                />
                              </a>
                              <a href="doctor-profile.html">
                                Dr. Olga Barlow <span>Dental</span>
                              </a>
                            </h2>
                          </td>
                          <td class="text-right">
                            <div class="table-action">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-sm bg-primary-light"
                              >
                                <FaPrint/> Print
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-sm bg-info-light"
                              >
                                <FaEye/> View
                              </a>
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

            {/* Medical Records Tab  */}
            <div id="pat_medical_records" class="tab-pane fade">
              <div class="card card-table mb-0">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover table-center mb-0">
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
                            <a href="javascript:void(0);">#MR-0002</a>
                          </td>
                          <td>6 Nov 2019</td>
                          <td>Dental Removing</td>
                          <td>
                            <a href="#">dental-test.pdf</a>
                          </td>
                          <td>
                            <h2 class="table-avatar">
                              <a
                                href="doctor-profile.html"
                                class="avatar avatar-sm mr-2"
                              >
                                <img
                                  class="avatar-img rounded-circle"
                                  src={mm}
                                  alt="User Image"
                                />
                              </a>
                              <a href="doctor-profile.html">
                                Dr. John Gibbs <span>Dental</span>
                              </a>
                            </h2>
                          </td>
                          <td class="text-right">
                            <div class="table-action">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-sm bg-info-light"
                              >
                                <FaEye/> View
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-sm bg-primary-light"
                              >
                                <FaPrint/> Print
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* /Medical Records Tab  */}

            {/* Billing Tab  */}
            <div id="pat_billing" class="tab-pane fade">
              <div class="card card-table mb-0">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover table-center mb-0">
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
                            <a href="invoice-view.html">#INV-0001</a>
                          </td>
                          <td>
                            <h2 class="table-avatar">
                              <a
                                href="doctor-profile.html"
                                class="avatar avatar-sm mr-2"
                              >
                                <img
                                  class="avatar-img rounded-circle"
                                  src={mm}
                                  alt="User Image"
                                />
                              </a>
                              <a href="doctor-profile.html">
                                Dr. Olga Barlow <span>#0010</span>
                              </a>
                            </h2>
                          </td>
                          <td>$550</td>
                          <td>5 Nov 2019</td>
                          <td class="text-right">
                            <div class="table-action">
                              <a
                                href="invoice-view.html"
                                class="btn btn-sm bg-info-light"
                              >
                                <FaEye/> View
                              </a>
                              <a
                                href="javascript:void(0);"
                                class="btn btn-sm bg-primary-light"
                              >
                                <FaPrint/> Print
                              </a>
                            </div>
                          </td>
                        </tr>
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
