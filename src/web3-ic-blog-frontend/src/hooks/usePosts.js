import { useEffect, useState } from 'react';
import { useConnection } from '../context/connection';
import { getBlogContract } from '../utils';

const usePosts = (start, end) => {
  const { provider } = useConnection();
  const [ posts, setPosts ] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const contract = await getBlogContract(provider, false);
        const postsArr = await contract.getPosts(start, end);
        setPosts(postsArr);
      } catch (error) {
        console.error('Error fetching campaign count:', error);
      }
    };

    fetchPost();
  }, [end, provider, setPosts, start]);
  return posts;
};

export default usePosts;
