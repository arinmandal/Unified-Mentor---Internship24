import React, { useState, useEffect } from "react";
import axios from "axios";
import { getMenuApi} from "../Utils/constantFile";
import Error from "../Pages/Error";
import { IMAGE_CDN } from "../Utils/constantFile";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [error, setError] = useState(null);

  const {resId} = useParams();
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(getMenuApi(resId));
        setRestaurantData(response);
      } catch (error) {
        setError(error);
      }
    };

    fetchMenu();
  }, []);

  if (error) {
    return <Error />;
  }

  if (restaurantData === null) {
    return <div>Loading...</div>; // Or display a loading spinner
  }

  const { name, avgRating, costForTwoMessage, cuisines, areaName, sla } =
    restaurantData.data?.data?.cards[2]?.card?.card?.info;

  console.log()
  const { itemCards } = restaurantData?.data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>{name}</h1>
        <div className='bg-white rounded-lg shadow-md p-4'>
          <div className='flex items-center mb-2'>
            <div className='flex items-center'>
              ⭐<span className='font-medium'>{avgRating}</span>
            </div>
            <span className='ml-3'>{costForTwoMessage}</span>
          </div>
          <p className='text-sm mb-2 text-orange-500 font-bold underline'>
            {cuisines.join(", ")}
            {/* cuisines */}
          </p>
          <ul className='list-disc pl-4'>
            <li className='mb-1'>
              <span className='font-medium'>Outlet:</span> {areaName}
            </li>
            <li>
              <span className='font-medium'>Delivery:</span> {sla.slaString}
            </li>
          </ul>
        </div>
      </div>
      {/* Rest of the menu components */}
      <div className='container mx-auto mt-8'>
        <h1 className='text-2xl font-bold text-center'>Menu</h1>
      </div>
      <div className='mt-4'>
        {itemCards.map(item => (
          <div
            key={item.card.info.id}
            className='bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between'
          >
            <div className='Description'>
              <h1 className='text-lg font-bold'>{item.card.info.name}</h1>
              <div className='flex flex-col items-start'>
                <span className='mr-2'>₹{item.card.info.price / 100}</span>
                {item.card.info.price && (
                  <div className='text-gray-600'>
                    <span className='font-medium'>
                      ⭐{item?.ratings?.aggregatedRating?.rating}
                    </span>
                  </div>
                )}
                <p className='text-sm mb-2 text-gray-600 max-w-[40%]'>
                  {item.card.info.description}
                </p>
              </div>
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-48'>
                <img
                  src={IMAGE_CDN + item.card.info.imageId}
                  alt={item.card.info.name}
                  className='w-full object-cover rounded-md'
                />
              </div>
              <button className='bg-green-500 text-white font-bold py-2 px-4 rounded-md mt-2'>
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
