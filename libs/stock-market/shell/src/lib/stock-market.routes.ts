import { Route } from '@angular/router';

export const stockMarketAppRoutes: Route[] = [
  {
    path: 'stocks',
    loadChildren: () =>
      import('@stock-market/stocks-shell').then((m) => m.StocksShellModule),
  },
  {
    path: '',
    redirectTo: '/stocks',
    pathMatch: 'full',
  },
];
