import React, { useState } from 'react';

const SearchButton = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className='flex items-center mt-3 mb-3'>
      <input
        type='text'
        placeholder='Search...'
        className='p-2 border rounded-l border-brown-500 bg-brown-100 text-brown-800 focus:outline-none'
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button
        className='px-4 py-2 bg-brown-600 text-gray rounded-r hover:bg-brown-800 mt-1 mb-1'
        onClick={handleSearch}
      >
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 fill-current inline-block mr-2' viewBox='0 0 24 24'>
          <path
            fillRule='evenodd'
            d='M21.293 19.88a1 1 0 01-1.32.083l-3.78-2.12a8.5 8.5 0 111.414-1.414l3.78 2.12a1 1 0 01.083 1.32zM13.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchButton;
