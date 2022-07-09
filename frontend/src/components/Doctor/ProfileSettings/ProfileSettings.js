import './profilesettings.css';
import { Link } from 'react-router-dom';
import mm from '../../../images/myImage.jpg';
import { FaUpload } from 'react-icons/fa';
function ProfileSettings() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Basic Information</h4>
          <div className="row form-row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="change-avatar">
                  <div className="profile-img">
                    <img src={mm} alt="User Image" />
                  </div>
                  <div className="upload-img">
                    <div className="change-photo-btn">
                      <span>
                        <FaUpload /> Upload Photo
                      </span>
                      <input type="file" className="upload" />
                    </div>
                    <small className="form-text text-muted">
                      Allowed JPG, GIF or PNG. Max size of 2MB
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Username <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" readOnly />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Email <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" readOnly />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  First Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Last Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Gender</label>
                <select className="form-control select">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-0">
                <label>Date of Birth</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">About Me</h4>
          <div className="form-group mb-0">
            <label>Biography</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
        </div>
      </div>

      {/* Contact Details  */}
      <div className="card contact-card">
        <div className="card-body">
          <h4 className="card-title">Contact Details</h4>
          <div className="row form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Address Line 1</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Address Line 2</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">City</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">State / Province</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Country</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Postal Code</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Contact Details  */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Education</h4>
          <div className="education-info">
            <div className="row form-row education-cont">
              <div className="col-12 col-md-10 col-lg-11">
                <div className="row form-row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Degree</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>College/Institute</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Year of Completion</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Experience</h4>
          <div className="experience-info">
            <div className="row form-row experience-cont">
              <div className="col-12 col-md-10 col-lg-11">
                <div className="row form-row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Hospital Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>From</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>To</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Designation</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="submit-section submit-btn-bottom" style={{paddingBottom:"3rem"}}>
        <button type="submit" className="btn btn-primary submit-btn">
          Save Changes
        </button>
      </div>
    </>
  );
}

export default ProfileSettings;
