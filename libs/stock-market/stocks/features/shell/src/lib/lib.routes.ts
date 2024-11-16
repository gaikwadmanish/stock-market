import { Routes } from '@angular/router';

export const stocksShellRoutes: Routes = [
  {
    path: 'search',
    loadComponent: () =>
      import('@stock-market/stocks-features-search').then(
        (c) => c.StocksSearchComponent
      ),
  },
  {
    path: 'details',
    loadComponent: () =>
      import('@stock-market/stocks-features-details').then(
        (c) => c.StocksDetailsComponent
      ),
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'prefix'
  }
];
