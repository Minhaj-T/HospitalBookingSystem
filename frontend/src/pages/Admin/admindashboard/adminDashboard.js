import './dashboard.scss';
import Navbar from '../../../components/Admin/Navbar/Navbar';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import Widgets from '../../../components/Admin/Widgets/Widgets';
import { allDoctors } from '../../../features/admin/Doctors/DoctorSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../../../features/admin/Get-all-users/getallUsersSlice';

function AdminDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allDoctors());
    dispatch(fetchUsers());
  });

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widgets type="user" />
            <Widgets type="order" />
            <Widgets type="earning" />
            <Widgets type="balance" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
