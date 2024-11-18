import { Routes } from '@angular/router';

export const stocksShellRoutes: Routes = [
  {
    path: 'search',
    loadComponent: () =>
      import('@trading-sphere/stock-market/stocks/search').then(
        (c) => c.StocksSearchComponent,
      ),
  },
  {
    path: 'details/:stockSymbol',
    loadComponent: () =>
      import('@trading-sphere/stock-market/stocks/details').then(
        (c) => c.StocksDetailsComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'prefix',
  },
];
