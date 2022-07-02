import './specialties.scss'
import Navbar from "../../../components/Admin/Navbar/Navbar";
import PageHeader from "../../../components/Admin/PageHeader";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

function Specialties() {
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
    </div>
  </div>
);
}

export default Specialties