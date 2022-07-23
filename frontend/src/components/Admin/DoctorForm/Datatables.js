
import { DataGrid } from '@mui/x-data-grid';
// import { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDoctor} from '../../../features/admin/auth/adminauthSlice'
// import CustomizedDialogs from '../Edituser/EditUserModal';



function Datatables() {
  const dispatch=useDispatch()
  const label = { inputProps: { 'aria-label': '' } };
  const {  doctors } = useSelector(
    (state) => state.adminAuth)


const columns = [
  { field:"", headerName: 'No', width: 50 },
  { field: 'doctorID', headerName: 'Doctor-ID', width: 170 },
  {
    field: 'name',
    headerName: 'Doctor',
    width: 230,
    renderCell:(params)=>{
        return(
          <div className='cellWithImg'>
            <img className='cellImg' src={params.row.profile_image} alt="" />
            {params.row.name}
          </div>
        )
    }
  },
  { field: 'email', headerName: 'Email', width: 170 },
  {field:'status', headerName:'Status',width:150,
  renderCell:(params)=>{
    return(
      <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
    )
    }
},
{field:'#', headerName:'',width:120,
renderCell:(params)=>{
  return(
    <div><Switch {...label} defaultChecked /></div>
  )
  }
},     
{
  field: "action",headerName: "Action",width: 180,
  renderCell: (params) => {
    return (
      <div className="cellAction">
        {/* <CustomizedDialogs id={params.id ? params.id:""}/> */}
        
        <div className="deleteButton">
        <Link to="" style={{ textDecoration: "none" }}>
        <Button onClick={()=>{
          dispatch(deleteDoctor(params.id))
        }}   variant="outlined" size="small" color="error">
          Delete
        </Button>
        </Link>
        </div>
      </div>
    );
  },
},
];

const rows =doctors ? doctors: '';

  return (
    <div className="datatable">
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId ={(row) => row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      </div>
      
    </div>
  )
}

export default Datatables