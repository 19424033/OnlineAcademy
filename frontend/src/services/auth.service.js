import axios from "axios";

export default function AuthService() {
  const API_auth = "http://localhost:4000/api/auth";

  const register = (velues) => {
    return axios.post(`${API_auth}/register`, velues);
  };

  const login = (values) => {
    return axios.post(`${API_auth}/log-in`, values);
  };

  const logout = () => {
    const tokenString = localStorage.getItem("AcademyOnline_Token");
    if (tokenString) {
      localStorage.removeItem("AcademyOnline_Token");
    }
  };
  const updateOTP = (id) => {
    return axios.put(`${API_auth}/register/${id}`);
  };
  const checkOTPDB = async (id, otp) => {
    return await axios.get(`${API_auth}/register/${id}/${otp}`);
  };
  return {
    register,
    login,
    logout,
    updateOTP,
    checkOTPDB,
  };
}
