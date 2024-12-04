export enum PriceDefinition {
  TOKEN = "TOKEN",
  SOCIAL = "SOCIAL",
  ONCHAIN = "ONCHAIN",
  REALMS = "REALMS",
}

export enum TickerType {
  DEFI = "DEFI",
  INFRA = "INFRA",
}

export enum MarketType {
  POOL = "POOL",
  SINGLE = "SINGLE",
}

export enum MarketCategory {
  DEFI = "DEFI",
  NFT = "NFT",
  SPORTS = "SPORTS",
  GAMING = "GAMING",
  SOCIAL = "SOCIAL",
}

export type Market = {
  bump: number;
  address: string;
  authority: string;
  marketId: string;
  hypePrice: number;
  flopPrice: number;
  hypeLiquidity: string;
  flopLiquidity: string;
  marketLiquidityAtStart: string;
  hypeShares: string;
  flopShares: string;
  volume: string;
  mint: string;
  updateTs: string;
  openedOrders: string;
  nextOrderId: string;
  feeBps: number;
  isActive: boolean;
  marketStart: string;
  marketEnd: string;
  question: string;
  nftHoldersFeeAvailable: string;
  nftHoldersFeeClaimed: string;
  marketFeeAvailable: string;
  marketFeeClaimed: string;
  winningDirection: string;
  totalVolume: number;
  openBets: number;
  priceChange24h: null;
  image: string;
};
