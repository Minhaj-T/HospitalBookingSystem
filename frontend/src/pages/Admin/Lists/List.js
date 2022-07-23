import './list.scss';
import Datatable from '../../../components/Admin/Datatable/Datatable';
import PageHeader from '../../../components/Admin/PageHeader';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { reset } from '../../../features/admin/auth/adminauthSlice';
import Spinner from '../../../components/User/Spinner/Spinner';

const List = () => {
  const dispatch = useDispatch();
  const { users, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.adminAuth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message || 'Not Found');
      return;
    }
    dispatch(reset());
  }, [users, isError, isSuccess, message, isLoading, dispatch]);

  // Loading page
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <PageHeader
        title="User Details"
        subTitle="Modify User Details"
        icon={<PeopleAltOutlinedIcon fontSize="large" />}
      />
      <Datatable />
    </div>
  );
};

export default List;
