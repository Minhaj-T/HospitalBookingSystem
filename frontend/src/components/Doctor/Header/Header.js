import { Link, useNavigate } from 'react-router-dom';
import '../../User/Header/Header11.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../../features/Doctor/auth/doctorauthSlice';
import Mainlogo from '../../../images/logo.png';
import { FaHospital } from 'react-icons/fa';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { doctor } = useSelector((state) => state.doctorAuth);

  const logOut = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/doctor');
  };
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <Link to={'/doctor'} className="navbar-brand logo">
              <img src={Mainlogo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper"></div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
              <div className="header-contact-img">
                <FaHospital size="32px" />
              </div>
              <div className="header-contact-detail">
                <p className="contact-header">Contact</p>
                <p className="contact-info-header"> +91 9539920559</p>
              </div>
            </li>
            <li className="nav-item">
              {doctor && (
                <Link
                  onClick={logOut}
                  className="nav-link header-login"
                  to={'/login'}
                >
                  logout
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
