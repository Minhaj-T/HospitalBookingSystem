import * as api from "../../../api/admin";

// admin login
export const login = async (adminData) => {
  const { data } = await api.loginAdmin(adminData);

  if (data) {
    localStorage.setItem("admininfo", JSON.stringify(data));
  }
  return data;
};
const adminauthService = {
  login,
};
export default adminauthService;
