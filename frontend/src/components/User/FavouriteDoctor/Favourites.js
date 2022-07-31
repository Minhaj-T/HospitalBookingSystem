import './favourites.css';
import mm from '../../../images/myImage.jpg';
import { Link } from 'react-router-dom';
import { FcOk, FcInfo } from 'react-icons/fc';
import { FaMapMarkerAlt, FaClock, FaMoneyBillAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as api from '../../../api/index';
import { errorHandler } from '../../../utilities/errorMessege';
import { notification } from '../../../utilities/notification';
import Spinner from '../Spinner/Spinner';
import moment from 'moment';

function Favourites() {
  const [Fulldata, setFulldata] = useState({ loading: false, done: false });
  const { user } = useSelector((state) => state.auth);

  //create a tocken
  const { token } = user ? user : '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    !Fulldata.done && getFavoriteDoctors();
  }, [Fulldata.done]);

  const getFavoriteDoctors = async () => {
    setFulldata((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await api.getFavoriteDoctors(config);
      if (data?.data) {
        const {
          data: { favourites },
        } = data;
        setFulldata((prev) => ({
          ...prev,
          favourites,
          loading: false,
          done: true,
        }));
      }
    } catch (error) {
      return notification.error(errorHandler(error));
    }
  };

  console.log(Fulldata);

  // Loading page
  if (Fulldata.loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="row row-grid">
        {Fulldata['favourites'] &&
          Fulldata['favourites'].map((row) => (
            <div className="col-sm-3 col-md-6 col-lg-4">
              <div className="profile-widget">
                <div className="doc-img ">
                  <Link to={''}>
                    <img
                      className="img-fluid"
                      alt="User"
                      src={row.doctorId['profile_image']}
                    />
                  </Link>
                </div>
                <div className="pro-content">
                  <h3 className="title">
                    <Link style={{ textDecoration: 'none' }} to={''}>
                      Dr. {row.doctorId['name']}
                    </Link>
                    <span style={{ paddingLeft: '5px' }}>
                      <FcOk size={23} />
                    </span>
                  </h3>
                  <p className="speciality">{row.doctorId['specialization']}</p>
                  <ul className="available-info">
                    <li>
                      <FaMapMarkerAlt /> {row.doctorId['state']} ,{' '}
                      {row.doctorId['city']}
                    </li>
                    <li>
                      <FaClock /> Available on{' '}
                      {moment().format('dddd, MMMM Do YYYY')}
                    </li>
                    <li>
                      <FaMoneyBillAlt /> ₹1000 per hour{' '}
                      <FcInfo
                        size={18}
                        data-toggle="tooltip"
                        title="cellWithImg"
                      />
                    </li>
                  </ul>
                  <div className="row row-sm">
                    <div className="col-6">
                      <Link
                        to={`/doctor-profile/${row.doctorId['_id']}`}
                        className="btn view-btn"
                      >
                        View Profile
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to={`/user/book-appoinment/${row.doctorId['_id']}`}
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
    </>
  );
}

export default Favourites;
