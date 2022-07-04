import Navbar from '../../components/Admin/Navbar/Navbar';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import './layout.scss';

function Layout({children}) {
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="contents">
          {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
