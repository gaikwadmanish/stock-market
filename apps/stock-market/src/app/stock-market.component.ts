import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { stockMarketAppRoutes } from 'libs/stock-market/shell/src/lib/stock-market.routes';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'stock-market-root',
  template: `<h1>Stock Market App</h1>
    <router-outlet></router-outlet>`,
})
export class StockMarketAppComponent {}
