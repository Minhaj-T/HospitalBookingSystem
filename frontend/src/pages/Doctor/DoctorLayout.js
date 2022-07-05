import './doctorLayout.css';
import {
  FaColumns,
  FaCalendarCheck,
  FaUserInjured,
  FaHourglassStart,
  FaFileInvoice,
  FaComments,
  FaUserCog,
  FaLock,
  FaSignOutAlt,
} from 'react-icons/fa';

function DoctorLayout({children}) {
  return (
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    {/* <a href="#" className="booking-doc-img">
											<img src="" alt="User Image"/>
										</a> */}
                    <div className="profile-det-info">
                      <h3>Dr. Darren Elder</h3>

                      <div className="patient-details">
                        <h5 className="mb-0">
                          BDS, MDS - Oral & Maxillofacial Surgery
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="main active">
                        <a href="doctor-dashboard.html">
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaColumns />
                          </span>
                          <span>DoctorDashboard</span>
                        </a>
                      </li>
                      <li className="main">
                        <a href="appointments.html">
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaCalendarCheck />
                          </span>
                          <span>Appointments</span>
                        </a>
                      </li>
                      <li className="main">
                        <a href="my-patients.html">
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaUserInjured />
                          </span>
                          <span>My Patients</span>
                        </a>
                      </li>
                      <li className="main">
                        <a href="schedule-timings.html">
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaHourglassStart />
                          </span>
                          <span>Schedule Timings</span>
                        </a>
                      </li>
                      <li className="main">
                        <a href="invoices.html">
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaFileInvoice />
                          </span>
                          <span>Invoices</span>
                        </a>
                      </li>
                      <li className="main">
                        <a href="chat-doctor.html">
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaComments />
                          </span>
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li className="main">
                        <a href="doctor-profile-settings.html">
                          <span className="fas" style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaUserCog />
                          </span>
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li className="main">
                        <a href="doctor-change-password.html">
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaLock />
                          </span>
                          <span>Change Password</span>
                        </a>
                      </li>
                      <li className="main">
                        <a href="index.html">
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaSignOutAlt />
                          </span>
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-lg-8 col-xl-9">
              {children}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorLayout;
