import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

   const {restauData} = props;
   
   const {cloudinaryImageId,name,cuisines,avgRating,sla} = restauData?.info;

   return (

      <div className="restau-card" style = {{backgroundColor : "#f0f0f0"}}>
         <img 
         className ="restau-logo" 
         alt="restau-logo" 
         src={CDN_URL+cloudinaryImageId}/> 
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating}</h4>
         <h4>{sla.slaString}</h4>
      </div>
   )
}

export default RestaurantCard;