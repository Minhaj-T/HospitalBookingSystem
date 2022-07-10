import '../Doctor/doctorLayout.css';
import { Link } from 'react-router-dom';
import {
  FaColumns,
  FaComments,
  FaUserCog,
  FaLock,
  FaSignOutAlt,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaBookmark,
} from 'react-icons/fa'
import Header from "../../components/User/Header/Header";
import { useSelector } from 'react-redux';

function UserLayout({children}) {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
    <Header/>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar mt-5">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to={''} className="booking-doc-img">
                      <img src={user.profile_image} alt="User" />
                    </Link>
                    <div className="profile-det-info">
                      <h3>{user.name}</h3>
                      <div className="patient-details">
                        <h5>
                          <FaBirthdayCake /> {user.age} years old
                        </h5>
                        <h5 className="mb-0">
                          <FaMapMarkerAlt /> {user.city}, {user.state}
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
            <div className="col-md-7 col-lg-8 col-xl-9 mt-5">
            {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLayout;
