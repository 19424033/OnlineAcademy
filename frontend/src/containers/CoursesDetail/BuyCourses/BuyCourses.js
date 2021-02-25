import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import axios from "axios";

const BuyCourses = () => {
    return(
    <div className="col-lg-3 col-md-4 col-sm-12 m-b30">
    <div className="course-detail-bx">
      <div className="course-price">
        <del>$190</del>
        <h4 className="price">$120</h4>
      </div>	
      <div className="course-buy-now text-center">
        <a href="#" className="btn radius-xl text-uppercase">Buy Now This Courses</a>
      </div>
      <div className="teacher-bx">
        <div className="teacher-info">
          <div className="teacher-thumb">
            <img src="assets/images/testimonials/pic1.jpg" alt />
          </div>
          <div className="teacher-name">
            <h5>Hinata Hyuga</h5>
            <span>Science Teacher</span>
          </div>
        </div>
      </div>
      <div className="cours-more-info">
        <div className="review">
          <span>3 Review</span>
          <ul className="cours-star">
            <li className="active"><i className="fa fa-star" /></li>
            <li className="active"><i className="fa fa-star" /></li>
            <li className="active"><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
          </ul>
        </div>
        <div className="price categories">
          <span>Categories</span>
          <h5 className="text-primary">Frontend</h5>
        </div>
      </div>
      <div className="course-info-list scroll-page">
        <ul className="navbar">
          <li><a className="nav-link" href="#overview"><i className="ti-zip" />Overview</a></li>
          <li><a className="nav-link" href="#curriculum"><i className="ti-bookmark-alt" />Curriculum</a></li>
          <li><a className="nav-link" href="#instructor"><i className="ti-user" />Instructor</a></li>
          <li><a className="nav-link" href="#reviews"><i className="ti-comments" />Reviews</a></li>
        </ul>
      </div>
    </div>
  </div>
    )
}

export default BuyCourses
