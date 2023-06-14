import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
import {Link} from "react-router-dom";

const Body = () => {
    const [listOfRestaurants,setListofres] = useState([]);
    const [filteredList,setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState([""]);
    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.82667&lng=77.5549333&page_type=DESKTOP_WEB_LISTING"
        );
    const json = await data.json();
    setListofres(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredList(json?.data?.cards[2]?.data?.data?.cards);
    };

    return listOfRestaurants.length === 0? <ShimmerUi/> : (
        <div className="body">
            <div className="filter">
                <input className="search" value={searchText}
                onChange={(e)=>{
                 setSearchText(e.target.value);
                }}
                ></input>
                <button className="search-btn"
                onClick={()=>{
                  const newList = listOfRestaurants.filter(
                    (res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredList(newList);
                }}
                >Search</button>
                <button 
                className="filter-btn"
                 onClick={()=>{
                    const newList = listOfRestaurants.filter(
                        (res)=> res.data.avgRating>4.2
                    );
                    setFilteredList(newList);
                 }}
                >Top-rated Restaurants
                </button>
            </div>
            <div className="res-container">
            {
                filteredList.map((restaurant)=>(
                    <Link
                     to={"/restaurant/" + restaurant.data.id} 
                    key={restaurant.data.id}
                    >
                    <RestaurantCard  resData={restaurant}/>
                    </Link>
                ))
            }
            </div>
        </div>
    );
};

export default Body;