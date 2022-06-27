import "./list.scss"
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import Navbar from "../../../components/Admin/Navbar/Navbar"
import Datatable from "../../../components/Admin/Datatable/Datatable"


const List = () => {
  return (

    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="container pt-4">
        <Datatable/>
        </div>
      </div>
    </div>
  )
}

export default List