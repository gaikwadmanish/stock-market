import { Routes } from '@angular/router';

export const stocksShellRoutes: Routes = [
  {
    path: 'search',
    loadComponent: () =>
      import('@stock-market/stocks/search').then(
        (c) => c.StocksSearchComponent,
      ),
  },
  {
    path: 'details/:stockSymbol',
    loadComponent: () =>
      import('@stock-market/stocks/details').then(
        (c) => c.StocksDetailsComponent,
      ),
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'prefix',
  },
];
