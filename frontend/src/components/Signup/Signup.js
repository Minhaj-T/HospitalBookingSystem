import LoginPoster from "../../images/login-banner.png";
import "./Signup.css";

function Signup() {
  return (
    <>
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content  */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={LoginPoster}
                      className="img-fluid"
                      alt="Carewell Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                         <span>Patient Register</span>
                      </h3>
                    </div>
                    <form action="">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Mobile"
                        />
                        <label htmlFor="floatingInput">Mobile Number</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="****"
                        />
                        <label htmlFor="floatingInput">Password</label>
                      </div>
                      <div className="d-grid mx-auto">
                        <button className="btn btn-primary" type="button">
                          Signup
                        </button>
                      </div>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>

                      <div className="text-center dont-have">
                      Already have an account?{" "}
                        <a href="register.html">Login</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
     

    </>
  )
}

export default Signup