import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import {
  useParams, Link
} from "react-router-dom";
import axios from "axios";

import BuyCourses from "./BuyCourses/BuyCourses"
import Detail from "./Detail/Detail"

const CoursesDetail = () => {
  
    const {
      userid
    } = useContext(AppContext); 

    let { CategoryId } = useParams();

    const [categories, setCategories] = useState(0);
    const [products, setProducts] = useState([]);
    const id = CategoryId.split("-",1);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/courses/category/${id}/${userid}`)
        .then((response) => {
          setCategories(response.data[0]);
          setProducts(response.data);
        })
    },[]);
    return (
      <div className="page-content bg-white">
        
        <div className="content-block">
          <div className="section-area section-sp1">
            <div className="container">
              <div className="breadcrumb-row">
                <div className="container">
                  <ul className="list-inline">
                    <li><Link to ="/"> Trang Chủ </Link></li>
                    <li><Link to ="/courses"> { categories.CategoryGroupName } </Link> </li>
                    <li> { categories.CategoryName }</li>
                  </ul>
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
                  <Detail key ={id}  id = {id} categories={categories} products={products} />  
              </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CoursesDetail
