import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from 'antd';
import { useEffect } from "react";

const CoursesList = (props) => { 

    const numEachPage = 6;
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(numEachPage);

    useEffect(()  => {
        setMinValue(0);
        setMaxValue(numEachPage);
    },[props.categories])

    const handleChange = (value) => {
        setMinValue((value - 1) * numEachPage);
        setMaxValue(value * numEachPage);
    };

    return (
                
        <div className="col-lg-9 col-md-8 col-sm-12">
            {
                props.categories.length == 0 
                ?
                    <div style={{ fontSize:'50px', textAlign:'center'}}>
                        <i className="fa fa-search" />
                        <h1> Không tìm thấy khóa học nào </h1>
                    </div>
                :
                   <div className="row">
                    {
                        props.categories.slice(minValue, maxValue).map( (val) => 
                            <div key={ val.CategoryId } className="col-md-6 col-lg-4 col-sm-6 m-b30">
                            <div className="cours-bx">
                                <div className="action-box">
                                    <Link to = {`/courses/${val.CategoryGroupId}-${val.CategoryGroupName}/${val.CategoryId}-${val.CategoryName}`} >
                                        <img src = {val.Image}  />
                                    </Link>
                                </div>
                                <div className="info-bx text-center" style={{height:'125px'}}>
                                    <h5><Link to = {`/courses/${val.CategoryGroupId}-${val.CategoryGroupName}/${val.CategoryId}-${val.CategoryName}`} >{ val.CategoryName }</Link></h5>
                                    <span> { val.CategoryGroupName } </span>
                                    <span style={{color:'red', fontWeight:'bold', bottom: 0, position: 'absolute', right:5}} > <i className="fa fa-user" /> : { val.DislayName } </span>
                                </div>
                                <div className="cours-more-info">
                                    <div className="review">
                                        <div>Like: { val.QuanLike } <i className="fa fa-heart"/> </div> 
                                        <div>Rate: { val.Rate }/5 <i className="fa fa-star"  style={{color:'#FFFF33'}} />  </div> 
                                    </div>
                                    <div className="price">
                                    { val.value != null
                                        ? <>
                                            <del> { parseInt(val.Price).toLocaleString() } đ </del>
                                            <h5>{ (val.Price * (100-val.value) /100).toLocaleString()  } đ </h5> 
                                        </>
                                        : <> 
                                            <br></br><h5>{ parseInt(val.Price).toLocaleString() } đ </h5>  </> 
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    {
                        props.categories.length == 0
                        ?
                            <></>
                        :
                        <div className="col-lg-12 m-b20"  >
                            <div className="pagination-bx rounded-sm gray clearfix" >
                            <Pagination  defaultCurrent={ 1 } 
                                                    style={{ textAlign:'center'}}
                                                    defaultPageSize={numEachPage}
                                                    onChange={handleChange}  total={ props.categories.length } />
                            </div>
                        </div> 
                    }  
                    </div>
                }
        </div>
    )
}


export default CoursesList
