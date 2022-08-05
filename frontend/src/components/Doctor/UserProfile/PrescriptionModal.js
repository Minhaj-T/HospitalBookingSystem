import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Mainlogo from '../../../images/logo.png';
import moment from 'moment';

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

export default function CustomizedDialogs({ id }) {
  const { prescription } = useSelector((state) => state.userprofile);

  const Result = prescription?.filter((row) => row?._id === id);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link
        to={''}
        className="btn btn-sm bg-info-light"
        onClick={handleClickOpen}
      >
        <FaEye /> View
      </Link>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="md"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Prescription
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="container">
            <div className="row">
              <div className="span4">
                <img
                  src={Mainlogo}
                  className="img-rounded logo"
                  style={{ width: '7rem', paddingBottom: '5px' }}
                  alt="doctor"
                />
                <address>
                  <strong>{Result[0].doctorId?.name}</strong>
                  <br />
                  {Result[0].doctorId?.specialization}
                  <br />
                  {moment(Result[0].date).format('LL')}
                </address>
              </div>
            </div>
            <div className="row">
              <div className="span8 well invoice-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>name</th>
                      <th>Quantity</th>
                      <th>Days</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  {Result &&
                    Result[0]?.prescription.map((row) => (
                      <tbody>
                        <tr>
                          <td>{row.name}</td>
                          <td>{row.quantity}</td>
                          <td>{row.days} </td>
                          <td>{row.time}</td>
                        </tr>
                      </tbody>
                    ))}
                  <tr>
                    <td colspan="4"></td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="row">
              <div
                className="span8 well invoice-thank"
                style={{ padding: '10px' }}
              >
                <h5>Thank You!</h5>
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
