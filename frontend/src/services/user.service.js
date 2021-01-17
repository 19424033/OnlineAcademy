import axios from "axios";
import authHeader from "./auth-header";

export default function UserService(id,accessToken) {
  const API_URL = "http://localhost:4000/api/users";

  // const getPublicContent = () => {
  //   return axios.get(API_URL + "all");
  // };
  const getUserBoard = () => {
    return axios.get(`${API_URL}/${id}`, { headers: authHeader(accessToken) });
  };
  // const getModeratorBoard = () => {
  //   return axios.get(API_URL + "mod", { headers: authHeader() });
  // };
  // const getAdminBoard = () => {
  //   return axios.get(API_URL + "admin", { headers: authHeader() });
  // };
  return {
    // getPublicContent,
    getUserBoard,
    // getModeratorBoard,
    // getAdminBoard,
  };
}
