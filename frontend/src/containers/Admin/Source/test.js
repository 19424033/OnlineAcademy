import { List, Avatar, Space, Spin } from 'antd';
import React from "react";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Player, PosterImage } from "video-react";
import { formatMoney } from '../../../utils/utils'
const Test = ({ datasource }) => {
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={datasource}
            renderItem={item => (
                // <img src={item.resources[item.resources.length - 1].url} alt="" />
                // <TestChildren item={item} />
                // <Player
                // fluid={false} width={700}
                //     // poster="http://res.cloudinary.com/dzyfkhpce/video/upload/v1613474027/Illustrator_CC_2018_Fundamentals_For_Beginners/01._Introduction_ixunyw.jpg"
                //     src={item.url}
                // />
                <div className="card-courses-list admin-courses">
                    <div className="card-courses-media">
                        <img src={item.Picture} alt="" />
                    </div>
                    <div className="card-courses-full-dec">
                        <div className="card-courses-title">
                            <h4>{item.CategoryName}</h4>
                        </div>
                        <div className="card-courses-list-bx">
                            <ul className="card-courses-view">
                                <li className="card-courses-user">
                                    <div className="card-courses-user-info">
                                        <h5>Teacher</h5>
                                        <h4>........</h4>
                                    </div>
                                </li>
                                <li className="card-courses-categories">
                                    <h5>Categories</h5>
                                    <h4>{item.CategoryGroupname}</h4>
                                </li>
                                <li className="card-courses-review">
                                    <h5>3 Review</h5>
                                    <ul className="cours-star">
                                        <li className="active"><i className="fa fa-star"></i></li>
                                        <li className="active"><i className="fa fa-star"></i></li>
                                        <li className="active"><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                </li>
                                <li className="card-courses-price">
                                    <del>{formatMoney(item.Price)}</del>
                                    <h5 className="text-primary">{formatMoney(item.Price)}</h5>
                                </li>
                            </ul>
                        </div>
                        <div className="row card-courses-dec">
                            <div className="col-md-12">
                                <h6 className="m-b10">Course Description</h6>
                                <p>{item.Note}</p>
                                {/* <p>Lorem ipsum dolor sit amet, est ei idque voluptua copiosae, pro detracto disputando reformidans at, ex vel suas eripuit. Vel alii zril maiorum ex, mea id sale eirmod epicurei. Sit te possit senserit, eam alia veritus maluisset ei, id cibo vocent ocurreret per. Te qui doming doctus referrentur, usu debet tamquam et. Sea ut nullam aperiam, mei cu tollit salutatus delicatissimi. </p> */}
                            </div>
                            {/* <div className="col-md-12">
                                <a href="#" className="btn green radius-xl outline">Approve</a>
                                <a href="#" className="btn red outline radius-xl ">Cancel</a>
                            </div> */}
                        </div>

                    </div>
                </div>

            )}
        />
    );
};

export default Test;