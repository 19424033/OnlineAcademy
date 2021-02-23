import { List, Avatar, Space } from 'antd';
import React from "react";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
const Test = () => {
    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            href: 'https://ant.design',
            title: `ant design part ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
    }

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
            dataSource={listData}
            renderItem={item => (
                <div class="card-courses-list admin-courses">
                    <div class="card-courses-media">
                        <img src="assets/images/courses/pic1.jpg" alt="" />
                    </div>
                    <div class="card-courses-full-dec">
                        <div class="card-courses-title">
                            <h4>{item.title}</h4>
                        </div>
                        <div class="card-courses-list-bx">
                            <ul class="card-courses-view">
                                <li class="card-courses-user">
                                    <div class="card-courses-user-pic">
                                        <img src="assets/images/testimonials/pic3.jpg" alt="" />
                                    </div>
                                    <div class="card-courses-user-info">
                                        <h5>Teacher</h5>
                                        <h4>Keny White</h4>
                                    </div>
                                </li>
                                <li class="card-courses-categories">
                                    <h5>3 Categories</h5>
                                    <h4>Backend</h4>
                                </li>
                                <li class="card-courses-review">
                                    <h5>3 Review</h5>
                                    <ul class="cours-star">
                                        <li class="active"><i class="fa fa-star"></i></li>
                                        <li class="active"><i class="fa fa-star"></i></li>
                                        <li class="active"><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </li>
                                <li class="card-courses-stats">
                                    <a href="#" class="btn button-sm green radius-xl">Pending</a>
                                </li>
                                <li class="card-courses-price">
                                    <del>$190</del>
                                    <h5 class="text-primary">$120</h5>
                                </li>
                            </ul>
                        </div>
                        <div class="row card-courses-dec">
                            <div class="col-md-12">
                                <h6 class="m-b10">Course Description</h6>
                                <p>Lorem ipsum dolor sit amet, est ei idque voluptua copiosae, pro detracto disputando reformidans at, ex vel suas eripuit. Vel alii zril maiorum ex, mea id sale eirmod epicurei. Sit te possit senserit, eam alia veritus maluisset ei, id cibo vocent ocurreret per. Te qui doming doctus referrentur, usu debet tamquam et. Sea ut nullam aperiam, mei cu tollit salutatus delicatissimi. </p>
                            </div>
                            <div class="col-md-12">
                                <a href="#" class="btn green radius-xl outline">Approve</a>
                                <a href="#" class="btn red outline radius-xl ">Cancel</a>
                            </div>
                        </div>

                    </div>
                </div>

            )}
        />
    );
};

export default Test;