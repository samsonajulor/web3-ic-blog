import React from 'react';
import { formatEther } from 'ethers';
import { formatDate, shortenAccount } from '../utils';

const Content = ({ text }) => {
  return (
    <div className='bg-white rounded p-4 shadow-md text-center'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>{text?.title}</h2>
      <p className='text-gray-800 text-lg'>
        <span>Posted by: </span>
        {shortenAccount(text?.poster)}
      </p>
      <p className='text-gray-600 text-sm mb-4'>
        <span>Date: </span>
        {formatDate(Number(text?.timePosted))}
      </p>
      <p className='text-gray-800 text-lg'>{text?.content}</p>
      <p className='text-gray-800 text-lg'>
        <span>Total Tips: </span>
        {formatEther(text?.tips)}
      </p>
    </div>
  );
};

export default Content;
