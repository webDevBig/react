import { useWallet } from '@binance-chain/bsc-use-wallet';
import { Button, Box } from '@material-ui/core';
import axios from 'axios';
import { createSuper } from 'typescript';
import { networkSetup } from '../../utils/networkSetup';
import { localStorageKey } from './config';

const WalletCard = ({ login, walletConfig, onDismiss }: any) => {
  const apiURL = process.env.REACT_APP_API_URL;
  const { title, icon } = walletConfig;
  const currentChainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);

  return (
    <Button
      fullWidth
      onClick={() => {
        if (Boolean(true)) {
          networkSetup(currentChainId)
            .then(async () => {
              await login(walletConfig.connectorId);
              window.localStorage.setItem(localStorageKey, '1');
              onDismiss();
            })
            .catch((e) => {
              console.error(e);
            });
        }
      }}
      style={{ justifyContent: 'space-between' }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      className='mdl_c_btn'
    >
      {title}

      <Box component='img' alt={''} src={icon} height='30px' />
    </Button>
  );
};

export default WalletCard;
