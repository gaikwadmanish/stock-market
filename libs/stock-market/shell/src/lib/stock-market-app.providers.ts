import {
  EnvironmentProviders,
  Provider,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { stockMarketAppRoutes } from './stock-market.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { en_GB, NZ_I18N } from 'ng-zorro-antd/i18n';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from '@trading-sphere/shared/config';

export const stockMarketAppProviders: Array<Provider | EnvironmentProviders> = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(stockMarketAppRoutes, withComponentInputBinding()),
  provideHttpClient(),
  provideAnimations(),
  {
    provide: NZ_I18N,
    useValue: en_GB,
  },
  provideTransloco({
    config: {
      availableLangs: ['en'],
      defaultLang: 'en',
      reRenderOnLangChange: true,
    },
    loader: TranslocoHttpLoader,
  }),
];
