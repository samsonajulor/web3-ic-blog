import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePosts from '../hooks/usePosts';
import Button from '../components/Button';
import CardList from '../components/CardList';

const Home = () => {
  const navigate = useNavigate();
  const posts = usePosts(0, 6);
  console.log(posts, 'posts')

  const handleRegister = () => {
    navigate('/user');
  };
  return (
    <div className='flex flex-col container mx-auto py-8 items-center justify-center'>
      <Button text='Register' onClick={handleRegister} />
      <CardList posts={posts} />
    </div>
  );
};

export default Home;
