import React from 'react';
import ConnectModal from './ConnectModal';
import AccountModal from './AccountModal';
// import ChainModal from "./ChainModal";
import { Login } from './types';
import { useModal } from '../../hooks/Modal';

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
  // onPresentChainModal: () => void;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  account?: string
): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(
    <AccountModal account={account || ''} logout={logout} />
  );
  // const [onPresentChainModal] = useModal(<ChainModal login={login} />);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
