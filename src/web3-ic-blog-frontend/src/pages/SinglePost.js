import React, { useState } from 'react';
import Content from '../components/Content';
import { useParams } from 'react-router-dom';
import UserDetailsModal from '../components/modals/UserDetailsModal';
import ConfirmationModal from '../components/modals/ConfirmModal';
import Icon from '../components/icons/Icons';
import usePost from '../hooks/usePost';

const user = {
  id: 1,
  name: 'John Doe',
  status: 'Active',
  postsCount: 10,
  ethereumAddress: '0xAbCdEfGhIjKlMnOpQrStUvWxYz',
};

const SinglePost = () => {
  const { id } = useParams();
  console.log(id, 'id')
  const { post, state } = usePost(id);

  console.log(post, 'post');
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleDonateOpenModal = () => {
    setIsDonateModalOpen(true);
  };

  const handleSubmit = () => {
    alert('Submit action performed!');
  };

  const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);

  return (
    <>
      {state === 'LOADED' && <Content text={post[0]} />}
      <div className='container mx-auto py-8 flex items-center justify-center'>
        <div className='mr-8'>
          <Icon onClick={() => setIsUserDetailsModalOpen(true)} text={'about me'} />
          <UserDetailsModal
            isOpen={isUserDetailsModalOpen}
            onClose={() => setIsUserDetailsModalOpen(false)}
            user={user}
          />
        </div>
        <div>
          <Icon onClick={handleDonateOpenModal} text={'tip me'} />
          <ConfirmationModal
            isOpen={isDonateModalOpen}
            onClose={() => setIsDonateModalOpen(false)}
            onConfirm={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
