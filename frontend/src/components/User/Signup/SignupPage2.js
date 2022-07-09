import './Signup.css';
import camaraIcon from '../../../images/icons-camera.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UploadImage } from '../../../utilities/cloudinaryImageUpload';
import { useDispatch } from 'react-redux';
import { form2 } from '../../../features/users/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

function SignupPage2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [Pic, setPic] = useState('');

  //dump the image into cloudinary ImageUpload
  const postDetails = async (ProfilePicture) => {
    try {
      setIsLoading(true);
      const data = await UploadImage(ProfilePicture);
      setPic(data.secure_url.toString());
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const Data = {
      profile_image: Pic,
    };
    dispatch(form2(Data));
    navigate("/signup3")
  };
  // Loading page
  if (isLoading) {
    return <Spinner />;
  }

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
                            <Link to={''} className="active">
                              1
                            </Link>
                          </li>
                          <li>
                            <Link to={''}>2</Link>
                          </li>
                          <li>
                            <Link to={''}>3</Link>
                          </li>
                        </ul>
                      </div>
                      <form id="profile_pic_form" onSubmit={onSubmit} >
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
                              onChange={(e) => postDetails(e.target.files[0])}
                            />
                          </div>
                        </div>
                        <div className="mt-5">
                          <button
                            type="submit"
                            className="btn btn-primary w-100 btn-lg login-btn step1_submit"
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

export default SignupPage2;
