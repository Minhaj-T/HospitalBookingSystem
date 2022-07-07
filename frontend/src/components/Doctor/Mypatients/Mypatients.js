import './mypatients.css';
import { Link, } from 'react-router-dom';
import mm from '../../../images/myImage.jpg';
function Mypatients() {
  return (
    <>
      <div className="row row-grid">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card widget-profile pat-widget-profile">
            <div className="card-body">
              <div className="pro-widget-content">
                <div className="profile-info-widget">
                  <Link to={""}  className="booking-doc-img">
                    <img src={mm} alt="User" />
                  </Link>
                  <div className="profile-det-info">
                    <h3>
                      <Link to={""}>Richard Wilson</Link>
                    </h3>

                    <div className="patient-details">
                      <h5>
                        <b>Patient ID :</b> P0016
                      </h5>
                      <h5 className="mb-0">
                        <i className="fas fa-map-marker-alt"></i> Alabama, USA
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="patient-info">
                <ul>
                  <li>
                    Phone <span>+1 952 001 8563</span>
                  </li>
                  <li>
                    Age <span>38 Years, Male</span>
                  </li>
                  <li>
                    Blood Group <span>AB+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mypatients;
