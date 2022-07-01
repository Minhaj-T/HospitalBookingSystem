import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import { Link } from 'react-router-dom';
import BookOnlineOutlined from '@mui/icons-material/BookOnlineOutlined';
function Sidebar() {
  return (
    <div className='sidebar1'>
        <div className="top1"><span className="logo1">Carewell</span></div>
        <hr></hr>
        <div className="center">
            <ul>
                <li>
                <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <BookOnlineOutlined className="icon"/>
                    <span>Appointments</span>
                </li>
                <li>
                    <LocalHospitalIcon className="icon"/>
                    <span>Specialties</span>
                </li>
                <p className="title">MANAGEMENT</p>
                <Link to="users" style={{ textDecoration: "none" }}>
                <li>
                    <PersonIcon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to='add-doctor' style={{ textDecoration: 'none' }}> 
                <li>
                    <VaccinesIcon className="icon"/>
                    <span>Doctors</span>
                </li>
                </Link>
                <p className="title">STATICS</p>
                <li>
                    <OutlinedFlagIcon className="icon"/>
                    <span>Reports</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar