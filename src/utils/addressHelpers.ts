import addresses from '../config/constants/contracts';

const chainId = process.env.REACT_APP_CHAIN_ID;

export const getRewardAddress = () => {
  return addresses.rewards[chainId];
};
