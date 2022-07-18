import './scheduletiming.css';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import CustomizedDialogs from './AddSlote';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../User/Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../features/Doctor/auth/doctorauthSlice';

function ScheduleTiming() {
  const dispatch = useDispatch();
  const { doctor, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.doctorAuth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && doctor) {
      toast.success('Slot added successfully !', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    dispatch(reset());
  }, [doctor, isError, isSuccess, message, dispatch]);

  // Loading page
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Schedule Timings</h4>
              <div className="profile-box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card schedule-widget mb-0">
                      {/* Schedule Header  */}
                      <div className="schedule-header">
                        {/* Schedule Nav  */}
                        <nav>
                          <div className="schedule-nav">
                            <ul className="nav nav-tabs nav-justified">
                              <li className="nav-item">
                                <Link
                                  to={'#slot_sunday'}
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                >
                                  Sunday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to={'#slot_monday'}
                                  className="nav-link active"
                                  data-bs-toggle="tab"
                                >
                                  Monday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to={'#slot_tuesday'}
                                  className="nav-link "
                                  data-bs-toggle="tab"
                                >
                                  Tuesday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to={'#slot_wednesday'}
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                >
                                  Wednesday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to={'#slot_thursday'}
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                >
                                  Thursday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to={'#slot_friday'}
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                >
                                  Friday
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to={'#slot_saturday'}
                                  className="nav-link"
                                  data-bs-toggle="tab"
                                >
                                  Saturday
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </nav>

                        {/* Schedule Nav */}
                      </div>
                      {/* Schedule Header  */}

                      {/* Schedule Content  */}
                      <div className="tab-content schedule-cont">
                        {/* Sunday Slot */}
                        <div id="slot_sunday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <CustomizedDialogs day={'sunday'} />
                          </h4>
                          {doctor?.sunday.length !== 0 ? (
                            <div className="doc-times">
                              {doctor.sunday.map((row) => (
                                <div key={row._id} className="doc-slot-list">
                                  {row.start} - {row.end}
                                  <Link to={''} className="delete_schedule">
                                    <FaTimes />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-muted mb-0">Not Available</p>
                          )}
                        </div>
                        {/* /Sunday Slot  */}

                        {/* Monday Slot  */}
                        <div
                          id="slot_monday"
                          className="tab-pane fade show active"
                        >
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <CustomizedDialogs day={'monday'} />
                          </h4>
                          {doctor?.monday.length !== 0 ? (
                            <div className="doc-times">
                              {doctor.monday.map((row) => (
                                <div key={row._id} className="doc-slot-list">
                                  {row.start} - {row.end}
                                  <Link to={''} className="delete_schedule">
                                    <FaTimes />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-muted mb-0">Not Available</p>
                          )}
                        </div>
                        {/* /Monday Slot  */}

                        {/* Tuesday Slot  */}
                        <div id="slot_tuesday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <CustomizedDialogs day={'tuesday'} />
                          </h4>
                          {doctor?.tuesday.length !== 0 ? (
                            <div className="doc-times">
                              {doctor.tuesday.map((row) => (
                                <div key={row._id} className="doc-slot-list">
                                  {row.start} - {row.end}
                                  <Link to={''} className="delete_schedule">
                                    <FaTimes />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-muted mb-0">Not Available</p>
                          )}
                        </div>
                        {/* Tuesday Slot  */}

                        {/* Wednesday Slot */}
                        <div id="slot_wednesday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <CustomizedDialogs day={'wednesday'} />
                          </h4>
                          {doctor?.wednesday.length !== 0 ? (
                            <div className="doc-times">
                              {doctor.wednesday.map((row) => (
                                <div key={row._id} className="doc-slot-list">
                                  {row.start} - {row.end}
                                  <Link to={''} className="delete_schedule">
                                    <FaTimes />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-muted mb-0">Not Available</p>
                          )}
                        </div>
                        {/* Wednesday Slot */}

                        {/* Thursday Slot */}
                        <div id="slot_thursday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <CustomizedDialogs day={'thursday'} />
                          </h4>
                          {doctor?.thursday.length !== 0 ? (
                            <div className="doc-times">
                              {doctor.thursday.map((row) => (
                                <div key={row._id} className="doc-slot-list">
                                  {row.start} - {row.end}
                                  <Link to={''} className="delete_schedule">
                                    <FaTimes />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-muted mb-0">Not Available</p>
                          )}
                        </div>
                        {/* Thursday Slot  */}

                        {/* Friday Slot */}
                        <div id="slot_friday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <CustomizedDialogs day={'friday'} />
                          </h4>
                          {doctor?.friday.length !== 0 ? (
                            <div className="doc-times">
                              {doctor.friday.map((row) => (
                                <div key={row._id} className="doc-slot-list">
                                  {row.start} - {row.end}
                                  <Link to={''} className="delete_schedule">
                                    <FaTimes />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-muted mb-0">Not Available</p>
                          )}
                        </div>
                        {/* Friday Slot  */}

                        {/* Saturday Slot */}
                        <div id="slot_saturday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <CustomizedDialogs day={'saturday'} />
                          </h4>
                          {doctor?.saturday.length !== 0 ? (
                            <div className="doc-times">
                              {doctor.saturday.map((row) => (
                                <div key={row._id} className="doc-slot-list">
                                  {row.start} - {row.end}
                                  <Link to={''} className="delete_schedule">
                                    <FaTimes />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-muted mb-0">Not Available</p>
                          )}
                        </div>
                        {/* /Saturday Slot  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduleTiming;
