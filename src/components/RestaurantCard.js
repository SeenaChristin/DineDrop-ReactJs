import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId,costForTwo}= resData?.data;
    return(
        <div className="res-card">
            <img
            className="res-logo"
            alt="res-logo"
            src= {CDN_URL + cloudinaryImageId}
            />
            <div className="res-details">
            <h3>{name}</h3>
            <h4 className="cuisines">{cuisines.join(", ")}</h4>
            <div className="details">
            <h4>{avgRating} stars</h4>
            <h4>Rs. {costForTwo/100} for two</h4>
            <h4>{deliveryTime} mins</h4>
            </div>
            </div>
        </div>
    );
};

export default RestaurantCard;

