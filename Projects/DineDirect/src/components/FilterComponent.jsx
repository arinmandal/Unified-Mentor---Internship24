import { useState } from "react";

const FilterComponent = ({ onClick, activeFilter }) => {
  const filters = [
    { name: "All", icon: "🍽️" },
    { name: "Fast Delivery", icon: "🕒" },
    { name: "Rating 4.5+", icon: "⭐" },
    { name: "Pure Veg", icon: "🥬" },
    { name: "Cost: Low to High", icon: "💰" },
    { name: "Cost: High to Low", icon: "💸" },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-8'>
      <div className='flex flex-wrap items-center gap-4'>
        {filters.map(filter => (
          <button
            key={filter.name}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeFilter === filter.name
                ? "bg-gray-200 text-gray-800"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => onClick(filter.name)}
          >
            <span className='mr-2'>{filter.icon}</span>
            {filter.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
