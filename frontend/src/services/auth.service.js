import axios from "axios";

export default function AuthService() {
  const API_URL = "http://localhost:4000/api";

  const register = (velues) => {
    return axios.post(`${API_URL}/register`,velues);
  };

  const login = (values) => {
    return axios.post(`${API_URL}/auth`, values);
  };

  const logout = () => {
    const tokenString = localStorage.getItem("AcademyOnline_Token");
    if (tokenString) {
      localStorage.removeItem("AcademyOnline_Token");
    }
  };
  const updateOTP = (id) => {
    return axios.put(`${API_URL}/register/${id}`);
  };
  const  checkOTPDB = async (id,otp) => {
    return await axios.get(`${API_URL}/register/${id}/${otp}`);
  };
  return {
    register,
    login,
    logout,
    updateOTP,
    checkOTPDB
  };
}
