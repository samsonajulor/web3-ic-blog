import React from 'react';

const UserProfileIcon = ({ onClick, text }) => {
  return (
    <div className='cursor-pointer relative text-brown-600 hover:text-brown-800' onClick={onClick}>
      <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <div className='bg-brown-800 text-black text-xs p-2 rounded-lg bottom-full'>{text}</div>
    </div>
  );
};

export default UserProfileIcon;
