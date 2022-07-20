import './bookappoinment.css';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { FaChevronLeft, FaChevronRight, FaMapMarked } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import * as api from '../../../api/index';
import Spinner from '../Spinner/Spinner';
import { iterateDate } from '../../../utilities/DateItration';
import moment from 'moment';

function BookAppoinment() {
  const [Date, setDate] = useState([]);
  const { id } = useParams();
  const [active, setActive] = useState('');

  const handleClick = (event) => {
    setActive(event.target.value);
  };

  let day0 = moment().format('dddd').toLowerCase();
  let day1 = moment().add(1, 'days').format('dddd').toLowerCase();
  let day2 = moment().add(2, 'days').format('dddd').toLowerCase();
  let day3 = moment().add(3, 'days').format('dddd').toLowerCase();
  let day4 = moment().add(4, 'days').format('dddd').toLowerCase();
  let day5 = moment().add(5, 'days').format('dddd').toLowerCase();
  let day6 = moment().add(6, 'days').format('dddd').toLowerCase();

  const [Doctor, setDoctor] = useState({ loading: false, done: false });

  useEffect(() => {
    setDate(iterateDate());
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
  console.log(active);
  return (
    <>
      <Header />
      <div className="content mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="booking-doc-info">
                    <Link to={''} className="booking-doc-img">
                      <img src={Doctor?.profile_image} alt="User" />
                    </Link>
                    <div className="booking-info">
                      <h4>
                        <Link to={''}>
                          Dr.{Doctor?.name} {Doctor?.lastname}
                        </Link>
                      </h4>
                      <p className="doc-department">{Doctor?.specialization}</p>
                      <p className="text-muted mb-0">
                        <FaMapMarked /> {Doctor?.state},{Doctor?.country}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-6">
                  <h4 className="mb-1">{moment().format('dddd')}</h4>
                  <p className="text-muted">{moment().format('YYYY-M-D')}</p>
                </div>
              </div>
              {/* Schedule Widget */}
              <div className="card booking-schedule schedule-widget">
                {/* Schedule Header */}
                <div className="schedule-header">
                  <div className="row">
                    <div className="col-md-12">
                      {/* Day Slot */}
                      <div className="day-slot">
                        <ul>
                          <li className="left-arrow">
                            <Link to={''}>
                              <FaChevronLeft />
                            </Link>
                          </li>
                          {Date?.map((row) => (
                            <li key={row._id}>
                              <span>{moment(row?.data).format('dddd')}</span>
                              <span className="slot-date">
                                {row?.data}{' '}
                                <small className="slot-year"></small>
                              </span>
                            </li>
                          ))}
                          <li className="right-arrow">
                            <Link to={''}>
                              <FaChevronRight />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* /Day Slot*/}
                    </div>
                  </div>
                </div>
                {/* /Schedule Header */}

                {/* Schedule Content */}
                <div className="schedule-cont">
                  <div className="row">
                    <div className="col-md-12">
                      {/* Time Slot */}
                      <div className="time-slot">
                        <ul className="clearfix">
                          <li>
                            {Doctor.monday &&
                              Doctor[day0].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  className={
                                    active === row._id
                                      ? 'active timing'
                                      : 'timing'
                                  }
                                >
                                  <span>{row.start}</span> {'-'}
                                  <span>{row.end}</span>
                                </button>
                              ))}
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day1].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  className={
                                    active === row._id
                                      ? 'active timing'
                                      : 'timing'
                                  }
                                >
                                  <span>{row.start}</span> {'-'}
                                  <span>{row.end}</span>
                                </button>
                              ))}
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day2].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  className={
                                    active === row._id
                                      ? 'active timing'
                                      : 'timing'
                                  }
                                >
                                  <span>{row.start}</span> {'-'}
                                  <span>{row.end}</span>
                                </button>
                              ))}
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day3].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  className={
                                    active === row._id
                                      ? 'active timing'
                                      : 'timing'
                                  }
                                >
                                  <span>{row.start}</span> {'-'}
                                  <span>{row.end}</span>
                                </button>
                              ))}
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day4].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  className={
                                    active === row._id
                                      ? 'active timing'
                                      : 'timing'
                                  }
                                >
                                  <span>{row.start}</span> {'-'}
                                  <span>{row.end}</span>
                                </button>
                              ))}
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day5].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  className={
                                    active === row._id
                                      ? 'active timing'
                                      : 'timing'
                                  }
                                >
                                  <span>{row.start}</span> {'-'}
                                  <span>{row.end}</span>
                                </button>
                              ))}
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day6].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  className={
                                    active === row._id
                                      ? 'active timing'
                                      : 'timing'
                                  }
                                >
                                  <span>{row.start}</span> {'-'}
                                  <span>{row.end}</span>
                                </button>
                              ))}
                          </li>
                        </ul>
                      </div>
                      {/* /Time Slot */}
                    </div>
                  </div>
                </div>
                {/* /Schedule Content*/}
              </div>
              {/* /Schedule Widget */}

              {/* Submit Section */}
              <div className="submit-section proceed-btn text-right">
                <Link to={''} className="btn btn-primary submit-btn">
                  Proceed to Pay
                </Link>
              </div>
              {/* /Submit Section */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content  */}
    </>
  );
}

export default BookAppoinment;
