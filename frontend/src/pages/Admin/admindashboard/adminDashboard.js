import './dashboard.scss';
import Widgets from '../../../components/Admin/Widgets/Widgets';
import { allDoctors } from '../../../features/admin/auth/adminauthSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUsers } from '../../../features/admin/auth/adminauthSlice';
import { allSpecialties } from '../../../features/admin/auth/adminauthSlice';
import Featured from '../../../components/Admin/featured/Featured';
import Chart from '../../../components/Admin/Chart/Chart';
import Table from '../../../components/Admin/Table/Table';
import { useSelector } from 'react-redux';
import * as api from '../../../api/admin';
import { errorHandler } from '../../../utilities/errorMessege';
import { notification } from '../../../utilities/notification';
import Spinner from '../../../components/User/Spinner/Spinner';

function AdminDashboard() {
  const dispatch = useDispatch();
  const [Fulldata, setFulldata] = useState({ loading: false, done: false });
  const { admin } = useSelector((state) => state.adminAuth);

  useEffect(() => {
    dispatch(allDoctors());
    dispatch(fetchUsers());
    dispatch(allSpecialties());
  }, []);

  //create a tocken
  const { token } = admin ? admin : '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    !Fulldata.done && getFavoriteDoctors(5);
  }, []);

  const getFavoriteDoctors = async (limit) => {
    setFulldata((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await api.widgetValues(config);
      const appointments = await api.appointmentStatistics(config);
      const transactions = await api.latestTransactions(limit, config);
      if (data?.data && appointments && transactions) {
        setFulldata((prev) => ({
          ...prev,
          ...data,
          ...appointments?.data,
          ...transactions?.data,
          loading: false,
          done: true,
        }));
      }
    } catch (error) {
      return notification.error(errorHandler(error));
    }
  };

  console.log(Fulldata);

  // Loading page
  if (Fulldata.loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="widgets">
        <Widgets
          type="user"
          Total={Fulldata['data']?.TotelUsers}
          diff={Math.floor(Math.random() * 50) + 50}
        />
        <Widgets
          type="doctors"
          Total={Fulldata['data']?.TotelDoctors}
          diff={Math.floor(Math.random() * 50) + 50}
        />
        <Widgets
          type="appointments"
          Total={Fulldata['data']?.TotelAppointments}
          diff={Math.floor(Math.random() * 50) + 50}
        />
        <Widgets
          type="earnings"
          Total={Fulldata['data']?.TotelEarnings}
          diff={Math.floor(Math.random() * 50) + 50}
        />
      </div>
      <div className="charts">
        <Featured
          statics={Fulldata['appointments']}
          TotalAppointments={Fulldata['data']?.TotelAppointments}
        />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table Transactions={Fulldata?.transactions} />
      </div>
      v
    </>
  );
}

export default AdminDashboard;
