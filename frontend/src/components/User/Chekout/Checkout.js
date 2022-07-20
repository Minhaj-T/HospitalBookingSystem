import React, { useEffect, useState } from 'react';
import './checkout.css';
import { Link, useParams, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import * as api from '../../../api/index';
import Spinner from '../Spinner/Spinner';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Checkout() {
  const { id } = useParams();
  const { state } = useLocation();
  const { user } = useSelector((state) => state.auth);
  const [Doctor, setDoctor] = useState({ loading: false, done: false });
  const { Id, Day, Date, Sloat } = state;

  useEffect(() => {
    !Doctor.done && getDoctor(id);
  }, []);

  const getDoctor = async (id) => {
    setDoctor((prev) => ({ ...prev, loading: true }));
    let { data } = await api.getDoctor(id);
    if (data?.data) {
      setDoctor((prev) => ({
        ...prev,
        ...data?.data,
        loading: false,
        done: true,
      }));
    }
  };

  // Loading page
  if (Doctor.loading) {
    return <Spinner />;
  }
  console.log('ckeckout');
  return (
    <>
      <Header />
      {/* <!-- Page Content --> */}
      <div className="content">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <div className="card">
                <div className="card-body">
                  {/* <!-- Checkout Form --> */}
                  <form>
                    {/* <!-- Personal Information --> */}
                    <div className="info-widget">
                      <h4 className="card-title">Personal Information</h4>
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Full Name</label>
                            <input
                              className="form-control"
                              value={user?.name}
                              type="text"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Email</label>
                            <input
                              className="form-control"
                              value={user?.email}
                              type="text"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Phone</label>
                            <input
                              className="form-control"
                              value={user?.mobile}
                              type="text"
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="form-group card-label">
                            <label>Place</label>
                            <input
                              className="form-control"
                              value={user?.city}
                              type="text"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /Personal Information --> */}

                    <div className="payment-widget">
                      <h4 className="card-title">Payment Method</h4>

                      {/* <!-- Paypal Payment --> */}
                      <div className="payment-list">
                        <label className="payment-radio paypal-option">
                          <input type="radio" name="radio" />
                          <span className="checkmark"></span>
                          Google Pay
                        </label>
                      </div>
                      {/* <!-- /Paypal Payment --> */}

                      {/* <!-- Terms Accept --> */}
                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <input type="checkbox" id="terms_accept" />
                          <label for="terms_accept">
                            I have read and accept{' '}
                            <Link to={''}>Terms &amp; Conditions</Link>
                          </label>
                        </div>
                      </div>
                      {/* <!-- /Terms Accept --> */}

                      {/* <!-- Submit Section --> */}
                      <div className="submit-section mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                        >
                          Confirm and Pay
                        </button>
                      </div>
                      {/* <!-- /Submit Section --> */}
                    </div>
                  </form>
                  {/* <!-- /Checkout Form --> */}
                </div>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 theiaStickySidebar">
              {/* <!-- Booking Summary --> */}
              <div className="card booking-card">
                <div className="card-header">
                  <h4 className="card-title">Booking Summary</h4>
                </div>
                <div className="card-body">
                  {/* <!-- Booking Doctor Info --> */}
                  <div className="booking-doc-info mb-3">
                    <Link to={''} className="booking-doc-img">
                      <img src={Doctor?.profile_image} alt="User" />
                    </Link>
                    <div className="booking-info">
                      <h4>
                        <Link to={''}>
                          Dr.{Doctor?.name} {Doctor?.lastname}
                        </Link>
                      </h4>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <FaMapMarkerAlt />
                          {Doctor?.state},{Doctor?.country}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Booking Doctor Info --> */}

                  <div className="booking-summary">
                    <div className="booking-item-wrap">
                      <ul className="booking-date">
                        <li>
                          Date <span>{Date ? Date : 'yyy-mm-dd'}</span>
                        </li>
                        <li>
                          Time{' '}
                          <span>{Sloat ? Sloat : '00:00 AM-00:00 PM'}</span>
                        </li>
                      </ul>
                      <ul className="booking-fee">
                        <li>
                          Consulting Fee <span>₹ 100</span>
                        </li>
                        <li>
                          Booking Fee <span>₹ 10</span>
                        </li>
                      </ul>
                      <div className="booking-total">
                        <ul className="booking-total-list">
                          <li>
                            <span>Total</span>
                            <span className="total-cost">₹ 110</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Booking Summary --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Page Content --> */}
    </>
  );
}

export default Checkout;
