import { Config } from './types';

const getIcon = (name: string) => `/static/icons/wallet_icons/${name}.svg`;

const ICONS = {
  metamask: getIcon('metamask'),
  TrustWallet: getIcon('trustWallet'),
  MathWallet: getIcon('MathWallet'),
  TokenPocket: getIcon('TokenPocket'),
  WalletConnect: getIcon('WalletConnect'),
  bsc: getIcon('bsc'),
};

const connectors: Config[] = [
  {
    title: 'Metamask',
    connectorId: 'injected',
    icon: ICONS.metamask,
  },
  {
    title: 'TrustWallet',
    connectorId: 'injected',
    icon: ICONS.TrustWallet,
  },
  {
    title: 'MathWallet',
    connectorId: 'injected',
    icon: ICONS.MathWallet,
  },
  {
    title: 'TokenPocket',
    connectorId: 'injected',
    icon: ICONS.TokenPocket,
  },
  {
    title: 'WalletConnect',
    connectorId: 'walletconnect',
    icon: ICONS.WalletConnect,
  },
  {
    title: 'Binance Chain Wallet',
    connectorId: 'bsc',
    icon: ICONS.bsc,
  },
];

export default connectors;
export const localStorageKey = 'accountStatus';
