import { bootstrapApplication } from '@angular/platform-browser';
import { StockMarketAppComponent } from './app/stock-market.component';
import { stockMarketAppProviders } from '@stock-market/shell';
import { provideAppConfig } from '@trading-sphere/shared/config';
import { environment } from './environments/environment';
bootstrapApplication(StockMarketAppComponent, {
  providers: [...stockMarketAppProviders, provideAppConfig(environment)],
}).catch((err) => console.log('Error', err));
