import { RESTAURANT_API } from "../constantFile"
import { useState, useEffect } from "react";
import axios  from "axios";
const useRestaurantData = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  //* Fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get(RESTAURANT_API)
      const restaurantList =
        response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { restaurants, filteredRestaurants };

}


export default useRestaurantData;