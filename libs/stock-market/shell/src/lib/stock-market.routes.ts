import { Route } from '@angular/router';
import { MainLayoutComponent } from '@stock-market/shared-ui';

export const stockMarketAppRoutes: Route[] = [
  {
    path: 'stocks',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('@stock-market/stocks-shell').then((m) => m.StocksShellModule),
  },
  {
    path: '',
    redirectTo: '/stocks',
    pathMatch: 'full',
  },
];
