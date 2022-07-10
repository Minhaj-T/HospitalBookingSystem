import maleIcon from '../../../images/icons-male.png';
import femaleIcon from '../../../images/icons-female.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { form3 } from '../../../features/users/auth/authSlice';
import { useDispatch } from 'react-redux';

function SignupPage3() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    allergies: '',
    gender: '',
    weight_unit: '',
    height_unit: '',
    blood_group: '',
    glucose: '',
    heart_rate: '',
    bp: '',
  });
  const {
    weight,
    gender,
    height,
    address,
    mobile,
    age,
    allergies,
    weight_unit,
    height_unit,
    blood_group,
    glucose,
    heart_rate,
    bp,
  } = formData;

  // get the data into the form
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const Data = {
      weight,
      gender,
      height,
      address,
      mobile,
      age,
      allergies,
      weight_unit,
      height_unit,
      blood_group,
      glucose,
      heart_rate,
      bp,
    };
    dispatch(form3(Data));
    navigate('/signup4');
  };

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
                          <li>
                            <Link to={''} className="active-done">
                              1
                            </Link>
                          </li>
                          <li>
                            <Link to={''} className="active">
                              2
                            </Link>
                          </li>
                          <li>
                            <Link to={''}>3</Link>
                          </li>
                        </ul>
                      </div>
                      <form id="personal_details" onSubmit={onSubmit}>
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
                                onChange={onChange}
                              />
                              <label htmlFor="test1">
                                <span className="gender-icon">
                                  <img src={maleIcon} alt="" />
                                </span>
                                <span>Male</span>
                              </label>
                            </div>
                            <div className="col-6 ps-2">
                              <input
                                type="radio"
                                id="test2"
                                name="gender"
                                value="Female"
                                onChange={onChange}
                              />
                              <label htmlFor="test2">
                                <span className="gender-icon">
                                  <img src={femaleIcon} alt="" />
                                </span>
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
                                  value={weight}
                                  onChange={onChange}
                                  id="weight"
                                />
                              </div>
                              <div className="col-5 ps-2">
                                <select
                                  className="form-select form-control"
                                  id="weight_unit"
                                  name="weight_unit"
                                  onChange={onChange}
                                >
                                  <option value="">unit</option>
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
                                  name="height"
                                  value={height}
                                  onChange={onChange}
                                />
                              </div>
                              <div className="col-5 ps-2">
                                <select
                                  className="form-select form-control"
                                  id="height_unit"
                                  name="height_unit"
                                  tabIndex="-1"
                                  aria-hidden="true"
                                  onChange={onChange}
                                >
                                  <option value="cm">unit</option>
                                  <option value="cm">cm</option>
                                  <option value="ft">ft</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>Address</label>
                            <textarea
                              type="text"
                              name="address"
                              value={address}
                              onChange={onChange}
                              className="form-control"
                              id="age"
                            />
                          </div>
                          <div className="form-group">
                            <label>Mobile</label>
                            <input
                              type="text"
                              name="mobile"
                              value={mobile}
                              onChange={onChange}
                              className="form-control"
                              id="age"
                            />
                          </div>
                          <div className="form-group">
                            <label>Your Age</label>
                            <input
                              type="text"
                              name="age"
                              value={age}
                              onChange={onChange}
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
                              onChange={onChange}
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
                              onChange={onChange}
                            >
                              <option value="">Select Your Heart Rate</option>
                              <option value="70-90 bpm">70-90 bpm</option>
                              <option value="90-110 bpm">90-110 bpm</option>
                              <option value="110-130 bpm">110-130 bpm</option>
                              <option value="110-130 bpm">110-130 bpm</option>
                              <option value="150-170 bpm">150-170 bpm</option>
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
                              onChange={onChange}
                            >
                              <option value="">
                                Select Your Blood Pressure
                              </option>
                              <option value="Less than 80">
                                Less than 120
                              </option>
                              <option value="120-129">120-129</option>
                              <option value="130-139">130-139</option>
                              <option value="140 0r higher">
                                140 0r higher
                              </option>
                              <option value="over 180">over 180</option>
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
                              onChange={onChange}
                            >
                              <option value="">
                                Select Your Glucose Level
                              </option>
                              <option value="2-6 mmol/L">2-6 mmol/L</option>
                              <option value="7-10 mmol/L">7-10 mmol/L</option>
                              <option value="11-15 mmol/L">11-15 mmol/L</option>
                              <option value="17-21 mmol/L">17-21 mmol/L</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Allergies</label>
                            <input
                              type="text"
                              className="form-control"
                              value={allergies}
                              onChange={onChange}
                              id="allergies"
                              name="allergies"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <button
                            type="submit"
                            className="btn btn-primary w-100 btn-lg login-btn step2_submit"
                          >
                            continue
                          </button>
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
