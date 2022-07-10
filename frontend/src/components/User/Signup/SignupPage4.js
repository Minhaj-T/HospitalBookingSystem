import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register, reset } from '../../../features/users/auth/authSlice';
import { toast } from 'react-toastify';
import Spinner from '../Spinner/Spinner';

function SignupPage4() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, form1, form2, form3, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    state: '',
    city: '',
    zip_code: '',
  });
  const { state, city, zip_code } = formData;

  // get the data into the form
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    const Data = {
      ...form1,
      ...form2,
      ...form3,
      state,
      city,
      zip_code,
    };
    dispatch(register(Data));
  };

  // Loading page
  if (isLoading) {
    return <Spinner />;
  }

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
                        <li>
                          <Link to={''} className="active-done">
                            1
                          </Link>
                        </li>
                        <li>
                          <Link to={''} className="active-done">
                            2
                          </Link>
                        </li>
                        <li>
                          <Link to={''} className="active">
                            3
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <form onSubmit={onSubmit}>
                    <h3 className="my-4">Your Location</h3>
                      <div className="form-group">
                        <label>Zip Code</label>
                        <input
                          type="text"
                          name="zip_code"
                          value={zip_code}
                          onChange={onChange}
                          className="form-control"
                          id="age"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label>Select City</label>
                        <select
                          className="form-select form-control"
                          id="heart_rate"
                          name="city"
                          tabIndex="-1"
                          value={city}
                          onChange={onChange}
                          aria-hidden="true"
                        >
                          <option value="">Select Your City</option>
                          <option value="Malappuram">Malappuram</option>
                          <option value="Kozhikod">Kozhikod</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Select State</label>
                        <select
                          className="form-select form-control"
                          id="bp"
                          name="state"
                          value={state}
                          onChange={onChange}
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option value="">Select Your State</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Thamilnadu">Thamilnadu</option>
                        </select>
                      </div>

                      <div className="mt-5">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 btn-lg login-btn step5_submit"
                        >
                          Finish
                        </button>
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
  );
}

export default SignupPage4;
