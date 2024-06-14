import { useEffect, useState, useContext } from 'react';
import { Connection } from '../context/connection';
import { ethers } from 'ethers';

const useBalance = (address) => {
  const [balance, setBalance] = useState('0');

  const useConnection = () => useContext(Connection);

  const { provider } = useConnection();
  useEffect(() => {
    if (!address) return;
    provider
      .getBalance(address)
      .then((res) => setBalance(ethers.formatEther(res)))
      .catch((err) => console.error(err));
  }, [address, provider]);

  return balance;
};

export default useBalance;
