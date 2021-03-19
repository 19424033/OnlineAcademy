import React, { useState, useEffect } from "react";
import CoursesServices from "../../services/courses.service";
import {
    useParams, Link
  } from "react-router-dom";
import CoursesList from './CoursesList/CoursesList'
import { Breadcrumb, Menu } from 'antd';

const Courses = (props) => {

    let { CategoryGroup } = useParams();
    
    const keyId = String(CategoryGroup === undefined ? '0' : CategoryGroup.indexOf('search') > - 1 ? '0' : CategoryGroup.split("-")[0]);
    const defaultName = CategoryGroup === undefined ? '' : CategoryGroup.indexOf('search') > - 1 ? '' : ` > ${CategoryGroup.split("-")[1]}`;

    const [categoryGroup, setCategoryGroup] = useState([]);
    const [CategoryGroupName, setCategoryGroupName] = useState(defaultName);
    const [categories, setCategories] = useState([]);
    const [coursesList, setCoursesList] = useState(<CoursesList  categories = {categories} />)
    const [valueInputSearch, setValueInputSearch] = useState('');


    useEffect(() => {
        //Lọc List ALL CategoryGroup

        CoursesServices().CategoryGroup()
        .then((response) => {
            setCategoryGroup(response.data);
        });
        //Lọc List Category
        if(keyId > 0) {
            CoursesServices().getCategoryByGroupId(keyId)
            .then((response) => {
                setCategories(response.data);
                setCategoryGroupName(defaultName);
                setCoursesList(<CoursesList   categories = {response.data} />);
            });
        }
        else {
            CoursesServices().getCategoryAllGroup()
            .then((response) => {
                const searchkey = new URLSearchParams(props.location.search).get('keyword');
                const keyword = searchkey == null ? '' : searchkey;
                setCategoryGroupName('');
                setValueInputSearch(keyword);
                setCategories(response.data);
                setCoursesList(<CoursesList  categories = { 
                    response.data.filter(data => (
                        xoa_dau(data.CategoryGroupName).indexOf(xoa_dau(keyword)) > - 1
                        || xoa_dau(data.CategoryName).indexOf(xoa_dau(keyword)) > - 1
                        || xoa_dau(data.DislayName).indexOf(xoa_dau(keyword)) > - 1 ) ) } />);
            });
        }

       
    },[props.location.search]);

    function xoa_dau(str) {
        str = str.toLowerCase(str);
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str;
    }

    const handleClickCategoryGroupName = (val) => {
        const id = val == 0 ? 0 : val.CategoryGroupId;
        setValueInputSearch('');
        if(id > 0) {
            CoursesServices().getCategoryByGroupId(id)
            .then((response) => {
                setCategories(response.data);
                setCategoryGroupName(`> ${val.CategoryGroupName}`);
                setCoursesList(<CoursesList  categories = {response.data} />);
            });
        }
        
        else {
            CoursesServices().getCategoryAllGroup()
            .then((response) => {
                const searchkey = new URLSearchParams(props.location.search).get('keyword');
                const keyword = searchkey == null ? '' : searchkey;
                setValueInputSearch(keyword);
                setCategoryGroupName('');
                setCategories(response.data);
                setCoursesList(<CoursesList  categories = { 
                    response.data.filter(data => (
                        xoa_dau(data.CategoryGroupName).indexOf(xoa_dau(keyword)) > - 1
                        || xoa_dau(data.CategoryName).indexOf(xoa_dau(keyword)) > - 1
                        || xoa_dau(data.DislayName).indexOf(xoa_dau(keyword)) > - 1 ) ) } />);
            });
        }
    }

    const changeSearch = event => {
        setValueInputSearch(event.target.value);
        if(categories.length > 0) {
        setCoursesList(<CoursesList  categories = { categories.filter(data => 
            xoa_dau(data.CategoryName).indexOf(xoa_dau(event.target.value))  > -1 )} />);
      }
    }

    return (
        <div className="content-block">
            <div className="section-area section-sp1">
                <div className="container">
                    <div className="m-b20">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to="/">Trang Chủ</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                Khóa Học   { CategoryGroupName }
                            </Breadcrumb.Item>
                        </Breadcrumb>   
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12 m-30">
                            <div className="widget courses-search-bx placeani">
                                <div className="form-group">
                                <div className="input-group">
                                    <input name="dzName" placeholder="Tìm kiếm khóa học..." value= {valueInputSearch} type="text" required className="form-control" onChange={changeSearch}  />
                                </div>
                                </div>
                            </div>
                            <div className="widget widget_archive">
                                <h5 className="widget-title style-1">Lĩnh Vực</h5>
                                <Menu  defaultSelectedKeys=  { [ keyId ] }  theme="dark">
                                    <Menu.Item key="0" onClick={ () => handleClickCategoryGroupName(0) }>
                                    <Link to= {`/courses`} >
                                        Tất cả Lĩnh vực
                                    </Link>
                                    </Menu.Item>    
                                    {
                                        categoryGroup.map( (val, index) => 
                                            <Menu.Item key= { val.CategoryGroupId } onClick={ () => handleClickCategoryGroupName(val) } >
                                            <Link to= {`/courses/${val.CategoryGroupId}-${val.CategoryGroupName}` }>
                                                { val.CategoryGroupName }
                                                </Link>
                                            </Menu.Item>    
                                        )
                                    }
                                </Menu>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            { coursesList }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
