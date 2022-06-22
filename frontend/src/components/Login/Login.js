import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPoster from "../../images/login-banner.png";
import "./Login.css";

function Login() {

  const onSubmit= (e)=>{
    e.preventDefault()
    console.log("submit button cliked");

  }
  
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const{email,password}=formData;

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
                        Login <span>Carewell</span>
                      </h3>
                    </div>
                    <form onSubmit={onSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          className="form-control"
                          onChange={onChange}
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          className="form-control"
                          onChange={onChange}
                          placeholder="Enter your Password ?"
                        />
                        <label htmlFor="floatingInput">Password</label>
                      </div>
                      <div className="text-right">
                        <Link className="forgot-link" to={"/"}>
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
                      </div>

                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to={"/signup"}>Register</Link>
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
