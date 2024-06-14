import { useCallback, useState, useEffect } from 'react';
import { useConnection } from '../context/connection';
import {
  calculateGasMargin,
  getBlogContract, getMulticall2ContractWithProvider,
  getBlogInterface
} from '../utils';
import { blogContractAddress } from '../constants/addresses';

const usePost = (id) => {
    const [post, setPost] = useState(null);
    const [state, setState] = useState("LOADING");
  const { provider } = useConnection();

  const fetchPost = useCallback(
    async () => {
      if (!id) return setState('NOT_FOUND');
      try {
            const multicall2Contract = getMulticall2ContractWithProvider(provider);

            const croundFundInterface = getBlogInterface();

            const calls = [
              {
                target: blogContractAddress,
                callData: croundFundInterface.encodeFunctionData('getPost', [id]),
              },
            ];

            const callsResult = (await multicall2Contract.aggregate.staticCall(calls))[1].toArray();

            const postContent = croundFundInterface.decodeFunctionResult('getPost', callsResult[0]).toArray();

            setPost(postContent);
            setState('LOADED');
      } catch (error) {
            console.error('Error fetching campaigns:', error);
            setState('NOT_FOUND');
      }
    },
    [id, provider]);

    useEffect(() => {
        fetchPost();
    }, [fetchPost, id, provider]);

  return { post, state };
};

export default usePost;
