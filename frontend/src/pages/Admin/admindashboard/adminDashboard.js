import './dashboard.scss';
import Widgets from '../../../components/Admin/Widgets/Widgets';
import { allDoctors } from '../../../features/admin/auth/adminauthSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../../../features/admin/auth/adminauthSlice';
import { allSpecialties } from '../../../features/admin/auth/adminauthSlice';

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
    </>
  );
}

export default AdminDashboard;
