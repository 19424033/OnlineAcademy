import * as React from "react";
import { Rate } from 'antd';
import { Link } from "react-router-dom";


const Products = (props) => {
  return (
    <div className="item">
      <div className="cours-bx">
        <div className="action-box">
            <img src="assets/images/courses/pic1.jpg" alt />
            <Link to = {"/courses/" +props.products.Categoryname} className="btn">Read More</Link>
        </div>
        <div className="info-bx">
          <ul className="media-post">
            <li><i className="fa fa-calendar" />{" "} Jan 02 2019</li>
            <li><i className="fa fa-user" />{" "}By William</li>
        </ul>
        </div>
        <div className="info-bx text-center">
            <h5><Link to = {"/courses/" +props.products.Categoryname} >{ props.products.Categoryname }</Link></h5>
            <span> { props.products.CategoryGroup } </span>
        </div>
        <div className="cours-more-info">
            <div className="review">
              <span>Yêu thích</span><br></br>
              <span>{ props.products.QuanLike } <i className="fa fa-heart" /> </span>
            </div>
            <div className="price">
            { props.products.Discount != 0
            ? <>
                <del> { props.products.Price.toLocaleString()} đ </del>
                <h5>{ (props.products.Price * (100 - props.products.Discount) / 100).toLocaleString()  } đ </h5> 
              </>
            : <> 
                <br></br><h5>{ props.products.Price.toLocaleString() } đ </h5>  </> }
            </div>
        </div>
      </div>
  </div>
    );
};

export default Products;