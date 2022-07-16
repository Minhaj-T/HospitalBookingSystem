import './scheduletiming.css';
import { Link } from 'react-router-dom';
import { FaEdit, FaPlusCircle, FaTimes } from 'react-icons/fa';
function ScheduleTiming() {
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
                            <Link
                              to={'#add_time_slot'}
                              className="edit-link"
                              data-bs-toggle="modal"
                            >
                              <FaPlusCircle /> Add Slot
                            </Link>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* /Sunday Slot  */}

                        {/* Monday Slot  */}
                        <div
                          id="slot_monday"
                          className="tab-pane fade show active"
                        >
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <Link
                              to={'#edit_time_slot'}
                              className="edit-link"
                              data-bs-toggle="modal"
                            >
                              <FaEdit />
                              Edit
                            </Link>
                          </h4>

                          {/* Slot List */}
                          <div className="doc-times">
                            <div className="doc-slot-list">
                              8:00 pm - 11:30 pm
                              <Link to={''} className="delete_schedule">
                                <FaTimes />
                              </Link>
                            </div>
                            <div className="doc-slot-list">
                              11:30 pm - 1:30 pm
                              <Link to={''} className="delete_schedule">
                                <FaTimes />
                              </Link>
                            </div>
                            <div className="doc-slot-list">
                              3:00 pm - 5:00 pm
                              <Link to={''} className="delete_schedule">
                                <FaTimes />
                              </Link>
                            </div>
                            <div className="doc-slot-list">
                              6:00 pm - 11:00 pm
                              <Link to={''} className="delete_schedule">
                                <FaTimes />
                              </Link>
                            </div>
                          </div>
                          {/* /Slot List  */}
                        </div>
                        {/* /Monday Slot  */}

                        {/* Tuesday Slot  */}
                        <div id="slot_tuesday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <Link
                              to={'#add_time_slot'}
                              className="edit-link"
                              data-bs-toggle="modal"
                            >
                              <FaPlusCircle /> Add Slot
                            </Link>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* Tuesday Slot  */}

                        {/* Wednesday Slot */}
                        <div id="slot_wednesday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <Link
                              to={'#add_time_slot'}
                              className="edit-link"
                              data-bs-toggle="modal"
                            >
                              <FaPlusCircle /> Add Slot
                            </Link>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* Wednesday Slot */}

                        {/* Thursday Slot */}
                        <div id="slot_thursday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <Link
                              to={'#add_time_slot'}
                              className="edit-link"
                              data-bs-toggle="modal"
                            >
                              <FaPlusCircle /> Add Slot
                            </Link>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* Thursday Slot  */}

                        {/* Friday Slot */}
                        <div id="slot_friday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <Link
                              to={'#add_time_slot'}
                              className="edit-link"
                              data-bs-toggle="modal"
                            >
                              <FaPlusCircle /> Add Slot
                            </Link>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
                        </div>
                        {/* Friday Slot  */}

                        {/* Saturday Slot */}
                        <div id="slot_saturday" className="tab-pane fade">
                          <h4 className="card-title d-flex justify-content-between">
                            <span>Time Slots</span>
                            <Link
                              to={'#add_time_slot'}
                              className="edit-link"
                              data-bs-toggle="modal"
                            >
                              <FaPlusCircle /> Add Slot
                            </Link>
                          </h4>
                          <p className="text-muted mb-0">Not Available</p>
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
      <div className="modal fade custom-modal" id="add_time_slot">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Time Slots</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="hours-info flex ">
                  <div className="row form-row hours-cont">
                    <div className="col-12 col-md-10 m-auto">
                      <div className="row form-row">
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>Start Time</label>
                            <input
                              type="time"
                              className="form-control datetimepicker"
                              placeholder="Select Date"
                              name="date"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-group">
                            <label>End Time</label>
                            <input
                              type="time"
                              className="form-control datetimepicker"
                              placeholder="Select Date"
                              name="date"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-center">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Add Slot
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduleTiming;
