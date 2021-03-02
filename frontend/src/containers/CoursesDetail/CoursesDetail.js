import React, { useState, useEffect } from "react";
import {
  useParams
} from "react-router-dom";
import axios from "axios";

import BuyCourses from "./BuyCourses/BuyCourses"
import Detail from "./Detail/Detail"

const CoursesDetail = () => {
    let { CategoryId } = useParams();

    const [categories, setCategories] = useState(0);
    const id = CategoryId.split("-",1);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/courses/${id}`)
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
                  <BuyCourses categories={categories} />  
                  <Detail id = {id} categories={categories} />  
              </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CoursesDetail
