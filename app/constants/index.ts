import { DepositProps, MarketProps, MemberProps } from "../types";

const NAV = [
  { name: "Pasar", href: "#" },
  { name: "Tentang Kami", href: "#" },
  { name: "Kontak Kami", href: "#" },
];

const MARKET: MarketProps[] = [
  {
    id: 1,
    pair: "BTC/DAI",
    lastPrice: "98,832.93 / Rp 1,612,213,281.72",
    change24h: "+3.89%",
    highLow24h: "102,451.34 / Rp 94,288.07",
    marketCap: "Rp 31,953.008T",
    volume24h: "1.2T",
    isFavorite: true,
  },
  {
    id: 2,
    pair: "ETH/DAI",
    lastPrice: "98,832.93 / Rp 1,612,213,281.72",
    change24h: "-1.21%",
    highLow24h: "102,451.34 / Rp 94,288.07",
    marketCap: "Rp 31,953.008T",
    volume24h: "800B",
  },
  {
    id: 3,
    pair: "XRP/ETH",
    lastPrice: "98,832.93 / Rp 1,612,213,281.72",
    change24h: "+0.56%",
    highLow24h: "102,451.34 / Rp 94,288.07",
    marketCap: "Rp 31,953.008T",
    volume24h: "500B",
  },
  {
    id: 4,
    pair: "BTC/DAI",
    lastPrice: "98,832.93 / Rp 1,612,213,281.72",
    change24h: "-2.34%",
    highLow24h: "102,451.34 / Rp 94,288.07",
    marketCap: "Rp 31,953.008T",
    volume24h: "300B",
  },
  {
    id: 5,
    pair: "BTC/DAI",
    lastPrice: "98,832.93 / Rp 1,612,213,281.72",
    change24h: "+4.12%",
    highLow24h: "102,451.34 / Rp 94,288.07",
    marketCap: "Rp 31,953.008T",
    volume24h: "400B",
  },
];

const MEMBERS: MemberProps[] = [
  {
    email: "ronald@example.com",
    username: "Ronald",
    fullName: "Ronald Watson",
    isActive: true,
    kyc: "No-Kyc",
  },
  {
    email: "cody@example.com",
    username: "Cody",
    fullName: "Cody Cooper",
    isActive: true,
    kyc: "No-Kyc",
  },
  {
    email: "shaw@example.com",
    username: "Shawn",
    fullName: "Shaw Nguyen",
    isActive: false,
    kyc: "No-Kyc",
  },
];

const DEPOSITS: DepositProps[] = [
  {
    depositId: "DEPO-IDR-041024165727",
    asset: "IDR",
    amountNett: "95.000",
    status: "Success",
  },
  {
    depositId: "DEPO-IDR-041024165728",
    asset: "IDR",
    amountNett: "95.000",
    status: "Rejected",
  },
];

const TABLE_HEADERS = {
  pasangan: "Pasangan",
  hargaTerakhir: "Harga Terakhir",
  perubahan24Jam: "Perubahan 24jam",
  tertinggi: "Tertinggi / Terendah 24jam",
  kapitalisasiPasar: "Kapitalisasi Pasar",
  volume24Jam: "Volume 24 Jam",
};

const COINS = ["idr", "usd", "bnb", "btc", "alts"];

const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "menu_dashboard",
    selected: true,
  },
  { name: "Deposit", href: "/transactions", icon: "menu_deposit" },
  { name: "Withdraw", href: "/settings", icon: "menu_withdraw" },
  { name: "Member", href: "/settings", icon: "menu_member" },
  { name: "Verification (KYC)", href: "/settings", icon: "menu_kyc" },
  { name: "Reset 2FA Request", href: "/settings", icon: "menu_reset_2fa" },
  { name: "Daily Report", href: "/settings", icon: "menu_daily_report" },
  { name: "Setting", href: "/settings", icon: "menu_setting" },
];

const TABLE_HEADERS_MEMBER = [
  "No",
  "Email",
  "Username",
  "Name",
  "Status",
  "Kyc",
];

const TABLE_HEADERS_DEPOSIT = [
  "No",
  "Deposit ID",
  "Asset",
  "Amount Nett",
  "Status",
];

export {
  NAV,
  MARKET,
  MEMBERS,
  DEPOSITS,
  TABLE_HEADERS,
  COINS,
  SIDEBAR_ITEMS,
  TABLE_HEADERS_MEMBER,
  TABLE_HEADERS_DEPOSIT,
};
