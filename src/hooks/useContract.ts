import { getRewardAddress } from './../utils/addressHelpers';
import { useEffect, useState } from 'react';
import { AbiItem } from 'web3-utils';
import { ContractOptions } from 'web3-eth-contract';
import useWeb3 from '../hooks/useWeb3';
import RewardABI from '../abi/rewards.json';

const useContract = (
  abi: AbiItem,
  address: string,
  contractOptions?: ContractOptions
) => {
  const web3 = useWeb3();
  const [contract, setContract] = useState(
    new web3.eth.Contract(abi, address, contractOptions)
  );

  useEffect(() => {
    setContract(new web3.eth.Contract(abi, address, contractOptions));
  }, [abi, address, contractOptions, web3]);

  return contract;
};

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useRewardContarct = () => {
  const abi = RewardABI.abi as unknown as AbiItem;
  return useContract(abi, getRewardAddress());
};

export default useContract;
