import axios from "axios";
import authHeader from "./auth-header";

export default function UserService() {
  const API_URL = "http://localhost:4000/api/users";

  const getUserByID = (id,accessToken) => {
    return axios.get(`${API_URL}/${id}`, { headers: authHeader(accessToken) });
  };

  const getAllUser = (accessToken) => {
    return axios.get(`${API_URL}/`,{ headers: authHeader(accessToken) });
  };
  // const getModeratorBoard = () => {
  //   return axios.get(API_URL + "mod", { headers: authHeader() });
  // };
  // const getAdminBoard = () => {
  //   return axios.get(API_URL + "admin", { headers: authHeader() });
  // };
  return {
    // getPublicContent,
    getUserByID,
    getAllUser
    // getModeratorBoard,
    // getAdminBoard,
  };
}
