import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants,setListofres] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                 onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=> res.data.avgRating>4
                    );
                    setListofres(filteredList);
                 }}
                >Top-rated Restaurants
                </button>
            </div>
            <div className="res-container">
            {
                listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))
            }
            </div>
        </div>
    );
};

export default Body;