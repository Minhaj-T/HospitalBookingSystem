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
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { addSpecialities } from '../../../features/admin/auth/adminauthSlice';
import { UploadImage } from '../../../utilities/cloudinaryImageUpload';
import Spinner from '../../User/Spinner/Spinner';

let Input = styled('input')({
  display: 'none',
});

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
  const [pic, setPic] = React.useState('');
  const [Loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    name: '',
  });

  const { name } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //dump the image into cloudinary ImageUpload
  const postDetails = async (pics) => {
    try {
      setLoading(true);
      const data = await UploadImage(pics);
      setPic(data.secure_url.toString());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const Data = {
      name,
      img: pic,
    };
    dispatch(addSpecialities(Data));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (Loading) {
    return <Spinner />;
  }

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
                <Grid item xs={12}>
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
                <Grid
                  item
                  xs={12}
                  style={{ paddingTop: '25px', textAlign: 'center' }}
                >
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={(e) => postDetails(e.target.files[0])}
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                  <br />
                  <label>choose your image</label>
                </Grid>
              </Grid>
            </React.Fragment>
            <div style={{ paddingTop: '25px', textAlign: 'center' }}>
              <Button variant="contained" size="medium" type="submit">
                Save
              </Button>
            </div>
          </DialogContent>
        </form>
      </BootstrapDialog>
    </div>
  );
}

export default SpecialitesForm;
