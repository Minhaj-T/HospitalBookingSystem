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
  const [Day, setDay] = useState('');
  const [DayDate, setDayDate] = useState('');
  const [Slot, setSlot] = useState('');

  const handleClick = (e) => {
    setActive(e.target.value);
    setDay(e.currentTarget.getAttribute('data-value'));
    setDayDate(e.currentTarget.getAttribute('data-value1'));
    setSlot(e.currentTarget.getAttribute('data-value2'));
  };

  let day0 = moment().format('dddd').toLowerCase();
  let day1 = moment().add(1, 'days').format('dddd').toLowerCase();
  let day2 = moment().add(2, 'days').format('dddd').toLowerCase();
  let day3 = moment().add(3, 'days').format('dddd').toLowerCase();
  let day4 = moment().add(4, 'days').format('dddd').toLowerCase();
  let day5 = moment().add(5, 'days').format('dddd').toLowerCase();
  let day6 = moment().add(6, 'days').format('dddd').toLowerCase();
  const SlotDetails = {
    Id: active,
    Day: Day,
    Date: DayDate,
    Slot: Slot,
  };

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

  return (
    <>
      <Header />
      <div className="content mt-5" style={{ backgroundColor: '#f5f5f5' }}>
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
                                  key={row._id}
                                  value={row._id}
                                  data-value={day0}
                                  data-value1={moment().format('YYYY-M-D')}
                                  data-value2={`${row.start}-${row.end}`}
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
                            <div className="p-1"></div>
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day1].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  data-value={day1}
                                  data-value1={moment()
                                    .add(1, 'days')
                                    .format('YYYY-M-D')
                                    .toLowerCase()}
                                  key={row._id}
                                  data-value2={`${row.start}-${row.end}`}
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
                            <div className="p-1"></div>
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day2].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  data-value={day2}
                                  data-value1={moment()
                                    .add(2, 'days')
                                    .format('YYYY-M-D')
                                    .toLowerCase()}
                                  data-value2={`${row.start}-${row.end}`}
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
                            <div className="p-1"></div>
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day3].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  data-value={day3}
                                  data-value1={moment()
                                    .add(3, 'days')
                                    .format('YYYY-M-D')
                                    .toLowerCase()}
                                  data-value2={`${row.start}-${row.end}`}
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
                            <div className="p-1"></div>
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day4].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  data-value={day4}
                                  data-value1={moment()
                                    .add(4, 'days')
                                    .format('YYYY-M-D')
                                    .toLowerCase()}
                                  data-value2={`${row.start}-${row.end}`}
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
                            <div className="p-1"></div>
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day5].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  data-value={day5}
                                  data-value1={moment()
                                    .add(5, 'days')
                                    .format('YYYY-M-D')
                                    .toLowerCase()}
                                  data-value2={`${row.start}-${row.end}`}
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
                            <div className="p-1"></div>
                          </li>
                          <li>
                            {Doctor.monday &&
                              Doctor[day6].map((row) => (
                                <button
                                  onClick={handleClick}
                                  value={row._id}
                                  key={row._id}
                                  data-value={day6}
                                  data-value1={moment()
                                    .add(6, 'days')
                                    .format('YYYY-M-D')
                                    .toLowerCase()}
                                  data-value2={`${row.start}-${row.end}`}
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
                            <div className="p-1"></div>
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
              {Slot && (
                <div className="submit-section proceed-btn text-right">
                  <Link
                    to={`/user/checkout/${Doctor['_id']}`}
                    state={SlotDetails}
                    className="btn btn-primary submit-btn"
                  >
                    Proceed to Pay
                  </Link>
                </div>
              )}
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
