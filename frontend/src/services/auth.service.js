import axios from "axios";

export default function AuthService() {
  const API_auth = "http://localhost:4000/api/auth";

  const register = (velues) => {
    return axios.post(`${API_auth}/register`, velues);
  };

  const login = (values) => {
    return axios.post(`${API_auth}/log-in`, values);
  };
  const checkEmail = (values) => {
    return axios.post(`${API_auth}/check-email`, values);
  };
  const checkOTPEmail = (values) => {
    return axios.post(`${API_auth}/check-otp-email`, values);
  };
  const resetPassword = (values) => {
    return axios.post(`${API_auth}/forgot-password`, values);
  };
  const changePassword = (values) => {
    return axios.post(`${API_auth}/change-password`, values);
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
    checkEmail,
    resetPassword,
    checkOTPEmail,
    changePassword,
  };
}
