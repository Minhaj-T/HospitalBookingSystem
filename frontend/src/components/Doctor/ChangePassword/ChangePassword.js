import React from 'react';

function changepassword() {
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
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control" />
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

export default changepassword;
