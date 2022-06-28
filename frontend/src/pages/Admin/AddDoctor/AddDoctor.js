import Navbar from '../../../components/Admin/Navbar/Navbar';
import PageHeader from '../../../components/Admin/PageHeader';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import './addDoctor.scss'
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import { Paper } from '@mui/material';
import DoctorForm from '../../../components/Admin/DoctorForm/DoctorForm';


function AddDoctor() {

  return (
    <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Navbar />
      <div >
          <PageHeader
          title="Doctor Details"
          subTitle="Add and edit Doctor Details"
          icon={<VaccinesOutlinedIcon fontSize="large" />}
          />
        </div>
        <div className='AddDoctor'>
          <DoctorForm/>
        </div>
        <Paper className='container'>
          
        </Paper>
    </div>  
    </div>
  );
};

export default AddDoctor