import './doctorLayout.css';
import { Link, } from 'react-router-dom';
import mm from '../../images/myImage.jpg'
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
                    <Link to={""} className="booking-doc-img">
											<img src={mm} alt="User Image"/>
										</Link>
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
                        <Link to={"/doctor"}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaColumns />
                          </span>
                          <span>DoctorDashboard</span>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={"/doctor/appointments"}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaCalendarCheck />
                          </span>
                          <span>Appointments</span>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={"/doctor/my-patients"}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaUserInjured />
                          </span>
                          <span>My Patients</span>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={"/doctor/schedule-timing"}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaHourglassStart />
                          </span>
                          <span>Schedule Timings</span>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={""}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaFileInvoice />
                          </span>
                          <span>Invoices</span>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={''}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaComments />
                          </span>
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={"/doctor/profile-settings"}>
                          <span className="fas" style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaUserCog />
                          </span>
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={"/doctor/change-password"}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaLock />
                          </span>
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={""}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaSignOutAlt />
                          </span>
                          <span>Logout</span>
                        </Link>
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
