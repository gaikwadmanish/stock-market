import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StocksSearchComponent } from './stocks-search.component';
import { provideHttpClient } from '@angular/common/http';
import { provideComponentStore } from '@ngrx/component-store';
import {
  StockApiService,
  StockSymbolsStore,
} from '@stock-market/stocks/data-access';
import { provideAppConfig } from '@trading-sphere/shared/config';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

describe('StocksSearchComponent', () => {
  let component: StocksSearchComponent;
  let fixture: ComponentFixture<StocksSearchComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StocksSearchComponent],
      providers: [
        provideAppConfig({
          apiBaseUrl: 'http://localhost:3000',
          production: true,
          apiKey: '',
        }),
        provideHttpClient(),
        provideComponentStore(StockSymbolsStore),
        StockApiService,
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StocksSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show table row if data is not present', () => {
    jest
      .spyOn(StockApiService.prototype, 'getStockList')
      .mockReturnValue(of([]));
    const compiled = fixture.nativeElement as HTMLElement;
    const tableRows = compiled.querySelectorAll('tbody tr');
    expect(tableRows.length).toEqual(0);
  });

  it('should render table if data is present', () => {
    jest.spyOn(StockApiService.prototype, 'getStockList').mockReturnValue(
      of([
        {
          currency: 'USD',
          description: 'PUBLIC STORAGE - PSA 4.1 PERP',
          displaySymbol: 'PSA.PRS',
          figi: 'BBG014CSSDT5',
          isin: '',
          mic: 'XNYS',
          shareClassFIGI: '',
          symbol: 'PSA.PRS',
          symbol2: '',
          type: 'PUBLIC',
        },
      ]),
    );
    const compiled = fixture.nativeElement as HTMLElement;
    const tableRows = compiled.querySelectorAll('tbody tr');
    expect(tableRows.length).toEqual(1);
  });
});
