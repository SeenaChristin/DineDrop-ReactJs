import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId,costForTwo}= resData?.data;
    return(
        <div className="w-60 h-80 m-8 border border-solid border-transparent hover:border-orange-100
         hover:shadow-xl bg-orange-50 ">
            <img
            className="w-full"
            alt="res-logo"
            src= {CDN_URL + cloudinaryImageId}
            />
            <div className="p-5">
            <h3>{name}</h3>
            <h4 className="text-sm">{cuisines.join(", ")}</h4>
            <div className="pt-3">
            <h4>{avgRating} stars</h4>
            <h4>Rs. {costForTwo/100} for two</h4>
            <h4>{deliveryTime} mins</h4>
            </div>
            </div>
        </div>
    );
};

export default RestaurantCard;

