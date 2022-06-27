import './datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import * as api from '../../../api/admin'

function Datatable() {
  const [Users, setUsers] = useState([])

  useEffect(() => {
    loadUser()
  }, [])
  

  
  const loadUser = async () => {
    let {data} = await api.fetchUsers()
    console.log("this is the ftch user",data);
    if(data?.user){
      const userData= await data.user
      setUsers(userData)
    }
}


const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'email', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.name || ''} ${params.row.name || ''}`,
  },
];

const rows =Users ? Users : [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }];
console.log(Users);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId ={(row) => row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      
    </div>
  )
}

export default Datatable