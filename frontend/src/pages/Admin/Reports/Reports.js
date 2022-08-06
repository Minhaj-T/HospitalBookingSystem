import Chart2 from '../../../components/Admin/Chart 2/Chart2'
import Featured2 from '../../../components/Admin/Featured 2/Featured2'
import PageHeader from '../../../components/Admin/PageHeader'
import '../admindashboard/dashboard.scss'
import AssessmentIcon from '@mui/icons-material/Assessment';
import Table2 from '../../../components/Admin/Table2/Table2';
import Spinner from '../../../components/User/Spinner/Spinner';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { notification } from '../../../utilities/notification';
import { errorHandler } from '../../../utilities/errorMessege';
import * as api from '../../../api/admin';

function Reports() {
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
    !Fulldata.done && fetchAllDatas();
  }, []);
  const fetchAllDatas = async () => {
    setFulldata((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await api.specializationsRevenue(config);
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

  console.log('specializationsRevenue.......', Fulldata);
  // Loading page
  if (Fulldata.loading) {
    return <Spinner />;
  }

  return (
    <>
     <PageHeader
        title="Sales Details"
        subTitle="See the Sales Details"
        icon={<AssessmentIcon fontSize="large" />}
      />
    <div className="charts">
        <Featured2/>
        <Chart2  data={Fulldata?.data}/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table2/>
      </div>

    </>
  )
}

export default Reports