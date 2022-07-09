import { useState } from 'react';
import { Link } from 'react-router-dom';
import SingnupPoster from '../../../images/Homesignup.jpg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import classname from 'classnames';
import { form1 } from '../../../features/users/auth/authSlice';
import './Signup.css';
import { isRegisterValid } from '../../../validations/formValidator';
import Header from '../Header/Header';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;

  const [registerErrors, setRegisterError] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  // get the data into the form
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setRegisterError((prevState) => ({
      ...prevState,
      [e.target.name]: '',
    }));
  };

  // submit the data into server
  const onSubmit = (e) => {
    e.preventDefault();

    // form validation section
    if (isRegisterValid(formData, setRegisterError)) {
      // Check password one equal to password2
      if (password !== password2) {
        toast.error('passwords do not match');
      } else {
        const userData = {
          name,
          email,
          password,
        };
        dispatch(form1(userData));
        navigate('/signup2');
      }
    }
  };

  return (
    <>
      <Header />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-8 offset-md-2"
              style={{ paddingTop: '55px' }}
            >
              {/* Login Tab Content  */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={SingnupPoster}
                      className="img-fluid"
                      alt="Carewell Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Patient
                        <span style={{ color: '#e22f73' }}> Register</span>
                      </h3>
                    </div>
                    <form onSubmit={onSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={onChange}
                          className={classname('form-control', {
                            'is-invalid': registerErrors.name,
                          })}
                          placeholder="name@example.com"
                        />
                        {registerErrors.name && (
                          <div className="invalid-feedback">
                            {registerErrors.name}
                          </div>
                        )}
                        <label htmlFor="floatingInput">Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name="email"
                          value={email}
                          onChange={onChange}
                          className={classname('form-control', {
                            'is-invalid': registerErrors.email,
                          })}
                          placeholder="Email"
                        />
                        {registerErrors.email && (
                          <div className="invalid-feedback">
                            {registerErrors.email}
                          </div>
                        )}
                        <label htmlFor="floatingInput">Email</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={onChange}
                          className={classname('form-control', {
                            'is-invalid': registerErrors.password,
                          })}
                          placeholder="****"
                        />
                        {registerErrors.password && (
                          <div className="invalid-feedback">
                            {registerErrors.password}
                          </div>
                        )}
                        <label htmlFor="floatingInput">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name="password2"
                          value={password2}
                          className={classname('form-control', {
                            'is-invalid': registerErrors.password2,
                          })}
                          onChange={onChange}
                          placeholder="****"
                        />
                        {registerErrors.password2 && (
                          <div className="invalid-feedback">
                            {registerErrors.password2}
                          </div>
                        )}
                        <label htmlFor="floatingInput">Confirm Password</label>
                      </div>
                      <div className="d-grid mx-auto">
                        <button className="btn btn-primary" type="submit">
                          Signup
                        </button>
                      </div>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="text-center dont-have">
                        Already have an account?{' '}
                        <Link to={'/login'}>Login</Link>
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

export default Signup;
