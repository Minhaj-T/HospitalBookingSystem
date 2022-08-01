import './appointment.scss';
import '../Table/table.scss';
import { DataGrid } from '@mui/x-data-grid';
import PageHeader from '../PageHeader';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import * as api from '../../../api/admin';
import { errorHandler } from '../../../utilities/errorMessege';
import { notification } from '../../../utilities/notification';
import Spinner from '../../User/Spinner/Spinner';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

function Appointment() {
  const [Fulldata, setFulldata] = useState({ loading: false, done: false });
  const { admin } = useSelector((state) => state.adminAuth);
  //create a tocken
  const { token } = admin ? admin : '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    !Fulldata.done && fetchAllAppointments(0);
  }, []);
  const fetchAllAppointments = async (limit) => {
    setFulldata((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await api.latestTransactions(limit, config);
      if (data) {
        setFulldata((prev) => ({
          ...prev,
          ...data,
          loading: false,
          done: true,
        }));
      }
    } catch (error) {
      return notification.error(errorHandler(error));
    }
  };

  console.log('addd appointment', Fulldata);
  // Loading page
  if (Fulldata.loading) {
    return <Spinner />;
  }

  const columns = [
    { field: 'payId', headerName: 'Tracking ID', width: 170 },
    {
      field: 'name',
      headerName: 'Patient',
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellImg"
              src={params.row['userId'].profile_image}
              alt=""
            />
            {params.row['userId'].name}
          </div>
        );
      },
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 170,
      renderCell: (params) => {
        return <div>{moment(params.date).format('LL')}</div>;
      },
    },
    { field: 'amount', headerName: 'Payment', width: 150 },
    { field: 'method', headerName: 'Payment Method', width: 170 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus1 ${params.row.status}`}>
            {params.row.status == 'pending'
              ? 'pending'
              : '' || params.row.status == 'false'
              ? 'canceled'
              : '' || params.row.status == 'complete'
              ? 'complete'
              : '' || params.row.status == 'true'
              ? 'Approve'
              : ''}
          </div>
        );
      },
    },
  ];
  const rows = Fulldata['transactions'] ? Fulldata['transactions'] : '';
  return (
    <>
      <PageHeader
        title="Appointment Details"
        subTitle="See the Appointment Details"
        icon={<BookOnlineIcon fontSize="large" />}
      />
      <div className="listContainer">
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
      </div>
    </>
  );
}

export default Appointment;
