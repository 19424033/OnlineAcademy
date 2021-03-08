import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import {
  useParams
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
    const id = CategoryId.split("-",1);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/courses/category/${id}/${userid}`)
        .then((response) => {
            setCategories(response.data);
        })
    },[]);

    return (
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-area section-sp1">
            <div className="container">
              <div className="row d-flex flex-row-reverse">
                  {
                    categories.IsRes 
                    ? 
                      <></>
                    :
                      <BuyCourses categories={categories} /> 
                  }   
                  <Detail key ={id}  id = {id} categories={categories} />  
              </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CoursesDetail
