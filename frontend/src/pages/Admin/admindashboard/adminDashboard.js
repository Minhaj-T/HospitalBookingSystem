import './dashboard.scss';
import Widgets from '../../../components/Admin/Widgets/Widgets';
import { allDoctors } from '../../../features/admin/auth/adminauthSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../../../features/admin/auth/adminauthSlice';
import { allSpecialties } from '../../../features/admin/auth/adminauthSlice';
import Featured from '../../../components/Admin/featured/Featured';
import Chart from '../../../components/Admin/Chart/Chart';
import Table from '../../../components/Admin/Table/Table';

function AdminDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allDoctors());
    dispatch(fetchUsers());
    dispatch(allSpecialties());
  }); 

  return (
    <>
      <div className="widgets">
        <Widgets type="user" />
        <Widgets type="order" />
        <Widgets type="earning" />
        <Widgets type="balance" />
      </div>
      <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
      <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>v
    </>
  );
}

export default AdminDashboard;
