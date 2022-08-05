import React, { useEffect, useState } from 'react';
import './checkout.css';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import * as api from '../../../api/index';
import * as api1 from '../../../api/messenger';
import Spinner from '../Spinner/Spinner';
import { FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { createRazorOrder, verifyAndPay } from '../../../api/payment';
import { notification } from '../../../utilities/notification';
import { calculateTime } from '../../../utilities/DateItration';
import Footer from '../../Footer/Footer';

function Checkout() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const { user } = useSelector((state) => state.auth);
  const [Doctor, setDoctor] = useState({ loading: false, done: false });
  const { Id, Day, Date, Slot } = state;
  const [fullAmount, setfullAmount] = useState('');
  const [start, end] = Slot.split('-');

  //create a tocken
  const config = {
    headers: {
      Authorization: `Bearer ${user['token']}`,
    },
  };

  useEffect(() => {
    !Doctor.done && getDoctor(id);
    setfullAmount(calculateTime(start, end));
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

  //statrt chat with doctor
  const ChatWithDoctor = async () => {
    const data = {
      senderId: user._id,
      receiverId: Doctor._id,
    };
    let Data = await api1.newConversation(data);
    console.log(',da=', Data);
    return null;
  };

  function loadRazorpay(e) {
    e.preventDefault();
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('Razorpay SDK failed to load. Are you online?');
    };

    script.onload = async () => {
      try {
        setDoctor((prev) => ({ ...prev, loading: true }));
        const result = await createRazorOrder({
          amount: fullAmount * 100,
        });

        const { amount, id: order_id, currency, key } = result.data;

        const options = {
          key: key,
          amount: amount.toString(),
          currency: currency,
          name: 'Carewell',
          description: 'Payment for Campaign',
          order_id: order_id,
          handler: async function (response) {
            const { data } = await verifyAndPay(
              {
                ...response,
                amount: amount,
                doctorId: id,
                slotDetails: state,
              },
              config
            );

            if (data.status) {
              notification.success(data.message);
              navigate('/user/booking-success', {
                state: {
                  name: Doctor?.name,
                  doctorId: Doctor._id,
                  day: Day,
                  slot: Slot,
                  id: Id,
                },
              });
              ChatWithDoctor();
            }
          },
          modal: {
            escape: false,
            ondismiss: function () {
              notification.warn('Payment Cancelled !');
            },
          },
          prefill: {
            name: user?.name,
            email: user?.email,
            contact: user?.mobile,
          },
          notes: {
            address: user?.email,
          },
          theme: {
            color: '#2a1961',
          },
        };
        setDoctor((prev) => ({ ...prev, loading: false }));
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        notification.error('Payment Cancelled !');
      }
    };
    document.body.appendChild(script);
  }

  // Loading page
  if (Doctor.loading) {
    return <Spinner />;
  }
  console.log('ckeckout', Day);
  return (
    <>
      <Header />
      {/* <!-- Page Content --> */}
      <div className="content" style={{ backgroundColor: '#f5f5f5' }}>
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
                          {/* <input type="radio" name="radio" /> */}
                        </label>
                        <FaCreditCard style={{ marginRight: 8 }} />
                        <span style={{ color: '#20c0f3', fontWeight: 'bold' }}>
                          Razorpay only
                        </span>
                      </div>
                      {/* <!-- /Paypal Payment --> */}

                      {/* <!-- Terms Accept --> */}
                      <div className="terms-accept">
                        {/* <div className="custom-checkbox">
                          <input type="checkbox" id="terms_accept" />
                          <label for="terms_accept">
                            I have read and accept{' '}
                            <Link to={''}>Terms &amp; Conditions</Link>
                          </label>
                        </div> */}
                      </div>
                      {/* <!-- /Terms Accept --> */}

                      {/* <!-- Submit Section --> */}
                      <div className="submit-section mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                          onClick={loadRazorpay}
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
                          <FaMapMarkerAlt style={{ marginRight: 4 }} />
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
                          Time <span>{Slot ? Slot : '00:00 AM-00:00 PM'}</span>
                        </li>
                      </ul>
                      <ul className="booking-fee">
                        <li>
                          Consulting Fee <span>₹ {fullAmount}</span>
                        </li>
                        <li>
                          Booking Fee <span>₹ free</span>
                        </li>
                      </ul>
                      <div className="booking-total">
                        <ul className="booking-total-list">
                          <li>
                            <span>Total</span>
                            <span className="total-cost">₹ {fullAmount}</span>
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
      <Footer />
    </>
  );
}

export default Checkout;
