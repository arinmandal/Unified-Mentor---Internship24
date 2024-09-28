const ShimmerMenuItems = () => {
  // Added props
  return (
    <div className='container mx-auto px-4 py-8 min-h-screen'>
      <div className='container mx-auto px-4 py-8 bg-white rounded-md'>
        <div className='container mx-auto p-4'>
          <h1 className='mb-4 animate-pulse bg-gray-400 h-8 w-1/5 rounded-md'></h1>
          <div className='bg-white rounded-lg shadow-md p-4'>
            <div className='flex items-center mb-2'>
              <div className='flex items-center'>
                <span className='bg-gray-400 font-medium h-4 rounded-md w-6 animate-pulse'></span>
              </div>
              <span className='ml-3 bg-gray-300 h-4 w-28 rounded-md animate-pulse'></span>
            </div>
            <p className='text-sm mb-2 h-3 w-28 bg-slate-400 animate-pulse'></p>
            <ul className='pl-4'>
              <li className='mb-1 h-6 bg-gray-300 rounded w-2/12 mt-2 animate-pulse'></li>
              <li className='mb-1 h-6 bg-gray-300 rounded w-2/12 mt-2 animate-pulse'></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShimmerMenuItems;
