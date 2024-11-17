import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@stock-market/shared-config';
import { Observable } from 'rxjs';
import { StockSymbol } from '@stock-market/shared-models';

@Injectable({
  providedIn: 'root',
})
export class StockApiService {
  httpClient = inject(HttpClient);
  appConfig = inject(APP_CONFIG);

  getStockList(): Observable<StockSymbol[]> {
    return this.httpClient.get<StockSymbol[]>(
      `${this.appConfig.apiBaseUrl}/symbol?exchange=AS`
    );
  }
}
