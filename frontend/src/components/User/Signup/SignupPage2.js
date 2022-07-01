import "./Signup.css";
import camaraIcon from "../../../images/icons-camera.svg";  
import { Link } from "react-router-dom";
function SignupPage2() {
  return (
    <>
        <div className="main-wrapper">
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
                            {/* <li>
                              <a href="#" className="active">
                                1
                              </a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li> */}
                          </ul>
                        </div>
                        <form
                          id="profile_pic_form"
                          enctype="multipart/form-data"
                        >
                          <div className="profile-pic-col">
                            <h3>Profile Picture</h3>
                            <div className="profile-pic-upload">
                              <div className="cam-col">
                                <img
                                  src={camaraIcon}
                                  id="prof-avatar"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <span>Upload Profile Picture</span>
                              <input
                                type="file"
                                id="profile_image"
                                name="profile_image"
                              />
                            </div>
                          </div>
                          <div className="mt-5">
                            <Link
                              to={""}
                              className="btn btn-primary w-100 btn-lg login-btn step1_submit"
                            >
                              continue
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="login-bottom-copyright">
                      <span>&copy; 2022 Doccure. All rights reserved.</span>
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

export default SignupPage2;
