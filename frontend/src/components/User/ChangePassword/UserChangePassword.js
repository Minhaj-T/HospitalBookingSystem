import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { changePass } from '../../../validations/formValidator';
import classname from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {editUser_Password, reset, logout} from '../../../features/users/auth/authSlice';
import Spinner from '../Spinner/Spinner';

function UserChangePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [FormData, setFormData] = useState({
    old_password: '',
    password: '',
    password2: '',
  });
  const { old_password, password, password2 } = FormData;

  const [registerErrors, setRegisterError] = useState({
    old_password: '',
    password: '',
    password2: '',
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(logout());
      navigate('/login');
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

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

  const onSubmit = (e) => {
    e.preventDefault();

    if (changePass(FormData, setRegisterError)) {
      if (password !== password2) {
        toast.error('new password and confirm password must match');
      } else {
        const data = {
          oldPassword: old_password,
          NewPassword: password,
        };
        dispatch(editUser_Password(data));
      }
    }
  };

  // Loading page
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              {/* Change Password Form  */}
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label>Old Password</label>
                  <input
                    type="password"
                    name="old_password"
                    onChange={onChange}
                    value={old_password}
                    className={classname('form-control', {
                      'is-invalid': registerErrors.old_password,
                    })}
                  />
                  {registerErrors.old_password && (
                    <div className="invalid-feedback">
                      {registerErrors.old_password}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    onChange={onChange}
                    value={password}
                    type="password"
                    name="password"
                    className={classname('form-control', {
                      'is-invalid': registerErrors.password,
                    })}
                  />
                  {registerErrors.password && (
                    <div className="invalid-feedback">
                      {registerErrors.password}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    onChange={onChange}
                    values={password2}
                    type="password"
                    name="password2"
                    className={classname('form-control', {
                      'is-invalid': registerErrors.password2,
                    })}
                  />
                  {registerErrors.password2 && (
                    <div className="invalid-feedback">
                      {registerErrors.password2}
                    </div>
                  )}
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

export default UserChangePassword;
