import * as api from "../../../api/admin";
// admin get the all users
export const fetchallUsers = async () => {
    const { data } = await api.fetchUsers();
    console.log("sever fetched data",data);
    return data;
  };
  const getallUsersServise = {
    fetchallUsers,
  };
  export default getallUsersServise; 