import React from 'react';

const UserDetailsModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='modal-overlay absolute inset-0 bg-black opacity-50'></div>

      <div className='modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 relative'>
        <div className='modal-close absolute top-2 right-2 cursor-pointer text-white text-xl z-50'>
          <button
            onClick={onClose}
            className='w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500'
          >
            &times;
          </button>
        </div>

        <div className='modal-content py-4 text-left px-6'>
          <h1 className='text-2xl font-semibold'>User Details</h1>
          <div className='mt-4'>
            <p className='font-semibold'>Status:</p>
            <p className='mt-2'>{user.status}</p>
          </div>
          <div className='mt-4'>
            <p className='font-semibold'>Number of Posts Created:</p>
            <p className='mt-2'>{user.postsCount}</p>
          </div>
          <div className='mt-4'>
            <p className='font-semibold'>Ethereum Address:</p>
            <p className='mt-2'>{user.ethereumAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
