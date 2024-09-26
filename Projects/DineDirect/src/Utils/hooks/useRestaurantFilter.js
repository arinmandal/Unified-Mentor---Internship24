import { useState } from "react";
import useRestaurantData from "./useRestaurantData";

const useRestaurantFilter = () => {
  const { restaurants } = useRestaurantData();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (term) => {
    setSearchText(term);
  };

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
  };

  const filteredRestaurants = () => {
    let results = restaurants;

    if (searchText) {
      results = results.filter(data =>
        data.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    switch (activeFilter) {
      case "Rating 4.5+":
        results = results.filter(restaurant => restaurant.info.avgRating >= 4.5);
        break;
      case "Fast Delivery":
        results = results.filter(restaurant => restaurant.info.sla.deliveryTime <= 20);
        break;
      case "Pure Veg":
        results = results.filter(restaurant => restaurant.info.veg === true);
        break;
      case "Cost: Low to High":
        results.sort((a, b) => a.info.costForTwo - b.info.costForTwo);
        break;
      case "Cost: High to Low":
        results.sort((a, b) => b.info.costForTwo - a.info.costForTwo);
        break;
      default:
        break;
    }

    return results;
  };

  return {
    activeFilter,
    searchText,
    handleSearch,
    handleFilterClick,
    filteredRestaurants: filteredRestaurants(),
  };
};

export default useRestaurantFilter;