import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './navbar.scss';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/admin/auth/adminauthSlice';
import { Link } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.adminAuth);
  return (
    <div className="navbar1">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <Link
              to={''}
              onClick={() => {
                dispatch(logout());
              }}
            >
              <LogoutIcon className="icon" /> logout
            </Link>
          </div>
          <div className="item">
            <img src={admin['profile_img']} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
