import SearchCom from "./SearchCom";
import ShimmarUI from "./ShimmarUI";
import { HERO_IMAGE } from "../Utils/constantFile";
import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import FilterComponent from "./FilterComponent";
import axios from "axios";
import { RESTAURANT_API } from "../Utils/constantFile";
import { Link } from "react-router-dom";

export const Main = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    fetchData();
  }, []);

  //* Search Functionality
  const handleSearch = term => {
    // ... Perform actions with the search term (e.g., fetch data)
    const filterData = restaurants.filter(data =>
      data.info.name.toLowerCase().includes(term.toLowerCase()),
    );
    setFilteredRestaurants(filterData);
  };

  //* Fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get(RESTAURANT_API);
      const restaurantList =
        response?.data?.data?.success?.cards[3]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants;
      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //* FilterComponent functionality
  const handleFilterClick = filterType => {
    const filteredResults = restaurants.filter(restaurant => {
      switch (filterType) {
        case "Rating 4.5+":
          return restaurant.info.avgRating >= 4.5;
        case "Fast Delivery":
          return restaurant.info.sla.deliveryTime <= 20;
        case "Pure Veg":
          return restaurant.info.veg === true;
        case "Cost: Low to High":
          return true; // We'll sort this later
        case "Cost: High to Low":
          return true; // We'll sort this later
        default:
          return true;
      }
    });

    if (filterType === "Cost: Low to High") {
      filteredResults.sort((a, b) => a.info.costForTwo - b.info.costForTwo);
    } else if (filterType === "Cost: High to Low") {
      filteredResults.sort((a, b) => b.info.costForTwo - a.info.costForTwo);
    }
    setFilteredRestaurants(filteredResults);
    setActiveFilter(filterType);
  };
  return (
    <main className='w-full min-h-screen bg-gradient-to-b from-blue-100 to-white'>
      <section className='max-w-7xl mx-auto pt-8 px-4 sm:px-6 md:px-8'>
        <div className='relative'>
          <img
            src={HERO_IMAGE}
            alt='Delicious food spread'
            className='w-full h-[400px] object-cover rounded-lg shadow-lg'
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg'>
            <h1 className='text-4xl sm:text-5xl font-bold mb-4 text-center'>
              Hungry?
            </h1>
            <h2 className='text-xl sm:text-2xl mb-8 text-center'>
              Order food from favourite restaurants near you.
            </h2>
            <div className='w-full max-w-md'>
              <SearchCom onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto pt-8 px-4 sm:px-6 md:px-8'>
        <h1 className='text-2xl font-bold mb-4'>Featured Restaurants</h1>
        <FilterComponent
          onClick={handleFilterClick}
          activeFilter={activeFilter}
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {filteredRestaurants.length === 0
            ? // Display Shimmer UI while loading
              Array(12)
                .fill()
                .map((_, index) => (
                  <div key={index} className='col-span-1'>
                    <ShimmarUI />
                  </div>
                ))
            : // Display actual restaurant cards when data is loaded
              filteredRestaurants.map(restaurant => (
                <Link
                  to={"/restaurants/" + restaurant.info.id}
                  key={restaurant.info.id}
                  className='block'
                >
                  <RestaurantCard
                    key={restaurant.info.id}
                    {...restaurant.info}
                  />
                </Link>
              ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};
