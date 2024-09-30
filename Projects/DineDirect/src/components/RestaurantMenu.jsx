import React, { useState, useEffect } from "react";
import ResCategoryAccordion from "./ResCategoryAccordion";
import { useNavigate } from "react-router-dom";
import ShimmarMenuItems from "./ShimmerMenuItems";
import Error from "../Pages/Error";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/hooks/useRestaurantMenu";
const RestaurantMenu = () => {
  const [error, setError] = useState(null);
  const [showIndex, setShowIndex] = useState(0);

  const navigate = useNavigate();
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (error) {
    return <Error />;
  }

  if (resInfo === null) {
    return <ShimmarMenuItems />;
  }

  const { name, avgRating, costForTwoMessage, cuisines, areaName, sla, city } =
    resInfo.data?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const itemCategory =
    resInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      c =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
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
        {itemCategory.map((category, index) => (
          <ResCategoryAccordion
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false} // Update to compare with showIndex
            setShowIndex={() => setShowIndex(index)} // Pass the index to setShowIndex
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
