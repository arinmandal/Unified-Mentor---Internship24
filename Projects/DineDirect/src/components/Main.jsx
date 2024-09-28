import useRestaurantFilter from "../Utils/hooks/useRestaurantFilter"; // New import
import SearchCom from "./SearchCom";
import ShimmarUI from "./ShimmarUI";
import { HERO_IMAGE } from "../Utils/constantFile";
import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import FilterComponent from "./FilterComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/hooks/useOnlineStatus";

export const Main = () => {
  const {
    activeFilter,
    searchText,
    handleSearch,
    handleFilterClick,
    filteredRestaurants = [],
  } = useRestaurantFilter(); // Use custom hook

  const onlineStatus  = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="bg-red-500 text-white text-center p-4">
        <h1 className="font-bold">You are offline!</h1>
        <p>Please check your internet connection.</p>
      </div>
    );

  const loadingShimmer = Array(12).fill(<ShimmarUI />); // Pre-render shimmer UI

  return (
    <main className='w-full min-h-screen bg-mainBg'>
      <section className='max-w-7xl mx-auto pt-4 px-2 sm:px-6 md:px-8'>
        <div className='relative'>
          <img
            src={HERO_IMAGE}
            alt='Delicious food spread'
            className='w-full h-[250px] object-cover rounded-lg shadow-lg'
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
              loadingShimmer.map((shimmer, index) => (
                <div key={index} className='col-span-1'>
                  {shimmer}
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
