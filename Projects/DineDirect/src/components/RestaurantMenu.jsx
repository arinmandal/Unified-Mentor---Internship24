import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../Pages/Error";
import { IMAGE_CDN } from "../Utils/constantFile";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/hooks/useRestaurantMenu";
const RestaurantMenu = () => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (error) {
    return <Error />;
  }

  if (resInfo === null) {
    return <div>Loading...</div>; // Or display a loading spinner
  }

  const { name, avgRating, costForTwoMessage, cuisines, areaName, sla, city } =
  resInfo.data?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
  resInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards[2]?.card?.card;
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='pageView cursor-pointer text-xs px-4 text-slate-500 space-x-1 mb-6'>
        <span
          className="after:content-['/'] hover:text-black"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <span className="after:content-['/'] hover:text-black">{city}</span>
        <span className='hover:text-black'>{name}</span>
      </div>
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
