import "./list.scss"
import Sidebar from "../../../components/Admin/Sidebar/Sidebar"
import Navbar from "../../../components/Admin/Navbar/Navbar"
import Datatable from "../../../components/Admin/Datatable/Datatable"
import PageHeader from "../../../components/Admin/PageHeader"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchUsers} from '../../../features/admin/Get-all-users/getallUsersSlice'

const List = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  
  return (

    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div >
          <PageHeader
          title="User Details"
          subTitle="Modify User Details"
          icon={<PeopleAltOutlinedIcon fontSize="large" />}
          />
        <Datatable />
        </div>
      </div>
    </div>
  )
}

export default List