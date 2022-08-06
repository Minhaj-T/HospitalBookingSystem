import { useEffect, useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import Mainlogo from "../../../images/logo.png";
import { useDispatch,useSelector } from "react-redux";
import { reset,login} from '../../../features/admin/auth/adminauthSlice'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../User/Spinner/Spinner"; 
import { useForm } from "react-hook-form";
import { notification } from "../../../utilities/notification";


//style proportys
const paperStyle = {
  padding: 51,
  height: "61vh",
  width: 490,
  margin: "100px auto",
};
const btnstyle = { margin: "8px 0" };


function AdminLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm({mode: "all"});
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const pattern=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;


  const dispatch=useDispatch()
  const navigate=useNavigate();

  // get the current state
  const { admin, isLoading, isError, isSuccess, message } = useSelector((state) => state.adminAuth);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && admin) {
      navigate('/admin');
    }
    dispatch(reset());
  }, [admin, isError, isSuccess, message, navigate, dispatch]);
  
  const onSubmit = (e) => {
    const{email, password}=e;
    if(email && password){
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }else{
      notification.error('Please fill the Details..')
    }
}
    

     // Loading page
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Grid align="center">
            <img alt="mainlog-img" src={Mainlogo}/>
          </Grid>
          <br />

          <Grid item>
            <TextField
              variant="standard"
              name="email"
              label="Email"
              placeholder="Enter your email"
              fullWidth
              {...register("email",{ required: true,pattern:pattern })}
            />
            {errors.email && <p style={{color:'red'}}>Please check the Email</p>}
          </Grid>
          <br />
          <Grid item>
            <TextField
              variant="standard"
              label="Password"
              type={"password"}
              name="password"
              placeholder="Enter password"
            
              fullWidth
              {...register("password", {
                required: true,
                minLength:6
            })}
            />
            {errors.password && <p style={{color: 'red'}}>Please check the Password</p>}
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
