import { bootstrapApplication } from '@angular/platform-browser';
import { StockMarketAppComponent } from './app/stock-market.component';
import { stockMarketAppProviders } from '@stock-market/stock-market-shell';
import { provideAppConfig } from '@stock-market/shared-config';
import { environment } from './environments/environment';
bootstrapApplication(StockMarketAppComponent, {
  providers: [...stockMarketAppProviders, provideAppConfig(environment)],
}).catch((err) => console.log('Error', err));
