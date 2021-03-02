import React, { useState, useEffect } from "react";
import {
    useParams,
    Link
} from "react-router-dom";
import axios from "axios";
import { Rate } from 'antd';
import ReactHtmlParser from 'react-html-parser';


const Detail = (props) => {
        
    let { CategoryId } = useParams();

    const [rate, setRate] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/courses/ratedetail/${ props.id }`)
        .then((response) => {
            setRate(response.data);
        })
    },[]);

    const quanRate = [rate.Rate1, rate.Rate2, rate.Rate3, rate.Rate4, rate.Rate5];

    return (
        <div className="col-lg-9 col-md-8 col-sm-12">
            {/* Image, Note, CategoryName */}

            <div className="courses-post">
                <div className="ttr-post-media media-effect">
                    <a href="#"><img src= { props.categories.Image } /></a>
                </div>
                <div className="ttr-post-info">
                    <div className="ttr-post-title ">
                        <h2 className="post-title"> { props.categories.CategoryName } </h2>
                    </div>
                    <div className="ttr-post-text">
                        <p>{ props.categories.Note }</p>
                    </div>
                </div>
            </div>

            {/* Chi tiết khóa học */}

            <div className="courese-overview m-b20" > 
                <h4>Lợi ích từ khóa học</h4> 
                { ReactHtmlParser( props.categories.Remark) }             
                {/* <p> { props.categories.Remark } </p> */}
            </div>

            {/* Nội dung bài học */}

            <div className="m-b20">
                <h4>Bài học</h4>
            </div>

            {/* Thông tin giảng viên */}

            <div className="m-b30">
                <h4>Thông tin giảng viên</h4>
                <div className="instructor-bx">
                    <div className="instructor-author"  >
                        <img src={`data:image/jpg;base64,${props.categories.Ava}`} />
                    </div>
                    <div className="instructor-info">  
                        <h3 className = "m-t30"> { props.categories.DislayName } </h3>
                        { ReactHtmlParser( props.categories.TeacherNote) }
                    </div>
                </div>
            </div>
            {/* Đánh giá */}

            <div className="">    
                <h4>Đánh giá</h4>
                <div className="review-bx">
                    <div className="all-review">
                        <h2 className="rating-type"> 
                            { props.categories.Rate }/5 <i className="fa fa-star" style={{color:'#FFFF33'}} />
                        </h2>   
                        <span>{ props.categories.TotalRate } Đánh giá </span>          
                    </div>
                    <div className="review-bar">
                    {
                        quanRate.map( (i , index) => 
                            <div className="bar-bx">
                                <div className="side">
                                    <div>{ index + 1} star</div>
                                </div>
                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-5" style={{width: props.categories.TotalRate == 0 ? 0 : ( i * 100/ props.categories.TotalRate) + '%'}} />
                                    </div>
                                </div>
                                <div className="side right">
                                    <div> { i }</div>
                                </div>
                            </div>
                        )
                    }
                    </div>
                </div>
                
            </div>
        </div>
    )
}
    

export default Detail
