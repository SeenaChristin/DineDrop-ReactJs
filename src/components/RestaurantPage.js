import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CDN_URL } from "../utils/constants";
import ShimmerUi from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";


const RestaurantPage = ()=>{
    const {id} = useParams();
    
    const resData = useRestaurant(id);

    return !resData ? <ShimmerUi/> :
    (
        <div className="restaurant-page">
            <div>
            <h1>{resData?.cards[0].card?.card?.info?.name}</h1>
              <img
            className="res-logo-page"
            alt="res-logo"
             src= {CDN_URL + resData?.cards[0].card?.card?.info?.cloudinaryImageId}
            />
            <h2>{resData?.cards[0].card?.card?.info?.areaName}</h2>
            <h2>{resData?.cards[0].card?.card?.info?.city}</h2>
            <h2>{resData?.cards[0].card?.card?.info?.costForTwoMessage}</h2>
            </div>
            <div className="menu"><b>Menu</b>
                <ul>
                    {resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((card)=> <li>{card.card.info.name }</li>)}
                </ul>
                
                </div>
        </div>
    )
}

export default RestaurantPage;