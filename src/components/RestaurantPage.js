import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CDN_URL } from "../utils/constants";
import ShimmerUi from "./ShimmerUI";

const RestaurantPage = ()=>{
    const {id} = useParams();
    const [resData, setResData] = useState(null)
    useEffect(()=>{
       fetchResData();
    },[])
    async function fetchResData(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.82667&lng=77.5549333&restaurantId="+id);
        const json = await data.json();
        console.log(json.data);
        setResData(json.data);  
    }
    return !resData ? <ShimmerUi/> :
    (
        <div className="restaurant-page">
            <h1>{resData?.cards[0].card?.card?.info?.name}</h1>
              <img
            className="res-logo-page"
            alt="res-logo"
             src= {CDN_URL + resData?.cards[0].card?.card?.info?.cloudinaryImageId}
            />
            <h2>{resData?.cards[0].card?.card?.info?.areaName}</h2>
            <h2>{resData?.cards[0].card?.card?.info?.city}</h2>
            <h2>{resData?.cards[0].card?.card?.info?.costForTwoMessage}</h2>
            <div className="menu">{resData?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((card)=> card.card.info.name )}</div>
        </div>
    )
}

export default RestaurantPage;