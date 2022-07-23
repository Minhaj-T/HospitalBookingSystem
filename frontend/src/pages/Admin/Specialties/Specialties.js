import './specialties.scss';
import PageHeader from '../../../components/Admin/PageHeader';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SpecialitesForm from '../../../components/Admin/SpecialitesForm/SpecialitesForm';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '../../../components/User/Spinner/Spinner';
import { useEffect } from 'react';
import { reset } from '../../../features/admin/auth/adminauthSlice';
import SpecialtiesDatatable from '../../../components/Admin/SpecialitesForm/SpecialtiesDatatable';

function Specialties() {
  const dispatch = useDispatch();

  const { specialties, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.adminAuth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message || 'Not Found');
      return;
    }
    dispatch(reset());
  }, [specialties, isError, isSuccess, message, dispatch]);

  // Loading page
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div>
        <PageHeader
          title="Specialties"
          subTitle="Modify Specialties"
          icon={<PeopleAltOutlinedIcon fontSize="large" />}
        />
      </div>
      <div className="px-4 mt-3">
        <SpecialitesForm />
      </div>
      <div className="dataTable1">
        <SpecialtiesDatatable />
      </div>
    </>
  );
}

export default Specialties;
