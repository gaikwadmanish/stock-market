import {
  EnvironmentProviders,
  Provider,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { stockMarketAppRoutes } from './stock-market.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const stockMarketAppProviders: Array<Provider | EnvironmentProviders> = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(stockMarketAppRoutes),
  provideHttpClient(),
  provideAnimations(),
];
