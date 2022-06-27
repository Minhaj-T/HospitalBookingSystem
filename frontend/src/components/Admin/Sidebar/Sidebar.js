import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='sidebar1'>
        <div className="top1"><span className="logo1">Carewell</span></div>
        <hr></hr>
        <div className="center">
            <ul>
            <p className="title">MAIN</p>
                <li>
                <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="users" style={{ textDecoration: "none" }}>aa</Link>
                <li>
                    <PersonIcon className="icon"/>
                    <span>User</span>
                </li>
                <li>
                    <LocalHospitalIcon className="icon"/>
                    <span>Specialites</span>
                </li>
                <li>
                    <VaccinesIcon className="icon"/>
                    <span>Doctors</span>
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