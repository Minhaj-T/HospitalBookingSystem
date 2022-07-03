import { useEffect, useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import Mainlogo from "../../../images/logo.png";
import { useDispatch,useSelector } from "react-redux";
import { reset,login} from '../../../features/admin/auth/adminauthSlice'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../User/Spinner/Spinner"; 

// TODO: admin form validation pending
//style proportys
const paperStyle = {
  padding: 51,
  height: "55vh",
  width: 490,
  margin: "100px auto",
};
const btnstyle = { margin: "8px 0" };


function AdminLogin() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);
  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { email, password } = formData;

  const dispatch=useDispatch()
  const navigate=useNavigate();

  // get the current state
  const { admin, isLoading, isError, isSuccess, message } = useSelector((state) => state.adminAuth);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && admin) {
      
      navigate('/adminDashboard');
    }
    dispatch(reset());
  }, [admin, isError, isSuccess, message, navigate, dispatch]);
  
  const onSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }else{
      console.log("email or password is not avalable");
    }

     // Loading page
  if (isLoading) {
    return <Spinner />;
  }

  }
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <form onSubmit={onSubmit}>
          <Grid align="center">
            <img alt="mainlog-img" src={Mainlogo}/>
          </Grid>
          <br />

          <Grid item>
            <TextField
              variant="standard"
              value={email}
              name="email"
              onChange={onChange}
              label="Email"
              placeholder="Enter your email"
              fullWidth
              required
            />
          </Grid>
          <br />
          <Grid item>
            <TextField
              variant="standard"
              label="Password"
              value={password}
              name="password"
              placeholder="Enter password"
              type="password"
              onChange={onChange}
              fullWidth
              required
            />
          </Grid>

          <br />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default AdminLogin;
