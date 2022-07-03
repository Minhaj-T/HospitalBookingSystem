import Navbar from '../../../components/Admin/Navbar/Navbar';
import PageHeader from '../../../components/Admin/PageHeader';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import './addDoctor.scss';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import DoctorForm from '../../../components/Admin/DoctorForm/DoctorForm';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../components/User/Spinner/Spinner';
import Datatables from '../../../components/Admin/DoctorForm/Datatables';
import { reset } from '../../../features/admin/Doctors/DoctorSlice';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function AddDoctor() {
  const dispatch = useDispatch();
  const { doctors, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.allDoctors
  );
  useEffect(() => {
    if (isError) {
      toast.error(message || 'Not Found');
      return;
    }
    dispatch(reset());
  }, [doctors, isError, isSuccess, message, dispatch]);
  
  // Loading page
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div>
          <PageHeader
            title="Doctor Details"
            subTitle="Add and edit Doctor Details"
            icon={<VaccinesOutlinedIcon fontSize="large" />}
          />
        </div>
        <div className="AddDoctor">
          <DoctorForm />
        </div>
        <div className="dataTable">
          <Datatables />
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
