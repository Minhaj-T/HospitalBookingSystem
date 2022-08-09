import './bookingsuccess.css';
import * as api from '../../../api/index';
import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import Footer from '../../Footer/Footer';
import { notification } from '../../../utilities/notification';
import { errorHandler } from '../../../utilities/errorMessege';

function BookingSuccess() {
  const { user } = useSelector((state) => state.auth);

  //create a tocken
  const { token } = user ? user : '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { state } = useLocation();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await api.deleteSlote(state, config);
      } catch (error) {
        notification.error(errorHandler(error));
      }
      return null;
    })();
  }, []);

  return (
    <>
      <Header />
      <div
        className="content success-page-cont"
        style={{ marginTop: '110px', backgroundColor: '#f5f5f5' }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* <!-- Success Card --> */}
              <div className="card success-card">
                <div className="card-body">
                  <div className="success-cont">
                    <i className="fas fa-check">
                      <FaCheck />
                    </i>

                    <h3>Appointment booked Successfully!</h3>
                    <p>
                      Appointment booked with <strong>Dr. {state?.name}</strong>
                      <br /> on{' '}
                      <strong>
                        {state?.day} {state?.slot}
                      </strong>
                    </p>
                    <Link
                      to={'/user'}
                      href="invoice-view.html"
                      className="btn btn-primary view-inv-btn"
                    >
                      View Appointments
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- /Success Card --> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookingSuccess;
