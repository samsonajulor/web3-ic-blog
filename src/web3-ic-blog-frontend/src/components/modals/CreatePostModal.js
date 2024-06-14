import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useConnection } from '../../context/connection';
import useCreatePost from '../../hooks/useCreatePost';

const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
  const { isActive } = useConnection();
  const [postContent, setPostContent] = useState('');
  const [sendingTx, setSendingTx] = useState(false);
  const createPost = useCreatePost();
  
  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleSubmit = async () => {
    onSubmit();
    if (!postContent) return toast.info('Please provide all values');
    if (!isActive) {
      console.log(isActive, 'isActive');
      return toast.info('please, connect');
    }
    try {
      const tx = await createPost(postContent);
      const receipt = await tx.wait();
      if (receipt.status === 0) return toast.error('tx failed');
      toast.success('post created!!');
    } catch (error) {
      console.log('error: ', error);
      if (error.info.error.code === 4001) {
        return toast.error('You rejected the request');
      }
      toast.error('something went wrong');
    } finally {
      setSendingTx(false);
      setPostContent('');
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'visible' : 'invisible'}`}>
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
          <h1 className='text-2xl font-semibold'>Create a New Post</h1>
          <textarea
            className='w-full h-32 mt-2 p-2 rounded border focus:outline-none focus:border-blue-500'
            placeholder='Write your post...'
            value={postContent}
            onChange={handleInputChange}
          />
          <div className='mt-4'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700' onClick={handleSubmit}>
              create post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
