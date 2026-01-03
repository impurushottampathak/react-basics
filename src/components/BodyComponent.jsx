import { useEffect, useState } from "react";
import RestroCard from './RestroCard';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () => {
  const [restroList,setRestroList] = useState([]);
  const [filteredList,setFilteredRestro] = useState([]);
  const [searchText,setSearchValue] = useState("");

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=> {
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.52110&lng=73.85020&carousel=true&third_party_vendor=1");
    const json = await data.json();
    setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestroList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return restroList?.length === 0 ? (<Shimmer/>) : (
    <div id="body">
      <div className="filters" id="btn">
        <div className="search">
          <input type="text" className="search-box" placeholder="search" value={searchText} onChange={(e)=> {
            setSearchValue(e.target.value)
          }}/>
          <button onClick={()=>{
            const filteredList = restroList.filter((restro)=> restro.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestro(filteredList);
          }}>search</button>
        </div>
        <button className="filter-btn" onClick={
          ()=>{
            const filteredList = restroList.filter((restro)=>restro.info.avgRating>4.5);
            setFilteredRestro(filteredList);
          }
        }>Top rated restaurants</button>
      </div>
      <div className="restro-container">
        {filteredList?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant?.info?.id}><RestroCard restroData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent