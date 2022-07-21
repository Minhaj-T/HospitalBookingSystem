import './bookingsuccess.css';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import {Link,useLocation} from 'react-router-dom'
import Header from '../Header/Header';

function BookingSuccess() {
    const { state } = useLocation(); 
    const{name,day,slot}=state
    console.log(state);   
  return (
    <>
    <Header/>
      <div className="content success-page-cont" style={{marginTop:'110px'}}>
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
                      <br /> on <strong>{state?.day}{" "} {state?.slot}</strong>
                    </p>
                    <Link to={""} 
                      href="invoice-view.html"
                      className="btn btn-primary view-inv-btn"
                    >
                      View Invoice
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- /Success Card --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingSuccess;
