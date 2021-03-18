import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import {
  useParams, Link
} from "react-router-dom";
import CoursesServices from "../../services/courses.service";
import { Breadcrumb } from 'antd';
import BuyCourses from "./BuyCourses/BuyCourses"
import Detail from "./Detail/Detail"

const CoursesDetail = () => {

    let { CategoryId } = useParams();
    let {
      userid
    } = useContext(AppContext); 
    const [categories, setCategories] = useState('');
    const [products, setProducts] = useState([]);
    const id = CategoryId.split("-",1);


    useEffect(() => {
      CoursesServices().CoursesDetail(id, localStorage.length > 0 ? userid : 0)
        .then((response) => {
          setCategories(response.data[0]);
          setProducts(response.data);
        }) 
    },[userid]);
    return (
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-area section-sp1">
            <div className="container">
              <div className="breadcrumb-row">
                <div className="container">
                  <div className="m-b20">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to="/">Trang Chủ</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                              <Link to= {`/courses/${categories.CategoryGroupId}-${categories.CategoryGroupName}` }> { categories.CategoryGroupName } </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                              { categories.CategoryName } 
                            </Breadcrumb.Item>
                        </Breadcrumb>   
                    </div>
                </div>
              </div>
              <div className="row d-flex flex-row-reverse">
                  {
                    categories.IsRes 
                    ? 
                      <></>
                    :
                      <BuyCourses categories={categories} /> 
                  }   
                  <Detail  id = { id } categories={categories} products={products} />
              </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CoursesDetail
