export type ConnectorId =
  | 'authereum'
  | 'fortmatic'
  | 'frame'
  | 'injected'
  | 'portis'
  | 'squarelink'
  | 'torus'
  | 'walletconnect'
  | 'walletlink'
  | 'bsc';

export type Login = (connectorId: ConnectorId) => void;

export interface Config {
  title: string;
  connectorId: ConnectorId;
  icon?: any;
}
