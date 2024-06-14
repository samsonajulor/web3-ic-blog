import { ethers, toBigInt } from 'ethers';
import { rpcUrlsMap, supportedChains } from '../constants';
import { blogContractAddress, multcall2ContractAddress, linkTokenContractAddress } from '../constants/addresses';
import blogAbi from '../constants/abis/blog.json';
import multicall2Abi from '../constants/abis/multicall.json';
import linkAbi from '../constants/abis/linkToken.json';

export const isSupportedChain = (chainId) => supportedChains.includes(Number(chainId));

export const shortenAccount = (account) => `${account.substring(0, 6)}...${account.substring(38)}`;

export const getReadOnlyProvider = (chainId) => {
  return new ethers.JsonRpcProvider(rpcUrlsMap[chainId]);
};

export const getContract = async (address, abi, provider, withWrite) => {
  let signer;
  if (withWrite) signer = await provider.getSigner();

  return new ethers.Contract(address, abi, withWrite ? signer : provider);
};

const getInterface = (abi) => new ethers.Interface(abi);
export const getBlogInterface = () => getInterface(blogAbi);

export const getContractWithProvider = (address, abi, provider) => {
  return new ethers.Contract(address, abi, provider);
};

export const getBlogContract = async (provider, withWrite) => {
  return await getContract(blogContractAddress, blogAbi, provider, withWrite);
};

export const getLinkContract = async (provider, withWrite) => {
  return await getContract(linkTokenContractAddress,linkAbi, provider, withWrite);
};

export const getBlogContractWithProvider = (provider) => {
  return getContractWithProvider(blogContractAddress, blogAbi, provider);
};

export const getLinkContractWithProvider = (provider) => {
  return getContractWithProvider(linkTokenContractAddress, linkAbi, provider);
};

export const getMulticall2ContractWithProvider = (provider) => {
  return getContractWithProvider(multcall2ContractAddress, multicall2Abi, provider);
};

export const formatDate = (time) => {
  // Convert the timestamp to milliseconds by multiplying it by 1000
  const date = new Date(time * 1000);

  // Get the year, month, and day components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1 to get the correct month
  const day = date.getDate();

  // Create an array of month names to map the numeric month to its name
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get the month name using the month value as an index in the monthNames array
  const monthName = monthNames[month - 1];

  const formattedDate = `${monthName} ${day}, ${year}`;

  return formattedDate;
};

export const calculateGasMargin = (value) => (toBigInt(value) * toBigInt(120)) / toBigInt(100);
