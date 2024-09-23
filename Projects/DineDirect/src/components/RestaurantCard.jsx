import { IMAGE_CDN } from "../Utils/constantFile";

export const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  sla,
  costForTwo,
  cloudinaryImageId,
  id,
}) => {
  return (
    <>
      <div
        key={id}
        className='w-64 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
      >
        <img
          className='w-full h-40 object-cover rounded-t-lg'
          src={IMAGE_CDN + cloudinaryImageId}
          alt={name}
        />
        <div className='mt-3'>
          <h3 className='font-bold text-lg text-gray-800'>{name}</h3>
          <p className='text-sm text-gray-600'>{cuisines.join(", ")}</p>
          <div className='flex items-center mt-2'>
            <span className='text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded'>
              {avgRating} ★
            </span>
            <span className='text-xs text-gray-500 ml-2'>{sla.slaString}</span>
          </div>
        </div>
        <p className='text-sm text-gray-500 mt-2'>{costForTwo}</p>
      </div>
    </>
  );
};

export default RestaurantCard;
