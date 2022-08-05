import '../../Doctor/ProfileSettings/profilesettings.css';
import { FaUpload } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  reset,
  editUser_Details,
} from '../../../features/users/auth/authSlice';
import Spinner from '../Spinner/Spinner';
import { UploadImage } from '../../../utilities/cloudinaryImageUpload';
import { errorHandler } from '../../../utilities/errorMessege';
import { notification } from '../../../utilities/notification';

function UserProfileSettings() {
  const dispatch = useDispatch();
  const [Pic, setPic] = useState(null);
  const [Loading, setLoading] = useState(false);

  // get the current state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: user.name || '',
    mobile: user.mobile || '',
    age: user.age || '',
    email: user.email || '',
    address: user.address || '',
    city: user.city || '',
    state: user.state || '',
    zip_code: user.zip_code || '',
  });
  const { name, mobile, age, email, address, city, state, zip_code } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //dump the image into cloudinary ImageUpload
  const postDetails = async (ProfilePicture) => {
    try {
      setLoading(true);
      const data = await UploadImage(ProfilePicture);
      setPic(data.secure_url.toString());
      setLoading(false);
    } catch (error) {
      notification(errorHandler(error));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  // submit the data into server
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      mobile,
      age,
      email,
      address,
      city,
      state,
      zip_code,
      profile_image: Pic ? Pic : user.profile_image,
    };
    dispatch(editUser_Details(userData));
  };

  // Loading page
  if (Loading || isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="row form-row">
              <div className="col-12 col-md-12">
                <div className="form-group">
                  <div className="change-avatar">
                    <div className="profile-img">
                      <img src={Pic || user.profile_image} alt="User" />
                    </div>
                    <div className="upload-img">
                      <div className="change-photo-btn">
                        <span>
                          <FaUpload /> Upload Photo
                        </span>
                        <input
                          type="file"
                          className="upload"
                          name="profile_image"
                          onChange={(e) => postDetails(e.target.files[0])}
                        />
                      </div>
                      <small className="form-text text-muted">
                        Allowed JPG, GIF or PNG. Max size of 2MB
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={onChange}
                    value={name}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    onChange={onChange}
                    value={mobile}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Age</label>
                  <div className="cal-icon">
                    <input
                      type="text"
                      className="form-control datetimepicker"
                      name="age"
                      onChange={onChange}
                      value={age}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={onChange}
                    value={email}
                  />
                </div>
              </div>
              <div className="col-12 ">
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    type="text"
                    name="address"
                    onChange={onChange}
                    value={address}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    onChange={onChange}
                    value={city}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    onChange={onChange}
                    value={state}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="zip_code"
                    onChange={onChange}
                    value={zip_code}
                  />
                </div>
              </div>
            </div>
            <div className="submit-section">
              <button type="submit" className="btn btn-primary submit-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserProfileSettings;
