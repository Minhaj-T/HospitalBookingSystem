import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { Blockusers } from '../../../features/admin/auth/adminauthSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../../features/admin/auth/adminauthSlice';

function Datatable() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.adminAuth);

  const handleBlock = async (id, status) => {
    const data = {
      id,
      status,
    };
    dispatch(Blockusers(data));
  };
  
  const columns = [
    { field: '', headerName: 'No', width: 50 },
    { field: '_id', headerName: 'User-ID', width: 170 },
    {
      field: 'name',
      headerName: 'User',
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
            {params.row.isBlocked ? "Active" : "Block"}
          </div>
        );
      },
    },
    {
      field: '#',
      headerName: 'Block/Unblock',
      width: 120,
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
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <CustomizedDialogs id={params.id ? params.id:""}/> */}
            <div className="deleteButton">
              <Link to="" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" size="small" color="error">
                  Delete
                </Button>
              </Link>
            </div>
          </div>
        );
      },
    },
  ];


  const rows = users ? users : '';

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

export default Datatable;
