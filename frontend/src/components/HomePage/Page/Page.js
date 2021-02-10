import { useContext } from "react";
import { Link } from "react-router-dom";
import Products from "../../Products/Products"


const Page = (props) => {

    const title = (
        (props.title == 'yeuthichnhat') 
        ?
            <div className="col-md-12 heading-bx left">
                <h2 className="title-head">Nhiều người quan tâm</h2>
                <p>5 khóa học được yêu thích nhất</p>
            </div>
        : (props.title == 'xemnhieunhat') 
        ?
            <div className="col-md-12 heading-bx left">
                <h2 className="title-head">Nhiều lượt xem nhất</h2>
                <p>10 khóa học có lượt xem nhiều nhất</p>
            </div>
        : (props.title == 'muanhieunhat') 
        ?
            <div className="col-md-12 heading-bx left">
                <h2 className="title-head">Mua nhiều nhất tuần</h2>
                <p>10 khóa học được mua nhiều nhất tuần</p>
            </div>
        : <div className="col-md-12 heading-bx left">
            <h2 className="title-head">Khóa học mới nhất</h2>
            <p>10 khóa học mới nhất</p>
        </div>
    )

    const list = [
        { Categoryid: 1, Categoryname: "Test 1", QuanLike: '10', Price: 500000, CategoryGroup: "Group 1", Discount : 50 },
        { Categoryid: 2, Categoryname: "Test 2", QuanLike: '10', Price: 300000, CategoryGroup: "Group 1", Discount : 0 },
        { Categoryid: 3, Categoryname: "Test 3", QuanLike: '10', Price: 500000, CategoryGroup: "Group 2", Discount : 0 },
        { Categoryid: 4, Categoryname: "Test 4", QuanLike: '10', Price: 700000, CategoryGroup: "Group 2", Discount : 30 },
        { Categoryid: 5, Categoryname: "Test 5", QuanLike: '10', Price: 120000, CategoryGroup: "Group 3", Discount : 0 }
    ]

    var items = list.map (
        e =>
        <div>
            <Products products={e} />  
        </div>
    );

    return (
        <div className="section-area section-sp2 popular-courses-bx">
            <div className="container">
                <div className="row">
                    { title }
                </div>
                <div className="row">
                    <div className="courses-carousel owl-carousel owl-btn-1 col-12 p-lr0">
                      {items}
                    </div>
                </div>
            </div>
        </div>   
    )
}


export default Page;

