import './showdoctors.scss';
import { TiStar } from 'react-icons/ti';
import { FaMapMarkerAlt, FaMoneyBillAlt } from 'react-icons/fa';
import { FcInspection } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Showdoctors({ fullData }) {
  return (
    <>
      <div className="container">
        <div className="faders">
          <div className="left"></div>
          <div className="right"></div>
        </div>

        <div className="items">
          {fullData?.doctor &&
            fullData?.doctor.map((row) => (
              <div className="entry">
                <div className="item">
                  <div className="doc-img">
                    <Link to={''}>
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src={row.profile_image}
                      />
                    </Link>
                    <Link to={''} className="fav-btn">
                      {' '}
                      <i className="far fa-bookmark"></i>
                    </Link>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <Link to={''}>Dr.{row['name']}</Link>
                      <i className="fas fa-check-circle verified"></i>
                    </h3>
                    <p className="speciality">{row['degree']}</p>
                    <div className="rating">
                      <TiStar color="yellow" />
                      <TiStar color="yellow" />
                      <TiStar color="yellow" />
                      <TiStar color="yellow" />
                      <TiStar color="yellow" />
                    </div>
                    <ul className="available-info">
                      <li>
                        {' '}
                        <FcInspection /> {row.specialization}
                      </li>
                      <li>
                        {' '}
                        <FaMapMarkerAlt /> {row['city']},{row['state']}
                      </li>
                      <li>
                        {' '}
                        <FaMoneyBillAlt /> ₹500 - ₹1000{' '}
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        {' '}
                        <Link
                          to={`/doctor-profile/${row._id}`}
                          className="btn view-btn"
                        >
                          View Profile
                        </Link>
                      </div>
                      <div className="col-6">
                        {' '}
                        <Link
                          to={`/user/book-appoinment/${row._id}`}
                          className="btn book-btn"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Showdoctors;
