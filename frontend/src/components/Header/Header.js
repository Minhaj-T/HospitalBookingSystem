import "./Header.css";
function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a href="index.html" className="navbar-brand logo">
              <img src="" className="img-fluid" alt="Logo" />
            </a>
          </div>
          <div className="main-menu-wrapper">
            <ul className="main-nav">
              <li className=" pr-5 has-submenu">
                <a href="#">
                  Home
                </a>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Doctors 
                </a>
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
                <p className="contact-info-header"> +1 315 369 5943</p>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link header-login" href="login.html">
                login / Signup{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
