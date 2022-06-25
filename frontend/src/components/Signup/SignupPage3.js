import maleIcon from '../../images/icons-male.png';
import femaleIcon from '../../images/icons-female.png'
import { Link } from 'react-router-dom';
function SignupPage3() {
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
                            <a href="#" className="active-done">
                              1
                            </a>
                          </li>
                          <li>
                            <a href="#" className="active">
                              2
                            </a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li> */}
                        </ul>
                      </div>
                      <form id="personal_details" enctype="multipart/form-data">
                      <div className="text-start mt-2">
                        <h4 className="mt-3">Select Your Gender</h4>
                      </div>
                      <div className="select-gender-col">
                        <div className="row">
                          <div className="col-6 pe-0">
                            <input
                              type="radio"
                              id="test1"
                              name="gender"
                              value="Male"
                            />
                            <label htmlFor="test1">
                              <span className="gender-icon"
                                ><img src={maleIcon} alt=""
                              /></span>
                              <span>Male</span>
                            </label>
                          </div>
                          <div className="col-6 ps-2">
                            <input
                              type="radio"
                              id="test2"
                              name="gender"
                              value="Female"
                            />
                            <label htmlFor="test2">
                              <span className="gender-icon"
                                ><img src={femaleIcon} alt=""
                              /></span>
                              <span>Female</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="step-process-col mt-4">
                        <div className="form-group">
                          <label>Your Weight</label>
                          <div className="row">
                            <div className="col-7 pe-0">
                              <input
                                type="text"
                                className="form-control"
                                name="weight"
                                value=""
                                id="weight"
                              />
                            </div>
                            <div className="col-5 ps-2">
                              <select
                                className="form-select form-control"
                                id="weight_unit"
                                name="weight_unit"
                              >
                                <option value="kg">Kg</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Your Height</label>
                          <div className="row">
                            <div className="col-7 pe-0">
                              <input
                                type="text"
                                className="form-control"
                                id="height"
                              />
                            </div>
                            <div className="col-5 ps-2">
                              <select
                                className="form-select form-control"
                                id="height_unit"
                                name="height_unit"
                                tabIndex="-1"
                                aria-hidden="true"
                              >
                                <option value="cm">cm</option>
                                <option value="ft">ft</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Your Age</label>
                          <input
                            type="text"
                            name="age"
                            value=""
                            className="form-control"
                            id="age"
                          />
                        </div>
                        <div className="form-group">
                          <label>Blood Type</label>
                          <select
                            className="form-select form-control"
                            id="blood_group"
                            name="blood_group"
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <option value="">Select your blood group</option>
                            <option value="A-">A-</option>
                            <option value="A+">A+</option>
                            <option value="B-">B-</option>
                            <option value="B+">B+</option>
                            <option value="AB-">AB-</option>
                            <option value="AB+">AB+</option>
                            <option value="O-">O-</option>
                            <option value="O+">O+</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Heart Rate</label>
                          <select
                            className="form-select form-control"
                            id="heart_rate"
                            name="heart_rate"
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <option value="">Select Your Heart Rate</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Blood Pressure</label>
                          <select
                            className="form-select form-control"
                            id="bp"
                            name="bp"
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <option value="">Select Your Blood Pressure</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Glucose Level</label>
                          <select
                            className="form-select form-control"
                            id="glucose"
                            name="glucose"
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <option value="">Select Your Glucose Level</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Allergies</label>
                          <input
                            type="text"
                            className="form-control"
                            value=""
                            id="allergies"
                            name="allergies"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Link
                          to={""}
                          className="btn btn-primary w-100 btn-lg login-btn step2_submit"
                          >continue
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

export default SignupPage3;
