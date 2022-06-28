import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import * as api from '../../../api/admin'
import { Link, } from 'react-router-dom';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import CustomizedDialogs from '../Edituser/EditUserModal';
import { useDispatch,useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { reset,} from '../../../features/admin/Get-all-users/getallUsersSlice'
import Spinner from "../../Spinner/Spinner";

function Datatable() {
  const label = { inputProps: { 'aria-label': '' } };
  const [Users, setUsers] = useState([])
  const dispatch=useDispatch()

  const { users, isLoading, isError, isSuccess, message } = useSelector((state) => state.fetchAlluser);
  useEffect(() => {
    if (isError) {
      toast.error(message ||"Not Found");
      return
    }
    if (isSuccess && users) {
      setUsers(users.user)
    }
    dispatch(reset());
  }, [users, isError, isSuccess, message, dispatch]);

   // Loading page
   if (isLoading) {
    return <Spinner />;
  }

const columns = [
  { field: '_id', headerName: 'User-ID', width: 170 },
  {
    field: 'name',
    headerName: 'User',
    width: 230,
    renderCell:(params)=>{
        return(
          <div className='cellWithImg'>
            <img className='cellImg' src={params.row.img} alt="" />
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
        <CustomizedDialogs id={params.id ? params.id:""}/>
        
        <div className="deleteButton">
        <Link to="" style={{ textDecoration: "none" }}>
        <Button   variant="outlined" size="small" color="error">
          Delete
        </Button>
        </Link>
        </div>
      </div>
    );
  },
},
];

const rows =Users ? Users : [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }];

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

export default Datatable