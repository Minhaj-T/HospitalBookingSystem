import './scheduletiming.css';
import { Link } from 'react-router-dom';
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
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Timing Slot Duration</label>
                      <select defaultValue="" className="select form-control">
                        <option value="" disabled>
                          Choose salutation ...
                        </option>
                        <option value="">15 mins</option>
                        <option value="" selected="selected">
                          30 mins
                        </option>
                        <option value="">45 mins</option>
                        <option value="">1 Hour</option>
                      </select>
                    </div>
                  </div>
                </div>
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
                              data-toggle="modal"
                            >
                              <i className="fa fa-plus-circle"></i> Add Slot
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
                              data-toggle="modal"
                            >
                              <i className="fa fa-edit mr-1"></i>Edit
                            </Link>
                          </h4>

                          {/* Slot List */}
                          <div className="doc-times">
                            <div className="doc-slot-list">
                              8:00 pm - 11:30 pm
                              <Link to={''} className="delete_schedule">
                                <i className="fa fa-times"></i>
                              </Link>
                            </div>
                            <div className="doc-slot-list">
                              11:30 pm - 1:30 pm
                              <Link to={''} className="delete_schedule">
                                <i className="fa fa-times"></i>
                              </Link>
                            </div>
                            <div className="doc-slot-list">
                              3:00 pm - 5:00 pm
                              <Link to={''} className="delete_schedule">
                                <i className="fa fa-times"></i>
                              </Link>
                            </div>
                            <div className="doc-slot-list">
                              6:00 pm - 11:00 pm
                              <Link to={''} className="delete_schedule">
                                <i className="fa fa-times"></i>
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
                              data-toggle="modal"
                            >
                              <i className="fa fa-plus-circle"></i> Add Slot
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
                              data-toggle="modal"
                            >
                              <i className="fa fa-plus-circle"></i> Add Slot
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
                              data-toggle="modal"
                            >
                              <i className="fa fa-plus-circle"></i> Add Slot
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
                              data-toggle="modal"
                            >
                              <i className="fa fa-plus-circle"></i> Add Slot
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
                              data-toggle="modal"
                            >
                              <i className="fa fa-plus-circle"></i> Add Slot
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
    </>
  );
}

export default ScheduleTiming;
