import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='modal-overlay absolute inset-0 bg-black opacity-50'></div>

      <div className='modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50'>
        <div className='modal-content py-4 text-left px-6'>
          <h1 className='text-2xl font-semibold'>Confirmation</h1>
          <p className='mt-4'>Are you sure you want to perform this action?</p>
          <div className='mt-6 flex justify-end'>
            <button className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mr-2' onClick={onClose}>
              Cancel
            </button>
            <button className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700' onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
