import axios from "axios";
import authHeader from "./auth-header";
import { localparseJson } from "../utils/utils";
import Serivces from "./serivces"

export default function CoursesTolenServices() {       
    const tokenString = localStorage.getItem("AcademyOnline_Token");
    const accessToken = localparseJson(tokenString).accessToken; 
    const API_URL = `${Serivces().API_SERVERPORT}/api/coursesToken`;

    const addCmt = (values) => {
        return axios.post(`${API_URL}/addCmt`, values,  { headers: authHeader(accessToken) });
    };
  
    return {
        addCmt,
    };
}

