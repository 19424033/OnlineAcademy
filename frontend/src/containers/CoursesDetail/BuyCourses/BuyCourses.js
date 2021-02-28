import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import axios from "axios";

const BuyCourses = (props) => {

    return(
    <div className="col-lg-3 col-md-4 col-sm-12 m-b30" >
      <div className="course-detail-bx" >
        <div className="course-price">
          { props.categories.value != null
            ? <>
                <del> { parseInt(props.categories.Price).toLocaleString() } đ </del>
                <h5>{ (props.categories.Price * (100-props.categories.value) /100).toLocaleString()  } đ </h5> 
              </>
            : <> 
                <br></br><h5>{ parseInt(props.categories.Price).toLocaleString() } đ </h5> 
              </> 
          }
        </div>	
        <div className="course-buy-now text-center">
          <a className="btn radius-xl text-uppercase">Đăng Ký Khóa Học</a>
        </div>
        <div className="teacher-bx">
          <div className="teacher-info">
            <div className="teacher-thumb">
              <img src={`data:image/jpg;base64,${props.categories.Ava}`} />
            </div>
            <div className="teacher-name">
              <h5>{ props.categories.DislayName }</h5>
            </div>
          </div>
        </div>
        <div className="cours-more-info">
          <div style={{width:'50%' , textAlign:'center'}}>
            <h4> { props.categories.Rate }/5 <i className="fa fa-star" style={{color:'#FFFF33'}} /></h4>  
            <span>{ props.categories.TotalRate } Đánh giá </span>
          </div>
          <div style={{width:'50%' , textAlign:'center'}}>
            <h4> { props.categories.QuanRes } <i className="fa fa-user" /></h4>  
            <span>Đã đăng ký</span>
          </div>
      </div>
      </div>
    </div>
    )
}

export default BuyCourses
