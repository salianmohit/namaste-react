import RestaurantCard from "./RestaurantCard";
import jsonListData from "../utils/mockData";
import { useEffect, useState, userEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [jsonList, setjsonListData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterRestaurant, setFilterRestaturant] =useState("[]");

  useEffect(() => {
    console.log("useEffect has been called");
    fetchData();
  }, []);


  const fetchData = async () => {

    const data = await fetch(
      "<PLEASE ADD THE API HERE");

    const json = await data.json();
    console.log("Json data ::", json);
    setjsonListData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestaturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  };

  console.log("Body rendered first");

  // Conditional Rendering
  //  if (jsonList.length == 0){
  //   return <Shimmer/>;
  //  };

  //console.log("jsonList :",jsonList);

  return (jsonList.length == 0) ? <Shimmer /> : (
    <div className="body">

      <div className="filter">
        <div className="searchBar">
          <input className="searchInput" value={searchValue} onChange={(e) => {
            setSearchValue(e.target.value);
          }
          }></input>
          <button className="searchBtn" onClick={() => {
            //console.log(searchValue);

            const searchRestaurant = jsonList.filter(restau => restau.info.name.toLowerCase().includes(searchValue.toLowerCase()));
            //console.log(searchRestaurant);

            setFilterRestaturant(searchRestaurant);

          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = jsonList.filter(restau => restau.info.avgRating > 4.5);
          setjsonListData(filteredList);
        }
        }>
          Top Rated Restaurants</button>
      </div>

      <div className="restau-container">

        {filterRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} restauData={restaurant} />))}
      </div>
    </div>
  )
};

export default Body;