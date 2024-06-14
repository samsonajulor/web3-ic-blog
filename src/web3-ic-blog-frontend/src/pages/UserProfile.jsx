import React, { useState } from 'react';
import Button from '../components/Button';
import SearchButton from '../components/SearchButton';
import CardList from '../components/CardList';
import CreatePostModal from '../components/modals/CreatePostModal';
import usePosts from '../hooks/usePosts';

const UserProfile = () => {
  const posts = usePosts(0, 6);
  
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const handleCreatePost = async () => {
    setIsCreatePostModalOpen(false);
  };

  const handleSearch = (query) => {
    alert(`Performing search for: ${query}`);
  };

  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col container mx-auto py-8 items-center justify-center'>
        <Button text='Create Post' onClick={() => setIsCreatePostModalOpen(true)} />
        <CreatePostModal
          isOpen={isCreatePostModalOpen}
          onClose={() => setIsCreatePostModalOpen(false)}
          onSubmit={handleCreatePost}
        />
        <SearchButton onSearch={handleSearch} />
        <CardList posts={posts} />
      </div>
    </div>
  );
};

export default UserProfile;
