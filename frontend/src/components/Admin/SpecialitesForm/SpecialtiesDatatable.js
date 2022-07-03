import './specialtiesTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpecialties } from '../../../features/admin/Specialties/SpecialtiesSlice';

function SpecialtiesDatatable() {
  const dispatch = useDispatch();
  const { specialties } = useSelector((state) => state.allspecialties);

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
                    dispatch(deleteSpecialties(params.id))
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

  const rows = specialties.specialties ? specialties.specialties : '';

  return (
    <div className="datatable1">
      <div style={{ height: 400, width: '50%' }}>
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

export default SpecialtiesDatatable;
