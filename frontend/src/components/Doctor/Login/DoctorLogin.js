import React from 'react';
import { useEffect, useState } from 'react';
import LoginPoster from '../../../images/DoctorLogin.jpg';
import '../../User/Login/Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../User/Spinner/Spinner';
import { isLoginValid } from '../../../validations/formValidator';
import classname from 'classnames';
import Header from '../../User/Header/Header';
import { login, reset } from '../../../features/Doctor/auth/doctorauthSlice';

function DoctorLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get the current state
  const { doctor, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.doctorAuth
  );

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const [loginErrors, setLoginError] = useState({
    email: '',
    password: '',
  });

  // get the data into the form
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setLoginError((prevState) => ({
      ...prevState,
      [e.target.name]: '',
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && doctor) {
      navigate('/doctor');
    }
    dispatch(reset());
  }, [doctor, isError, isSuccess, message, navigate, dispatch]);

  // submit the data into server
  const onSubmit = (e) => {
    e.preventDefault();

    //form validation section
    if (isLoginValid(formData, setLoginError)) {
      const doctorData = {
        email,
        password,
      };
      dispatch(login(doctorData));
    }
  };

  // Loading page
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Header />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-8 offset-md-2"
              style={{ paddingTop: '50px' }}
            >
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
                        Carewell{' '}
                        <span style={{ color: '#e22f73' }}>Doctor</span>
                      </h3>
                    </div>
                    <form onSubmit={onSubmit}>
                      <div className="form-floating mt-3">
                        <input
                          type="text"
                          name="email"
                          value={email}
                          className={classname('form-control', {
                            'is-invalid': loginErrors.email,
                          })}
                          onChange={onChange}
                          placeholder="name@example.com"
                        />
                        {loginErrors.email && (
                          <div className="invalid-feedback">
                            {loginErrors.email}
                          </div>
                        )}
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating  mt-4">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          className={classname('form-control', {
                            'is-invalid': loginErrors.password,
                          })}
                          onChange={onChange}
                          placeholder="Enter your Password ?"
                        />
                        {loginErrors.password && (
                          <div className="invalid-feedback">
                            {loginErrors.password}
                          </div>
                        )}
                        <label htmlFor="floatingInput">Password</label>
                      </div>
                      <div className="d-grid mx-auto mt-4">
                        <button className="btn btn-primary" type="submit">
                          Login
                        </button>
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
  );
}

export default DoctorLogin;
