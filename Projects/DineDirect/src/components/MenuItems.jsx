import { IMAGE_CDN } from "../Utils/constantFile";
const MenuItems = ({ items }) => {
  return (
    <>
      <div className=''>
        {items.map(item => (
          <div
            key={item.card.info.id}
            className='bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between'
          >
            <div className='Description'>
              <h1 className='text-lg font-bold'>{item.card.info.name}</h1>
              <div className='flex flex-col items-start'>
                <span className='mr-2'>₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</span>
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
    </>
  );
};

export default MenuItems;
