import { inject, Injectable } from '@angular/core';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { AppStoreBaseState, StockSymbol } from '@trading-sphere/shared/models';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { StockApiService } from '../api/stocks-api.service';

export type StockSymbolsState = AppStoreBaseState<StockSymbol[]>;

export const initialStockSymbolState: StockSymbolsState = {
  status: 'pending',
  error: null,
  data: null,
};

@Injectable()
export class StockSymbolsStore
  extends ComponentStore<StockSymbolsState>
  implements OnStoreInit
{
  private readonly stockApiService = inject(StockApiService);

  readonly $stockSymbolState = this.select((state) => state);
  /**
   * On Store Init
   */
  ngrxOnStoreInit(): void {
    this.setState(initialStockSymbolState);
  }

  /**
   * Handling the effects on the store.
   */
  readonly getStockSymbols = this.effect<void>(
    pipe(
      tap(() => this.patchState({ status: 'loading' })),
      switchMap(() =>
        this.stockApiService.getStockList().pipe(
          tapResponse(
            (stockSymbols: StockSymbol[]) => {
              this.patchState({
                data: stockSymbols,
                status: 'success',
              });
            },
            (error: Error) => {
              this.patchState({
                status: 'error',
                error: error.message ?? 'error',
              });
            },
          ),
        ),
      ),
    ),
  );
}
