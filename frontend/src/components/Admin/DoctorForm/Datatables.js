import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDoctor } from '../../../features/admin/auth/adminauthSlice';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { BlockDoctors } from '../../../features/admin/auth/adminauthSlice';
// import CustomizedDialogs from '../Edituser/EditUserModal';

function Datatables() {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.adminAuth);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [deleteId, setDeleteId] = useState(null);
  const handleClose = () => {
    setOpen(false);
    setDeleteId(null);
  };

  const handleDelete = async () => {
    dispatch(deleteDoctor(deleteId));
  };

  const handleBlock = async (id, status) => {
    const data = {
      id,
      status,
    };
    dispatch(BlockDoctors(data));
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    boxShadow: 24,
    border: 'none',
    p: 3,
  };

  const columns = [
    { field: '', headerName: 'No', width: 50 },
    { field: 'doctorID', headerName: 'Doctor-ID', width: 170 },
    {
      field: 'name',
      headerName: 'Doctor',
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.profile_image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 170 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.isBlocked}`}>
            {params.row.isBlocked ? 'Block' : 'Active'}
          </div>
        );
      },
    },
    {
      field: '#',
      headerName: '',
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            <Switch
              checked={params.row.isBlocked}
              onChange={(e) => handleBlock(params.id, e.target.checked)}
            />
          </div>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <div className="cellAction">
              {/* <CustomizedDialogs id={params.id ? params.id:""}/> */}

              <div className="deleteButton">
                <Link to="" style={{ textDecoration: 'none' }}>
                  <Button
                    onClick={() => {
                      setDeleteId(params.id);
                      handleOpen();
                    }}
                    variant="outlined"
                    size="small"
                    color="error"
                  >
                    Delete
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Confirm Action
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <>
                      <div>Are you sure to remove this user{deleteId}</div>
                    </>
                  </Typography>
                  <div className="content-end mt-3">
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      Cancel
                    </Button>{' '}
                    <Button
                      className="delete-confirm-btn"
                      size="small"
                      variant="contained"
                      color="error"
                      onClick={handleDelete}
                    >
                      Confirm
                    </Button>
                  </div>
                </Box>
              </Modal>
            </div>
          </>
        );
      },
    },
  ];

  const rows = doctors ? doctors : '';

  return (
    <div className="datatable">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  );
}

export default Datatables;
