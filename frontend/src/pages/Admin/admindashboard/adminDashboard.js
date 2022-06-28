import React from 'react'
import "./dashboard.scss";
import Navbar from '../../../components/Admin/Navbar/Navbar'
import Sidebar from '../../../components/Admin/Sidebar/Sidebar'
import Widgets from '../../../components/Admin/Widgets/Widgets'


function adminDashboard() {
  return (
    <>
    <div className='home'>
    <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
          </div>
          
        </div>
    </div>
    </>
  )
}

export default adminDashboard