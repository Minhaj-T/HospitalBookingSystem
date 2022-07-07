import './favourites.css';
import mm from '../../../images/myImage.jpg';
import { Link } from 'react-router-dom';
import { FcOk, FcInfo } from 'react-icons/fc';
import { FaMapMarkerAlt, FaClock, FaMoneyBillAlt } from 'react-icons/fa';

function Favourites() {
  return (
    <>
      <div className="row row-grid">
        <div className="col-sm-3 col-md-6 col-lg-4">
          <div className="profile-widget">
            <div className="doc-img ">
              <Link to={''}>
                <img className="img-fluid" alt="User" src={mm} />
              </Link>
            </div>
            <div className="pro-content">
              <h3 className="title">
                <Link style={{ textDecoration: 'none' }} to={''}>
                  Dr. Ruby Perrin
                </Link>
                <span style={{ paddingLeft: '5px' }}>
                  <FcOk size={23} />
                </span>
              </h3>
              <p className="speciality">
                MDS - Periodontology and Oral Implantology, BDS
              </p>
              <div className="rating">
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <i className="fas fa-star filled"></i>
                <span className="d-inline-block average-rating">(17)</span>
              </div>
              <ul className="available-info">
                <li>
                  <FaMapMarkerAlt /> Florida, USA
                </li>
                <li>
                  <FaClock /> Available on Fri, 22 Mar
                </li>
                <li>
                  <FaMoneyBillAlt /> $300 - $1000{' '}
                  <FcInfo size={18} data-toggle="tooltip" title="cellWithImg" />
                </li>
              </ul>
              <div className="row row-sm">
                <div className="col-6">
                  <Link to={''} className="btn view-btn">
                    View Profile
                  </Link>
                </div>
                <div className="col-6">
                  <Link to={''} className="btn book-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favourites;
