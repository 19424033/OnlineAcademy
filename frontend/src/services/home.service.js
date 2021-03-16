import axios from "axios";
import Serivces from "./serivces"

export default function HomeServices() {

  const API_URL = `${Serivces().API_SERVERPORT}/api/home`;

  const showCategoryOrderBy = (orderByType, limit) => {
    return axios.get(`${API_URL}/showCategoryOrderBy/${orderByType}/${limit}`);
  };

  return {
    showCategoryOrderBy,
  };
}
