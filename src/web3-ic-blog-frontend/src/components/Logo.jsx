import React from 'react';

const Logo = ({address}) => {
  return (
    <>
        <div className='bg-white-200 rounded-lg p-4 text-brown-500 font-serif text-xl'>{address}</div>
    </>
  );
};

export default Logo;
