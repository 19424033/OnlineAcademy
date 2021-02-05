import * as React from "react";
import { Link } from "react-router-dom";


const ProductsCustomize = () => {
  return (
    <div className="page-content bg-white">
    <div className="content-block">
      <div className="section-area section-sp2 popular-courses-bx">
        <div className="container">
          <div className="row">
            <div className="col-md-12 heading-bx left">
              <h2 className="title-head">Popular <span>Courses</span></h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
            </div>
          </div>
          <div className="row">
            <div className="courses-carousel owl-carousel owl-btn-1 col-12 p-lr0">
              <div className="item">
                <div className="cours-bx">
                  <div className="action-box">
                    <img src="assets/images/courses/pic1.jpg" alt />
                    <a href="#" className="btn">Read More</a>
                  </div>
                  <div className="info-bx text-center">
                    <h5><a href="#">Introduction EduChamp – LMS plugin</a></h5>
                    <span>Programming</span>
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
                    <div className="price">
                      <del>$190</del>
                      <h5>$120</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="cours-bx">
                  <div className="action-box">
                    <img src="assets/images/courses/pic2.jpg" alt />
                    <a href="#" className="btn">Read More</a>
                  </div>
                  <div className="info-bx text-center">
                    <h5><a href="#">Introduction EduChamp – LMS plugin</a></h5>
                    <span>Programming</span>
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
                    <div className="price">
                      <del>$190</del>
                      <h5>$120</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="cours-bx">
                  <div className="action-box">
                    <img src="assets/images/courses/pic3.jpg" alt />
                    <a href="#" className="btn">Read More</a>
                  </div>
                  <div className="info-bx text-center">
                    <h5><a href="#">Introduction EduChamp – LMS plugin</a></h5>
                    <span>Programming</span>
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
                    <div className="price">
                      <del>$190</del>
                      <h5>$120</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="cours-bx">
                  <div className="action-box">
                    <img src="assets/images/courses/pic4.jpg" alt />
                    <a href="#" className="btn">Read More</a>
                  </div>
                  <div className="info-bx text-center">
                    <h5><a href="#">Introduction EduChamp – LMS plugin</a></h5>
                    <span>Programming</span>
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
                    <div className="price">
                      <del>$190</del>
                      <h5>$120</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Courses END */}
      {/* Form */}
      <div className="section-area section-sp1 ovpr-dark bg-fix online-cours" style={{backgroundImage: 'url(assets/images/background/bg1.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-white">
              <h2>Online Courses To Learn</h2>
              <h5>Own Your Feature Learning New Skills Online</h5>
              <form className="cours-search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="What do you want to learn today?	" />
                  <div className="input-group-append">
                    <button className="btn" type="submit">Search</button> 
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mw800 m-auto">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="cours-search-bx m-b30">
                  <div className="icon-box">
                    <h3><i className="ti-user" /><span className="counter">5</span>M</h3>
                  </div>
                  <span className="cours-search-text">Over 5 million student</span>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="cours-search-bx m-b30">
                  <div className="icon-box">
                    <h3><i className="ti-book" /><span className="counter">30</span>K</h3>
                  </div>
                  <span className="cours-search-text">30,000 Courses.</span>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="cours-search-bx m-b30">
                  <div className="icon-box">
                    <h3><i className="ti-layout-list-post" /><span className="counter">20</span>K</h3>
                  </div>
                  <span className="cours-search-text">Learn Anythink Online.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Form END */}
      <div className="section-area section-sp2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center heading-bx">
              <h2 className="title-head m-b0">Upcoming <span>Events</span></h2>
              <p className="m-b0">Upcoming Education Events To Feed Brain. </p>
            </div>
          </div>
          <div className="row">
            <div className="upcoming-event-carousel owl-carousel owl-btn-center-lr owl-btn-1 col-12 p-lr0  m-b30">
              <div className="item">
                <div className="event-bx">
                  <div className="action-box">
                    <img src="assets/images/event/pic4.jpg" alt />
                  </div>
                  <div className="info-bx d-flex">
                    <div>
                      <div className="event-time">
                        <div className="event-date">29</div>
                        <div className="event-month">October</div>
                      </div>
                    </div>
                    <div className="event-info">
                      <h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
                      <ul className="media-post">
                        <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                        <li><a href="#"><i className="fa fa-map-marker" /> Berlin, Germany</a></li>
                      </ul>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="event-bx">
                  <div className="action-box">
                    <img src="assets/images/event/pic3.jpg" alt />
                  </div>
                  <div className="info-bx d-flex">
                    <div>
                      <div className="event-time">
                        <div className="event-date">29</div>
                        <div className="event-month">October</div>
                      </div>
                    </div>
                    <div className="event-info">
                      <h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
                      <ul className="media-post">
                        <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                        <li><a href="#"><i className="fa fa-map-marker" /> Berlin, Germany</a></li>
                      </ul>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="event-bx">
                  <div className="action-box">
                    <img src="assets/images/event/pic2.jpg" alt />
                  </div>
                  <div className="info-bx d-flex">
                    <div>
                      <div className="event-time">
                        <div className="event-date">29</div>
                        <div className="event-month">October</div>
                      </div>
                    </div>
                    <div className="event-info">
                      <h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
                      <ul className="media-post">
                        <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                        <li><a href="#"><i className="fa fa-map-marker" /> Berlin, Germany</a></li>
                      </ul>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="#" className="btn">View All Event</a>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="section-area section-sp2 bg-fix ovbl-dark" style={{backgroundImage: 'url(assets/images/background/bg1.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-white heading-bx left">
              <h2 className="title-head text-uppercase">what people <span>say</span></h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
            </div>
          </div>
          <div className="testimonial-carousel owl-carousel owl-btn-1 col-12 p-lr0">
            <div className="item">
              <div className="testimonial-bx">
                <div className="testimonial-thumb">
                  <img src="assets/images/testimonials/pic1.jpg" alt />
                </div>
                <div className="testimonial-info">
                  <h5 className="name">Peter Packer</h5>
                  <p>-Art Director</p>
                </div>
                <div className="testimonial-content">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial-bx">
                <div className="testimonial-thumb">
                  <img src="assets/images/testimonials/pic2.jpg" alt />
                </div>
                <div className="testimonial-info">
                  <h5 className="name">Peter Packer</h5>
                  <p>-Art Director</p>
                </div>
                <div className="testimonial-content">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials END */}
      {/* Recent News */}
      <div className="section-area section-sp2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 heading-bx left">
              <h2 className="title-head">Recent <span>News</span></h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
            </div>
          </div>
          <div className="recent-news-carousel owl-carousel owl-btn-1 col-12 p-lr0">
            <div className="item">
              <div className="recent-news">
                <div className="action-box">
                  <img src="assets/images/blog/latest-blog/pic1.jpg" alt />
                </div>
                <div className="info-bx">
                  <ul className="media-post">
                    <li><a href="#"><i className="fa fa-calendar" />Jan 02 2019</a></li>
                    <li><a href="#"><i className="fa fa-user" />By William</a></li>
                  </ul>
                  <h5 className="post-title"><a href="blog-details.html">This Story Behind Education Will Haunt You Forever.</a></h5>
                  <p>Knowing that, you’ve optimised your pages countless amount of times, written tons.</p>
                  <div className="post-extra">
                    <a href="#" className="btn-link">READ MORE</a>
                    <a href="#" className="comments-bx"><i className="fa fa-comments-o" />20 Comment</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="recent-news">
                <div className="action-box">
                  <img src="assets/images/blog/latest-blog/pic2.jpg" alt />
                </div>
                <div className="info-bx">
                  <ul className="media-post">
                    <li><a href="#"><i className="fa fa-calendar" />Feb 05 2019</a></li>
                    <li><a href="#"><i className="fa fa-user" />By John</a></li>
                  </ul>
                  <h5 className="post-title"><a href="blog-details.html">What Will Education Be Like In The Next 50 Years?</a></h5>
                  <p>As desperate as you are right now, you have done everything you can on your.</p>
                  <div className="post-extra">
                    <a href="#" className="btn-link">READ MORE</a>
                    <a href="#" className="comments-bx"><i className="fa fa-comments-o" />14 Comment</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="recent-news">
                <div className="action-box">
                  <img src="assets/images/blog/latest-blog/pic3.jpg" alt />
                </div>
                <div className="info-bx">
                  <ul className="media-post">
                    <li><a href="#"><i className="fa fa-calendar" />April 14 2019</a></li>
                    <li><a href="#"><i className="fa fa-user" />By George</a></li>
                  </ul>
                  <h5 className="post-title"><a href="blog-details.html">Master The Skills Of Education And Be.</a></h5>
                  <p>You will see in the guide all my years of valuable experience together with.</p>
                  <div className="post-extra">
                    <a href="#" className="btn-link">READ MORE</a>
                    <a href="#" className="comments-bx"><i className="fa fa-comments-o" />23 Comment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recent News End */}
    </div>
    {/* contact area END */}
  </div>
  
    );
};

export default ProductsCustomize;