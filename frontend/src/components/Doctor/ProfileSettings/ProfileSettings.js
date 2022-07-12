import './profilesettings.css';
import { FaUpload } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editDoctor_Details,
  reset,
} from '../../../features/Doctor/auth/doctorauthSlice';
import { toast } from 'react-toastify';
import Spinner from '../../User/Spinner/Spinner';
import { UploadImage } from '../../../utilities/cloudinaryImageUpload';

function ProfileSettings() {
  const dispatch = useDispatch();
  const [Pic, setPic] = useState(null);
  const [Loading, setLoading] = useState(false);

  // get the current state
  const { doctor, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.doctorAuth
  );
  const [FormData, setFormData] = useState({
    name: doctor.name || '',
    lastname: doctor.lastname || '',
    email: doctor.email || '',
    address1: doctor.address1 || '',
    address2: doctor.address2 || '',
    mobile: doctor.phone || '',
    gender: doctor.gender || '',
    age: doctor.age || '',
    biography: doctor.biography || '',
    city: doctor.city || '',
    state: doctor.state || '',
    country: doctor.country || '',
    postalCode: doctor.postalCode || '',
    degree: doctor.degree || '',
    college: doctor.college || '',
    completion: doctor.completion || '',
    hospitalname: doctor.hospitalname || '',
    from: doctor.from || '',
    to: doctor.to || '',
    designation: doctor.designation || '',
  });
  const {
    name,
    email,
    lastname,
    address1,
    address2,
    mobile,
    gender,
    age,
    biography,
    city,
    state,
    country,
    postalCode,
    degree,
    college,
    completion,
    hospitalname,
    from,
    to,
    designation,
  } = FormData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //dump the image into cloudinary ImageUpload
  const postImage = async (ProfilePicture) => {
    try {
      setLoading(true);
      const data = await UploadImage(ProfilePicture);
      setPic(data.secure_url.toString());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [doctor, isError, isSuccess, message, dispatch]);
  // submit the data into server
  const onSubmit = (e) => {
    e.preventDefault();
    const doctorData = {
      name,
      email,
      lastname,
      address1,
      address2,
      mobile,
      gender,
      age,
      biography,
      city,
      state,
      country,
      postalCode,
      degree,
      college,
      completion,
      hospitalname,
      from,
      to,
      designation,
      profile_image: Pic ? Pic : doctor.profile_image,
    };
    dispatch(editDoctor_Details(doctorData));
  };

  // Loading page
  if (Loading || isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Basic Information</h4>
          <div className="row form-row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="change-avatar">
                  <div className="profile-img">
                    <img src={Pic || doctor.profile_image} alt="User" />
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
                        onChange={(e) => postImage(e.target.files[0])}
                      />
                    </div>
                    <small className="form-text text-muted">
                      Allowed JPG, GIF or PNG. Max size of 2MB
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Username <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  value={lastname}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  value={mobile}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Gender</label>
                <select
                  className="form-select select"
                  name="gender"
                  onChange={onChange}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-0">
                <label>Age</label>
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={age}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">About Me</h4>
          <div className="form-group mb-0">
            <label>Biography</label>
            <textarea
              className="form-control"
              rows="5"
              name="biography"
              value={biography}
              onChange={onChange}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Contact Details  */}
      <div className="card contact-card">
        <div className="card-body">
          <h4 className="card-title">Contact Details</h4>
          <div className="row form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Address Line 1</label>
                <input
                  type="text"
                  className="form-control"
                  name="address1"
                  value={address1}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Address Line 2</label>
                <input
                  type="text"
                  className="form-control"
                  name="address2"
                  value={address2}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={city}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">State / Province</label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  value={state}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Country</label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  value={country}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label">Postal Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="postalCode"
                  value={postalCode}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Contact Details  */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Education</h4>
          <div className="education-info">
            <div className="row form-row education-cont">
              <div className="col-12 col-md-10 col-lg-11">
                <div className="row form-row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Degree</label>
                      <input
                        type="text"
                        className="form-control"
                        name="degree"
                        value={degree}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>College/Institute</label>
                      <input
                        type="text"
                        className="form-control"
                        name="college"
                        value={college}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Year of Completion</label>
                      <input
                        type="text"
                        className="form-control"
                        name="completion"
                        value={completion}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Experience</h4>
          <div className="experience-info">
            <div className="row form-row experience-cont">
              <div className="col-12 col-md-10 col-lg-11">
                <div className="row form-row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Hospital Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="hospitalname"
                        value={hospitalname}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>From</label>
                      <input
                        type="text"
                        className="form-control"
                        name="from"
                        value={from}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>To</label>
                      <input
                        type="text"
                        className="form-control"
                        name="to"
                        value={to}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Designation</label>
                      <input
                        type="text"
                        className="form-control"
                        name="designation"
                        value={designation}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="submit-section submit-btn-bottom"
        style={{ paddingBottom: '3rem' }}
      >
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-primary submit-btn"
        >
          Save Changes
        </button>
      </div>
    </>
  );
}

export default ProfileSettings;
