import React, { useState } from 'react';

function UserChangePassword() {
  const [FormData, setFormData] = useState({
    old_password: '',
    new_password1: '',
    new_password2: '',
  });
  const {oldPassword, new_password1, new_password2} =FormData;
  console.log(FormData);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              {/* Change Password Form  */}
              <form>
                <div className="form-group">
                  <label>Old Password</label>
                  <input
                    type="password"
                    name="old_password"
                    onChange={onChange}
                    value={oldPassword}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                  onChange={onChange}
                  value={new_password1}
                    type="password"
                    name="new_password1"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                  onChange={onChange}
                  values={new_password2}
                    type="password"
                    name="new_password2"
                    className="form-control"
                  />
                </div>
                <div className="submit-section">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save Changes
                  </button>
                </div>
              </form>
              {/* <Change Password Form  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserChangePassword;
