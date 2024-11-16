import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { stockMarketAppRoutes } from './stock-market.routes';

export const stockMarketAppConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(stockMarketAppRoutes),
  ],
};
