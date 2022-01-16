import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Category = () => {

    const [foodCategory, setFoodCategory] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const history = useHistory();

    const makeApiCallForCategory = async () => {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");

        console.log("api", response.data.categories);
        const data = Array.from(response.data.categories);
        setFoodCategory(data);
    }

    useEffect(() => {
        makeApiCallForCategory();
    }, [])

    const selectCategory = (name) => {
        const data = name;
        history.push(`/category/${data}`, { categoryName: data });
        console.log("name", history.location);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Categories</h2>
                    </div></div></div>
            <div className="row" style={{ padding: "105px" }}>
                {foodCategory.map((FCategory, index) => {
                    const cname = FCategory.strCategory;
                    // console.log("bdfdb",cname);

                    return (

                        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" onClick={() => selectCategory(cname)} key={index}
                            style={{ cursor: "pointer" }}>
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${FCategory.strCategoryThumb})` }}>

                                </div>
                                <div className="featured__item__text">
                                    <h6>{FCategory.strCategory}</h6>

                                </div>
                            </div></div>)
                })}
            </div>   </div>



    );
}

export default Category;