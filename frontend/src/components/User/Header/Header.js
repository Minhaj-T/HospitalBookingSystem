import { Link, useNavigate } from "react-router-dom";
import "./Header11.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../../features/users/auth/authSlice";
import Mainlogo from "../../../images/logo.png";
import { FaHospital,
        FaUserInjured,
        FaSignOutAlt 
      } from 'react-icons/fa'


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link to={"/"} className="navbar-brand logo">
              <img src={Mainlogo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <ul className=" main-nav navbar-nav ">
              <li className="has-submenu">
                <Link className=" nav-link" to={""}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link" to={""}>
                  Appoinments
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link" to={"/doctor-search"}>
                  Search-Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link" to={""}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
              <div className="header-contact-img">
                <FaHospital size="32px"/>
              </div>
              <div className="header-contact-detail">
                <p className="contact-header">Contact</p>
                <p className="contact-info-header"> +91 9539920559</p>
              </div>
            </li>
            <li className="nav-item">
              {user ? (
                 
                <div className="dropdown">
                <div className="profile"> <img className="dropbtn"  src="https://i.imgur.com/ywRonqz.jpg"/>
                    <div className="dropdown-content">
                        <ul>
                            <Link to={"/user"}><FaUserInjured size={15} style={{ marginRight: '8px', }}/><span>Profiles</span></Link>
                            <Link  onClick={onLogout} to={''} ><FaSignOutAlt size={15} style={{ marginRight: '8px', }}/><span>Logout</span></Link>
                        </ul>
                    </div>
                </div>
            </div>
              ) : (
                <Link className="nav-link header-login" to={"/login"}>
                  login / Signup
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
