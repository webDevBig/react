import { Button, Typography } from '@material-ui/core';
import { localStorageKey } from './config';
import { Modal } from '../../hooks/Modal';

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({
  account,
  logout,
  onDismiss = () => null,
}) => (
  <Modal title='Connect to a wallet' onDismiss={onDismiss}>
    <Typography variant='h6'>{account}</Typography>
    {/* <Flex mb="32px">
      <LinkExternal small href={`https://bscscan.com/address/${account}`} mr="16px">
        View on BscScan
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex> */}

    <Button
      onClick={() => {
        logout();
        window.localStorage.removeItem(localStorageKey);
        onDismiss();
      }}
    >
      Logout
    </Button>
  </Modal>
);

export default AccountModal;
