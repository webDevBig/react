import config from './config';
import WalletCard from './WalletCard';
import { Modal } from '../../hooks/Modal';
import { Login } from './types';
interface Props {
  login: Login;
  onDismiss?: () => void;
}

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  return (
    <Modal title='Connect to a wallet' onDismiss={onDismiss}>
      {config.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
        />
      ))}
      {/* <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={2} mb={2}>
        <a href="#" className="lrn_btn">
          <HelpOutlineIcon sx={{fontSize: 26, mr: '5px'}} />
          Learn how to connect
        </a>
      </Box> */}
    </Modal>
  );
};

export default ConnectModal;
