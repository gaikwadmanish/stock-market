import { Route } from '@angular/router';
import { MainLayoutComponent } from '@trading-sphere/stock-market/shared/ui';
export const stockMarketAppRoutes: Route[] = [
  {
    path: 'stocks',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('@trading-sphere/stock-market/stocks/shell').then(
        (m) => m.StocksShellModule,
      ),
  },
  {
    path: '',
    redirectTo: '/stocks',
    pathMatch: 'full',
  },
];
