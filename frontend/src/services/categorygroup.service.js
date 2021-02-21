import axios from "axios";
import authHeader from "./auth-header";
import { localparseJson } from "../utils/utils";

export default function UserService() {
  const tokenString = localStorage.getItem("AcademyOnline_Token");
  const accessToken = localparseJson(tokenString).accessToken;

  const API_URL = "http://localhost:4000/api/categorygroup";


  const getAllCategorygroup = (id) => {
    return axios.get(`${API_URL}`, { headers: authHeader(accessToken) });
  };
  const addCategorygroup = (values) => {
    return axios.post(`${API_URL}`,values, { headers: authHeader(accessToken) });
  };
  const deleteSingleCatagoryGroup = (id) => {
    return axios.delete(`${API_URL}/${id}`, { headers: authHeader(accessToken) });
  };
  return {
    getAllCategorygroup,
    addCategorygroup,
    deleteSingleCatagoryGroup
  };
}
