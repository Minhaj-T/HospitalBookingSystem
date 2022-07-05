import './profilesettings.css';
import { Link } from 'react-router-dom';
import mm from '../../../images/myImage.jpg';
function ProfileSettings() {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Basic Information</h4>
          <div class="row form-row">
            <div class="col-md-12">
              <div class="form-group">
                <div class="change-avatar">
                  <div class="profile-img">
                    <img src={mm} alt="User Image" />
                  </div>
                  <div class="upload-img">
                    <div class="change-photo-btn">
                      <span>
                        <i class="fa fa-upload"></i> Upload Photo
                      </span>
                      <input type="file" class="upload" />
                    </div>
                    <small class="form-text text-muted">
                      Allowed JPG, GIF or PNG. Max size of 2MB
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>
                  Username <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" readOnly />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>
                  Email <span class="text-danger">*</span>
                </label>
                <input type="email" class="form-control" readOnly />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>
                  First Name <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>
                  Last Name <span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Phone Number</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label>Gender</label>
                <select class="form-control select">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-0">
                <label>Date of Birth</label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">About Me</h4>
          <div class="form-group mb-0">
            <label>Biography</label>
            <textarea class="form-control" rows="5"></textarea>
          </div>
        </div>
      </div>

      {/* Contact Details  */}
      <div class="card contact-card">
        <div class="card-body">
          <h4 class="card-title">Contact Details</h4>
          <div class="row form-row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Address Line 1</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">Address Line 2</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">City</label>
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">State / Province</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">Country</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">Postal Code</label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Contact Details  */}
      <div class="card">
								<div class="card-body">
									<h4 class="card-title">Education</h4>
									<div class="education-info">
										<div class="row form-row education-cont">
											<div class="col-12 col-md-10 col-lg-11">
												<div class="row form-row">
													<div class="col-12 col-md-6 col-lg-4">
														<div class="form-group">
															<label>Degree</label>
															<input type="text" class="form-control"/>
														</div> 
													</div>
													<div class="col-12 col-md-6 col-lg-4">
														<div class="form-group">
															<label>College/Institute</label>
															<input type="text" class="form-control"/>
														</div> 
													</div>
													<div class="col-12 col-md-6 col-lg-4">
														<div class="form-group">
															<label>Year of Completion</label>
															<input type="text" class="form-control"/>
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

export default ProfileSettings;
