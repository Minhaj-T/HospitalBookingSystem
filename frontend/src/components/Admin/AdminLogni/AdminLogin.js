import { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import Mainlogo from "../../../images/logo.png";
function AdminLogin() {
  const paperStyle = {
    padding: 51,
    height: "55vh",
    width: 490,
    margin: "100px auto",
  };

  const btnstyle = { margin: "8px 0" };

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  console.log(formData);
  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
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
        </Paper>
      </Grid>
    </>
  );
}

export default AdminLogin;
