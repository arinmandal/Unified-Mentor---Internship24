import { useState } from "react";
const SearchCom = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");


  const InputChanges = e => {
    setSearchText(e.target.value);
    // onSearch(e.target.value);
  };
  const getResult = () => {
    onSearch(searchText);
  };
  return (
    <div className='w-full  mx-auto p-2 sm:p-4'>
      <div className='flex flex-col sm:flex-row mt-2'>
        <input
          type='text'
          placeholder='Search for restaurants...'
          value={searchText}
          onChange={InputChanges}
          className='text-black w-full sm:flex-grow px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2 sm:mb-0'
        />
        <button
          className='w-full sm:w-auto bg-orange-500 text-white py-2 px-4 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50'
          onClick={getResult}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchCom;
