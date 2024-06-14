import { useEffect, useContext } from 'react';
import { Connection } from '../context/connection';
import { getBlogContract } from '../utils';

const useRegister = () => {
  const useConnection = () => useContext(Connection);
  const { provider } = useConnection();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const contract = await getBlogContract(provider, false);
        await contract.register();
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [provider]);
};

export default useRegister;
