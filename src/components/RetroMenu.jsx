import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";


const RestroMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { id } = useParams();

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async ()=> {
        const data = await fetch(MENU_API+id);
        const json = await data.json();
        setResInfo(json?.data)
    }

    if (resInfo === null) return <Shimmer/> 
    
    const {name,areaName,avgRatingString,locality,costForTwoMessage,cloudinaryImageId} = resInfo?.cards[2]?.card?.card.info;

    let imageURL;

    if (cloudinaryImageId) {
        imageURL =
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        cloudinaryImageId;
    }

    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="retro-container">
         <img className="restro-logo" alt="restro-logo" src={imageURL} />
         <h1>Restaurant Name : {name}</h1>
         <h2>Area: {areaName}, {locality}</h2>
         <h2>Rating: {avgRatingString}</h2>
         <h2>{costForTwoMessage}</h2>
         <h2>Menu provided</h2>
         <ul>
            {
                itemCards.map((item)=><li key={item?.card?.info?.id}>{item?.card?.info?.name} === Rs. {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</li>)
            }
         </ul>
        </div>
    )
}

export default RestroMenu;