import '../Doctor/doctorLayout.css';
import { NavLink } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { billingRecords,getMedicalRecords,getPrescription } from '../../features/Doctor/userProfile/userProfileSlice';
import { useEffect } from 'react';

function UserLayout({children}) {
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch(billingRecords())
    dispatch(getMedicalRecords())
    dispatch(getPrescription())
  }, [])
  
  const { user } = useSelector((state) => state.auth);
  return (
    <>
    <Header/>
      <div className="content" style={{backgroundColor:'#f5f5f5'}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar mt-5">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <NavLink to={''} className="booking-doc-img">
                      <img src={user.profile_image} alt="User" />
                    </NavLink>
                    <div className="profile-det-info">
                      <h3>{user.name}</h3>
                      <div className="patient-details">
                        <h5>
                          <FaBirthdayCake /> {user.age?user.age:'XX'} years old
                        </h5>
                        <h5 className="mb-0">
                          <FaMapMarkerAlt /> {user.city?user.city:'XXXX'}, {user.state?user.state:'XXXX'}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="main active">
                        <NavLink to={'/user/'}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaColumns />
                          </span>
                          <span>Dashboard</span>
                        </NavLink>
                      </li>
                      <li className="main">
                        <NavLink to={'/user/favourites'}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaBookmark />
                          </span>
                          <span>Favourites</span>
                        </NavLink>
                      </li>
                      <li className="main">
                        <NavLink to={'/user/messenger'}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaComments />
                          </span>
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </NavLink>
                      </li>
                      <li className="main">
                        <NavLink to={'/user/user-edit'}>
                          <span className="fas" style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaUserCog />
                          </span>
                          <span>Profile Settings</span>
                        </NavLink>
                      </li>
                      <li className="main">
                        <NavLink to={'/user/change-password'}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaLock />
                          </span>
                          <span>Change Password</span>
                        </NavLink>
                      </li>
                      <li className="main">
                        <NavLink to={'/login'}>
                          <span style={{ paddingRight: '5px' }}>
                            {' '}
                            <FaSignOutAlt />
                          </span>
                          <span>Logout</span>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9 mt-5" >
            {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLayout;
