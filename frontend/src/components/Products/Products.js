import * as React from "react";
import { Rate } from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment';


const Products = (props) => {
  return (
    <div className="item" style={{margin:'0 5px'}}>
      <div className="cours-bx">
        <Link to = {"/courses/" +props.products.Categoryid} >
          <div className="action-box"  style={{ height:'200px', backgroundSize:'cover', backgroundImage: props.products.Picture }} />
        </Link>
        <div className="info-bx text-center" style={{height:'100px'}}>
            <h5><Link to = {"/courses/" +props.products.Categoryid} >{ props.products.Categoryname }</Link></h5>
            <span> { props.products.CategorGroupname } </span>
        </div>
        <div className="info-bx">
          <ul className="media-post">
            <li><i className="fa fa-calendar" />: {moment(props.products.Create_at).format('DD/MM/yyyy') }</li>
            <li><i className="fa fa-user" />: {props.products.Dislayname}</li>
          </ul>

        </div>
        
        <div className="cours-more-info" style={{background:'white'}}>
            <div style={{width:'50%', padding:'0px 5px'}}>
            <span>Đăng Ký: { props.products.Quanres } <i className="fa fa-user" /> </span> <br></br>
              <Rate allowHalf disabled defaultValue={ props.products.Rate} /> { props.products.Rate }/5
            </div>
            <div className="price">
            { props.products.value != null
            ? <>
                <del> { parseInt(props.products.Price).toLocaleString() } đ </del>
                <h5>{ (props.products.Price * (100-props.products.value) /100).toLocaleString()  } đ </h5> 
              </>
            : <> 
                <br></br><h5>{ parseInt(props.products.Price).toLocaleString() } đ </h5>  </> }
            </div>
        </div>
      </div>
  </div>
    );
};

export default Products;