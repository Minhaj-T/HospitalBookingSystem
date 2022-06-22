import { Link,useNavigate } from "react-router-dom";
import "./Header.css";
import {useDispatch, useSelector} from 'react-redux'
import { logout, reset } from "../../features/auth/authSlice";
function Header() {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const {user}=useSelector((state)=>state.auth)
  console.log('header',user);

  const onLogout=(e)=>{
    e.preventDefault()
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link to={"/"} className="navbar-brand logo">
              <img src="" className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <ul className="main-nav">
              <li className=" pr-5 has-submenu">
                <Link to={""}>Home</Link>
              </li>
              <li className="has-submenu">
                <Link to={""}>Doctors</Link>
              </li>
              <li className="login-link">
                <a href="login.html">Login / Signup</a>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
              <div className="header-contact-img">
                <i className="far fa-hospital"></i>
              </div>
              <div className="header-contact-detail">
                <p className="contact-header">Contact</p>
                <p className="contact-info-header"> +91 9539920559</p>
              </div>
            </li>
            <li className="nav-item">
              {user ? (
                <Link className="nav-link header-login" onClick={onLogout} to={''}>
                  Logout{" "}
                </Link>
              ):(


                <Link className="nav-link header-login" to={"/login"}>
                  login / Signup{" "}
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
