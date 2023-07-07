import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
import {Link} from "react-router-dom";
import { filterData, randomXToY } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants,setListofres] = useState([]);
    const [filteredList,setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState([""]);
    const {user,setUser} = useContext(UserContext);
    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
           "https://www.themealdb.com/api/json/v1/1/filter.php?i=salt",
    
        );
    const json = await data.json();
    json.meals.map((meal)=>{
        meal['price'] = randomXToY(100, 600);
        return meal;
    })
    setListofres(json.meals);
    setFilteredList(json.meals);
    };
    
    const online = useOnline();
    if(!online){
        return <h1 className="mt-28">Your connection is lost</h1>;
    }

    return listOfRestaurants.length === 0? <ShimmerUi/> : (
        <div className="mt-24">
            <div className="flex">
                <input className="h-9 mt-5 ml-8 p-2 border border-solid
                border-orange-100" 
                value={searchText}
                onChange={(e)=>{
                 setSearchText(e.target.value);
                }}
                ></input>
                <button className="m-5 text-sm h-9 p-2 bg-orange-50 cursor-pointer"
                onClick={()=>{
                  const newList = filterData(searchText,listOfRestaurants);
                    setFilteredList(newList);
                }}
                >Search</button>
                {/* <button 
                className="mt-5 ml-8 h-9 text-sm bg-orange-50 border border-solid border-orange-100
                p-2 cursor-pointer"
                 onClick={()=>{
                    const newList = listOfRestaurants.filter(
                        (res)=> res.data.avgRating>4.2
                    );
                    setFilteredList(newList);
                 }}
                >Top-rated Restaurants
                </button> */}
                <input className="h-9 mt-5 ml-8 p-2 border border-solid
                border-orange-100" 
                value={user.name} 
                onChange={(e)=>{
                   setUser({
                    name: e.target.value,
                    email:" commom@gmail.com",
                   });
                }}
                ></input>
                <span className="mt-5 p-2">React Context</span>
            </div>
            <div className="flex flex-wrap p-1">
            {
                filteredList.map((food)=>(
                 
                    <RestaurantCard key={food.idMeal} meals={food}/>
                    
                ))
            }
            </div>
        </div>
    );
};

export default Body;