import './specialties.scss';
import Navbar from '../../../components/Admin/Navbar/Navbar';
import PageHeader from '../../../components/Admin/PageHeader';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SpecialitesForm from '../../../components/Admin/SpecialitesForm/SpecialitesForm';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '../../../components/User/Spinner/Spinner';
import { useEffect } from 'react';
import { reset } from '../../../features/admin/Specialties/SpecialtiesSlice';
import SpecialtiesDatatable from '../../../components/Admin/SpecialitesForm/SpecialtiesDatatable';

function Specialties() {
  const dispatch = useDispatch();
  const { specialties, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.allspecialties
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
    <div className="main-content">
      <Sidebar />
      <div className="sub-content">
        <Navbar />
        <div>
          <PageHeader
            title="Specialties"
            subTitle="Modify Specialties"
            icon={<PeopleAltOutlinedIcon fontSize="large" />}
          />
        </div>
        <div className="addSpecialities">
          <SpecialitesForm />
        </div>
        <div className="dataTable1">
          <SpecialtiesDatatable />
        </div>
      </div>
    </div>
  );
}

export default Specialties;
