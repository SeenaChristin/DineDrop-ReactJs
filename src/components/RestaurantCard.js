import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantCard = (props) =>{
    const {meals} = props;
    const {idMeal,strMeal,strMealThumb}= meals;
    const {user} = useContext(UserContext);
    const dispatch = useDispatch();
    const handleAddItem =()=>{
        dispatch(addItem(meals));
    }
    return(
        <div className="w-60 h-96 m-8 border border-solid border-transparent hover:border-orange-100
         hover:shadow-xl bg-orange-50 ">
            <img
            className="w-full"
            alt="res-logo"
            src= {strMealThumb}
            />
            <div className="p-5">
            <h3>{strMeal}</h3>
            <button className="mt-5 text-sm h-9 p-2 bg-orange-200 cursor-pointer"
            onClick={()=>handleAddItem(meals)}
            >Add Item</button>
            </div>
        </div>
    );
};

export default RestaurantCard;

