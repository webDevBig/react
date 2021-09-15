import React, { useEffect } from 'react';
import { Button, Box, Typography, Grid } from '@material-ui/core';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import useWalletModal from './Wallet/useWalletModal';
// import useWalletModal from "./useWalletModal";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline';
import useLocales from '../hooks/useLocales';

interface Props {
  account?: any;
  login: any;
  logout: () => void;
}
const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute !important',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
  });
const Connect: React.FC<Props> = ({ account, login, logout }, props) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account
  );

  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;

  const [open, setOpen] = React.useState(false);

  return (
    <>
      {account ? (
        <Button
          variant='contained'
          color='primary'
          className='def_btn_prmr'
          sx={{ textTransform: 'uppercase' }}
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          variant='outlined'
          color='primary'
          className='def_btn_prmr'
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
};

export default Connect;
