import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginPoster from '../../../images/HomeLogin.jpg';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset, loginGoogle } from '../../../features/users/auth/authSlice';
import Spinner from '../../User/Spinner/Spinner';
import { isLoginValid } from '../../../validations/formValidator';
import classname from 'classnames';
import Header from '../../User/Header/Header';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // get the current state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
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

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

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

  // submit the data into server
  const onSubmit = (e) => {
    e.preventDefault();

    //form validation section
    if (isLoginValid(formData, setLoginError)) {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };
  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const {name,email,email_verified}=await jwt_decode(googleData.credential)
    const data={
      email,
      email_verified
    }
    dispatch(loginGoogle(data))
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
                  <div className="col-md-7 col-lg-6 login-left mt-5">
                    <img
                      src={LoginPoster}
                      className="img-fluid"
                      alt="Carewell Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span style={{ color: '#e22f73' }}>Carewell</span>{' '}
                        <Link style={{ textDecoration: 'none' }} to={'/doctor'}>
                          Are you a Doctor?
                        </Link>
                      </h3>
                    </div>
                    <form onSubmit={onSubmit}>
                      <div className="form-floating mb-3">
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
                      <div className="form-floating mb-3">
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
                      <div className="text-right">
                        <Link className="forgot-link" to={'/'}>
                          Forgot Password ?
                        </Link>
                      </div>
                      <div className="d-grid mx-auto">
                        <button className="btn btn-primary" type="submit">
                          Login
                        </button>
                      </div>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                        <div className="google-button">
                          <GoogleLogin
                            onSuccess={handleLogin}
                            onError={handleFailure}
                            useOneTap
                          />
                        </div>
                      </div>

                      <div className="text-center dont-have">
                        Don’t have an account?{' '}
                        <Link to={'/signup'}>Register</Link>
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

export default Login;
