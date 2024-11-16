import { bootstrapApplication } from '@angular/platform-browser';
import { StockMarketAppComponent } from './app/stock-market.component';
import { stockMarketAppConfig } from '@stock-market/stock-market-shell';
bootstrapApplication(StockMarketAppComponent, stockMarketAppConfig).then