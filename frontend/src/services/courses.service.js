import axios from "axios";
import Serivces from "./serivces"

export default function CoursesServices() {

  const API_URL = `${Serivces().API_SERVERPORT}/api/courses`;

  const CategoryGroup = () => {
    return axios.get(`${API_URL}/categorygroup`);
  };

  const CoursesDetail = ( CategoryId, userid  ) => {
    return axios.get(`${API_URL}/category/${CategoryId}/${userid}`);
  };

  const getCategoryAllGroup = () => {
    return axios.get(`${API_URL}/getCategoryAllGroup/`);
  };

  const getCategoryByGroupId = ( id ) => {
    return axios.get(`${API_URL}/getCategoryByGroupId/${id}`);
  };

  const updateViewVideo = (ProductId, Viewer) => {
    return axios.put(`${API_URL}/products/updateViewer/${ProductId}/${Viewer}`);
  }

  const getRateDetailByCategoryId = (CategoryId) => {
    return axios.get(`${API_URL}/getRateDetailByCategoryId/${CategoryId}`);
  }

  return {
    CategoryGroup,
    getCategoryAllGroup,
    getCategoryByGroupId,
    CoursesDetail,
    updateViewVideo,
    getRateDetailByCategoryId
  };
}
