import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginPoster from "../../images/login-banner.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import "./Signup.css";
import Spinner from "../Spinner/Spinner";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // get the current state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  // get the data into the form
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // submit the data into server
  const onSubmit = (e) => {
    e.preventDefault();

    // Check password one equal to password2
    if (password !== password2) {
      toast.error("passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  // Loading page
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
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
                        <span>Patient Register</span>
                      </h3>
                    </div>
                    <form onSubmit={onSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={onChange}
                          className="form-control"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={onChange}
                          className="form-control"
                          placeholder="Email"
                        />
                        <label htmlFor="floatingInput">Email</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={onChange}
                          className="form-control"
                          placeholder="****"
                        />
                        <label htmlFor="floatingInput">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name="password2"
                          value={password2}
                          onChange={onChange}
                          className="form-control"
                          placeholder="****"
                        />
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
                        Already have an account?{" "}
                        <Link to={"/login"}>Login</Link>
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
