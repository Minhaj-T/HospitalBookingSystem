import * as React from 'react';
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
import { useDispatch } from 'react-redux';
import { addSpecialities } from '../../../features/admin/Specialties/SpecialtiesSlice';


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

function SpecialitesForm() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
 
  const [formData, setFormData] = React.useState({
    name: '',
  });

  const { name} = formData;

  console.log(formData);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };



  const onSubmit=(e)=>{
    e.preventDefault();
    console.log("click");
    const Data = {
      name,
    };
    dispatch(addSpecialities(Data)); 
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
        <AddIcon /> Add Specialites
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
          Add Speciality
        </BootstrapDialogTitle>
      <form onSubmit={onSubmit}>  
        <DialogContent dividers>
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} >
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
              {/* <Grid item xs={12} sm={6}>
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
              </Grid> */}
            </Grid>
          </React.Fragment>
          <div style={{paddingTop: '25px',textAlign: 'center'}}>
          <Button variant="contained" size="medium"  type="submit">Save</Button>
          </div>
        </DialogContent>
      </form>  
      </BootstrapDialog>
    </div>
  )
}

export default SpecialitesForm