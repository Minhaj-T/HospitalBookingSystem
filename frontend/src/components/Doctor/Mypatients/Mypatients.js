import './mypatients.css';
import { Link, } from 'react-router-dom';
import mm from '../../../images/myImage.jpg';
import { FaMapMarkedAlt } from 'react-icons/fa';
import {useSelector} from 'react-redux';
function Mypatients() {
  const { doctor } = useSelector((state) => state.doctorAuth);
  const { appointment } = useSelector((state) => state.appointments);

  return ( 
    <>

    
      <div className="row row-grid">
    {appointment&&appointment.map((row)=>(
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card widget-profile pat-widget-profile">
            <div className="card-body">
              <div className="pro-widget-content">
                <div className="profile-info-widget">
                  <Link to={""}  className="booking-doc-img">
                    <img src={row.userId['profile_image']} alt="User" />
                  </Link>
                  <div className="profile-det-info">
                    <h3>
                      <Link to={""}>{row.userId['name']}</Link>
                    </h3>

                    <div className="patient-details">
                      <h5>
                        <b>Patient ID :</b>{row.userId['_id'].slice(0, 5)} 
                      </h5>
                      <h5 className="mb-0">
                        <FaMapMarkedAlt/> {row.userId['city']}, {row.userId['state']}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="patient-info">
                <ul>
                  <li>
                    Phone <span>{row.userId['mobile']}</span>
                  </li>
                  <li>
                    Age <span>{row.userId['age']} Years old, {row.userId['gender']}</span>
                  </li>
                  <li>
                    Blood Group <span>{row.userId['blood_group']}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default Mypatients;
