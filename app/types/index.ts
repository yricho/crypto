export type MarketProps = {
  id: number;
  isFavorite?: boolean;
  pair: string;
  lastPrice: string;
  change24h: string;
  highLow24h: string;
  marketCap: string;
  volume24h: string;
};

export type MemberProps = {
  email: string;
  username: string;
  fullName: string;
  isActive: boolean;
  kyc: string;
};

export type DepositProps = {
  depositId: string;
  asset: string;
  amountNett: string;
  status: string;
};

export type MarketItemProps = {
  pair: string;
  price: string;
  change: number;
  volume: number;
};

export type SidebarItemProps = {
  name: string;
  href: string;
  icon: string;
  selected: boolean;
};

export type SidebarProps = {
  onSelected?: (name: string) => void;
};

export type ButtonProps = {
  label: string;
  onClick: () => void;
  style?: string;
};
