import { Link } from "react-router-dom"

function SignupPage4() {
  return (
    <>
     <div className="content login-page pt-0">
        <div className="container-fluid">
          <div className="account-content">
            <div className="row align-items-center">
              <div className="login-right">
                <div className="inner-right-login">
                  <div className="login-header">
                    <div className="logo-icon">
                      <img src="images/img-logo.png" alt="" />
                    </div>
                    <div className="step-list">
                      <ul>
                        {/* <li><a href="#" className="active-done">1</a></li>
                        <li><a href="#" className="active-done">2</a></li>
                        <li><a href="#" className="active">3</a></li> */}
                      </ul>
                    </div>
                    <form method="post">
                      <h3 className="my-4">Your Location</h3>
                      <div className="form-group">
                        <label>Select City</label>
                        <select
                          className="form-select form-control"
                          id="heart_rate"
                          name="heart_rate"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option value="">Select Your City</option>
                          <option value="1">Malappuram</option>
                          <option value="2">City 2</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Select State</label>
                        <select
                          className="form-select form-control"
                          id="bp"
                          name="bp"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option value="">Select Your State</option>
                          <option value="1">Kerala</option>
                          <option value="2">State 2</option>
                        </select>
                      </div>
                      <div className="mt-5">
                        <Link
                          to={""}
                          className="btn btn-primary w-100 btn-lg login-btn step5_submit"
                          >continue
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="login-bottom-copyright">
                  <span>&copy; 2022 Carewell. All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage4