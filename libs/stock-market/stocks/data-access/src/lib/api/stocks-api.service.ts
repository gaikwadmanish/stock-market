import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@trading-sphere/shared/config';
import { Observable } from 'rxjs';
import { StockSymbol } from '@trading-sphere/shared/models';

@Injectable()
export class StockApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly appConfig = inject(APP_CONFIG);

  getStockList(): Observable<StockSymbol[]> {
    return this.httpClient.get<StockSymbol[]>(
      `${this.appConfig.apiBaseUrl}api/v1/stocks?limit=1000`,
    );
  }
}
