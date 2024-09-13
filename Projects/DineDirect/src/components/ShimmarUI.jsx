export const ShimmarUI = () => {
  return (
    <div className='w-64 p-4 bg-white rounded-lg shadow-md'>
      <div className='w-full h-40 bg-gray-200 rounded-t-lg animate-pulse'></div>
      <div className='mt-3'>
        <div className='h-6 bg-gray-200 rounded w-3/4 animate-pulse'></div>
        <div className='h-4 bg-gray-200 rounded w-1/2 mt-2 animate-pulse'></div>
        <div className='flex items-center mt-2'>
          <div className='h-6 w-12 bg-gray-200 rounded animate-pulse'></div>
          <div className='h-4 w-20 bg-gray-200 rounded ml-2 animate-pulse'></div>
        </div>
      </div>
      <div className='h-4 bg-gray-200 rounded w-1/3 mt-2 animate-pulse'></div>
    </div>
  );
};

export default ShimmarUI;