import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { stocksShellRoutes } from './lib.routes';

@NgModule({
  providers: [provideRouter(stocksShellRoutes)],
})
export class StocksShellModule {}
