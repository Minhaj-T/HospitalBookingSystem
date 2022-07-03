import * as React from 'react';
import './doctorForm.scss';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel, Select } from '@mui/material';
import { useDispatch } from 'react-redux';

import { addDoctor} from '../../../features/admin/Doctors/DoctorSlice'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
 
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    phone: '',
    specialization: '',
  });
  
  const { name, email, password, phone, gender, specialization } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };



  const onSubmit=(e)=>{
    e.preventDefault();
    console.log("click");
    const doctorData = {
      name,
      email,
      password,
      phone,
      gender,
      specialization
    };
    dispatch(addDoctor(doctorData));

  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddIcon /> Add Doctor
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add doctor
        </BootstrapDialogTitle>
      <form onSubmit={onSubmit}>  
        <DialogContent dividers>
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="name"
                  label="Name"
                  value={name}
                  onChange={onChange}
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="email"
                  value={email}
                  onChange={onChange}
                  label="email"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={onChange}
                  label="Phone"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  label="password"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel id="demo-simple-select-label">
                  Specialization
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="specialization"
                  value={specialization}
                  label="Specialization"
                  onChange={onChange}
                  fullWidth
                >
                  <MenuItem value={'Urology'}>Urology</MenuItem>
                  <MenuItem value={'Neurology'}>Neurology</MenuItem>
                  <MenuItem value={'Orthopedic'}>Orthopedic</MenuItem>
                  <MenuItem value={'Cardiologist'}>Cardiologist</MenuItem>
                  <MenuItem value={'Dentist'}>Dentist</MenuItem>
                  <MenuItem value={'Cardiologist'}>Cardiologisty</MenuItem>
                  <MenuItem value={'Neurology'}>Neurology</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="gender"
                  value={gender}
                  label="gender"
                  onChange={onChange}
                  fullWidth
                >
                  <MenuItem value={'Male'}>Male</MenuItem>
                  <MenuItem value={'Female'}>female</MenuItem>
                  <MenuItem value={'Other'}>other</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </React.Fragment>
          <div style={{paddingTop: '25px',textAlign: 'center'}}>
          <Button variant="contained" size="medium"  type="submit">Save Doctor</Button>
          </div>
        </DialogContent>
      </form>  
      </BootstrapDialog>
    </div>
  );
}
