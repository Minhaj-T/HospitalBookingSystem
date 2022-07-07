import '../Doctor/doctorLayout.css';
import { Link } from 'react-router-dom';
import mm from '../../images/myImage.jpg';
import {
  FaColumns,
  FaComments,
  FaUserCog,
  FaLock,
  FaSignOutAlt,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaBookmark,
} from 'react-icons/fa';

function UserLayout({children}) {
  return (
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to={''} className="booking-doc-img">
                      <img src={mm} alt="User" />
                    </Link>
                    <div class="profile-det-info">
                      <h3>Richard Wilson</h3>
                      <div class="patient-details">
                        <h5>
                          <FaBirthdayCake /> 24 Jul 1983, 38 years
                        </h5>
                        <h5 class="mb-0">
                          <FaMapMarkerAlt /> Newyork, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="main active">
                        <Link to={'/user'}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaColumns />
                          </span>
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={'/user/favourites'}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaBookmark />
                          </span>
                          <span>Favourites</span>
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
                        <Link to={'/user/user-edit'}>
                          <span className="fas" style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaUserCog />
                          </span>
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={'/user/change-password'}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaLock />
                          </span>
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li className="main">
                        <Link to={''}>
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

export default UserLayout;
