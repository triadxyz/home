export enum PriceDefinition {
 TOKEN = 'TOKEN',
 SOCIAL = 'SOCIAL',
 ONCHAIN = 'ONCHAIN',
 REALMS = 'REALMS',
}

export enum TickerType {
 DEFI = 'DEFI',
 INFRA = 'INFRA',
}

export type MarketType = {
 id: string;
 pda: string;
 mint: string;
 ticker: string;
 createdAt: string;
 updatedAt: string;
 points: number;
 marketPrice: number;
 tvl: number;
 tickerPrice: number;
 metadata: {
   chart: { value: number; timestamp: number }[];
 };
 liquidity: number;
 about: {
   name: string;
   image: string;
   description: string;
   website: string;
   discord: string;
   twitter: string;
 };
 type: string;
};

export type MarketDetailsType = {
 id: string;
 pda: string;
 mint: string;
 ticker: string;
 createdAt: Date;
 updatedAt: Date;
 points: number;
 tvl: number;
 tickerPrice: number;
 metadata: '';
 liquidity: number;
 about: {
   name: string;
   description: string;
   image: string;
   twitter: string;
   discord: string;
   website: string;
 };
 type: TickerType;
 volume7d: number;
 volumeLong7d: number;
 volumeShort7d: number;
 volume30d: number;
 fundingRate: number;
 tradesLong7d: number;
 tradesShort7d: number;
 trades7d: number;
 priceHigh: number;
 priceLow: number;
 priceDefinition: PriceDefinition[];
 perspective: number;
};