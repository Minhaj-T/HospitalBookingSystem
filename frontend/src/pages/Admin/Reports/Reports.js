import Chart2 from '../../../components/Admin/Chart 2/Chart2'
import Featured2 from '../../../components/Admin/Featured 2/Featured2'
import PageHeader from '../../../components/Admin/PageHeader'
import '../admindashboard/dashboard.scss'
import AssessmentIcon from '@mui/icons-material/Assessment';
import Table2 from '../../../components/Admin/Table2/Table2';

function Reports() {
  return (
    <>
     <PageHeader
        title="Sales Details"
        subTitle="See the Sales Details"
        icon={<AssessmentIcon fontSize="large" />}
      />
    <div className="charts">
        <Featured2/>
        <Chart2/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table2/>
      </div>

    </>
  )
}

export default Reports