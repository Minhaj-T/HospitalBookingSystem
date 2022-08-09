import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import * as api from '../../../api/admin';

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

export default function CustomizedDialogs(params) {
  const [User, setUser] = useState([]);
  const { users } = useSelector((state) => state.fetchAlluser);

  const [formData, setFormData] = useState({
    userId: params.id,
    email: '',
    name: '',
  });
  console.log(formData);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const {
    name = User.map((x) => x.name),
    email = User.map((x) => x.email),
    userId,
  } = formData;
  //get values for the filter data
  const userName = User.map((x) => x.name);
  const userEmail = User.map((x) => x.email);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = async () => {
    const getUser = await users.user.filter((user) => user._id === params.id);
    setUser(getUser);
    setOpen(true);
  };
  const handleClose = async () => {
    const userData = {
      email,
      name,
    };
    const user = await api.editUser(userData, userId);
    if (user) {
      setOpen(false);
    } else {
      console.log('erooorr..');
    }
  };
  const handleClose1 = async () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose1}
        >
          Edit User Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="name"
                label="Name"
                color="secondary"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={name ? name : userName}
                onChange={onChange}
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="email"
                label="Email"
                fullWidth
                color="secondary"
                autoComplete="family-name"
                variant="standard"
                value={email ? email : userEmail}
                onChange={onChange}
                focused
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
