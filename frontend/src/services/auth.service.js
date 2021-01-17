import axios from "axios";

export default function AuthService() {
  const API_URL = "http://localhost:4000/api";

  // const axiosInstance = axios.create({
  //   baseURL: "http://localhost:4000/api",
  //   timeout: 5000,
  //   // headers: { 'X-Custom-Header': 'foobar' }
  // });

  // const register = (username, email, password) => {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password,
  //   });
  // };

  const login = (values) => {
    // try {
    //   const res =  axiosInstance.post("/auth", values);
    //   const { authenticated } = res.data;

    //   if (authenticated) {
    //     localStorage.AcademyOnline_Token = JSON.stringify(res.data);
    //     return true;
    //   } else {
    //     return false;
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    return axios.post(`${API_URL}/auth`, values);
  };

  const logout = () => {
    const tokenString = localStorage.getItem("AcademyOnline_Token");
    if (tokenString) {
      localStorage.removeItem("AcademyOnline_Token");
    }
  };

  // const getCurrentUser = async (id, accessToken) => {
  //   console.log(id, accessToken);
  //   try {
  //     const res = await axiosInstance.get("/users/" + id, {
  //       headers: {
  //         "x-access-token": accessToken,
  //       },
  //     });
  //     // console.log(res.data);
  //     // const { authenticated } = res.data;

  //     //   if (authenticated) {
  //     //     localStorage.AcademyOnline_Token = JSON.stringify(res.data);
  //     //     return true;
  //     //   } else {
  //     //     return false;
  //     //   }
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return {
    // register,
    login,
    logout,
    // getCurrentUser,
    // axiosInstance,
  };
}
