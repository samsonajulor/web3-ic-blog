import React, { useContext } from 'react';
import Button from './Button';
import Logo from './Logo';
import { Connection } from '../context/connection';
import { shortenAccount } from '../utils';
import { networkInfoMap, supportedChains } from '../constants';
import useBalance from '../hooks/useBalance';
import { toast } from 'react-toastify';

const Header = () => {
  const useConnection = () => useContext(Connection);
  const { account, chainId, isActive, connect, switchToChain } = useConnection();
  const ethBalance = useBalance(account);

  if (!account)
    return (
      <header className='bg-gray-500 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <Logo address={'welcome'} />
          <Button
            text='Connect Wallet'
            onClick={connect}
          />
        </div>
      </header>
    );

  return (
    <header className='bg-gray-500 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Logo address={account ? `${Number(ethBalance).toFixed(2)}ETH <> ${shortenAccount(account)}` : 'welcome'} />
        <Button
          text={isActive ? networkInfoMap[chainId]?.chainName : 'Networks'}
          onClick={() => switchToChain(supportedChains[0])}
        />
      </div>
    </header>
  );
};

export default Header;
