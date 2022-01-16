import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/allActions";
import { v4 as uuidv4 } from "uuid";

const SecCategory = (props) => {

    const [foodCategory, setFoodCategory] = useState([]);
    let [quantity, setQuantity] = useState(1);
    let [cost, setCost] = useState(100);
    const cart = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const { addToCart } = bindActionCreators(actionCreators, dispatch);


    const makeApiCallForCategory = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.location.state.categoryName}`);

        console.log("api", response.data.meals);
        const data = Array.from(response.data.meals);
        setFoodCategory(data);
    }



    useEffect(() => {
        makeApiCallForCategory();
    }, [])




    return (
        <> 
            {foodCategory.map((FCategory, index) => (
                <div className="col-sm-6 col-md-4 col-lg-4" key={index}>
                    <div className="box" key={index}>
                        <div className="option_container">
                            <div className="options">
                                <button className="option1" onClick={() => {
                                    addToCart({
                                        id: uuidv4(),
                                        title: FCategory.strMeal,
                                        quantity: quantity,
                                        price: cost,
                                        image: FCategory.strMealThumb,
                                        // itemId: item.id,
                                    }); console.log(cart);
                                }}>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src={FCategory.strMealThumb} alt="productimage" style={{ maxWidth: "350px" }} />
                        </div>
                        <div className="detail-box">
                            <h5>
                                {FCategory.strMeal}
                            </h5>
                        </div>
                    </div> </div>
            ))}

        </>

    );
}

export default SecCategory;