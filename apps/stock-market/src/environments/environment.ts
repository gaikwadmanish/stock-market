import { AppConfig } from '@trading-sphere/shared/config';

export const environment: AppConfig = {
  apiBaseUrl: process.env.STOCK_MARKET_API_URL,
  apiKey: process.env.STOCK_MARKET_API_KEY,
  production: process.env.STOCK_MARKET_PRODUCTION,
};
