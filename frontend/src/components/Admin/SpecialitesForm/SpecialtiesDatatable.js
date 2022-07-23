import './specialtiesTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpecialties } from '../../../features/admin/auth/adminauthSlice';
import { Box, Modal, Typography } from '@mui/material';

function SpecialtiesDatatable() {
  const dispatch = useDispatch();
  const { specialties } = useSelector((state) => state.adminAuth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [deleteId, setDeleteId] = useState(null);
  const handleClose = () => {
    setOpen(false);
    setDeleteId(null);
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

  const handleDelete = async () => {
    dispatch(deleteSpecialties(deleteId));
  };

  const columns = [
    { field: '', headerName: 'No', width: 50 },
    {
      field: 'name',
      headerName: 'Specialties',
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg1">
            <img className="cellImg1" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellAction1">
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
        );
      },
    },
  ];

  const rows = specialties ? specialties : '';

  return (
    <>
    <div className="datatable1">
      <div style={{ height: 400, width: '45%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
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
              </Button>
              {' '}
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
}

export default SpecialtiesDatatable;
