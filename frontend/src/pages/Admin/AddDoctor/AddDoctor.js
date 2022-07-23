import PageHeader from '../../../components/Admin/PageHeader';
import './addDoctor.scss';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import DoctorForm from '../../../components/Admin/DoctorForm/DoctorForm';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../components/User/Spinner/Spinner';
import Datatables from '../../../components/Admin/DoctorForm/Datatables';
import { reset } from '../../../features/admin/auth/adminauthSlice';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function AddDoctor() {
  const dispatch = useDispatch();
  const { doctors, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.adminAuth
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
    <>
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
    </>
  );
}

export default AddDoctor;
