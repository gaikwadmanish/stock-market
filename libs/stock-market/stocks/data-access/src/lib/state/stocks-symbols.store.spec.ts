import { TestBed } from '@angular/core/testing';
import {
  StockSymbolsStore,
  initialStockSymbolState,
} from './stocks-symbols.store';
import { StockApiService } from '../api/stocks-api.service';
import { of, throwError } from 'rxjs';
import { StockSymbol } from '@stock-market/shared-models';

describe('StockSymbolsStore', () => {
  let store: StockSymbolsStore;
  let stockApiServiceMock: jest.Mocked<StockApiService>;

  beforeEach(() => {
    // Create a mock for the StockApiService
    stockApiServiceMock = {
      getStockList: jest.fn(),
    } as unknown as jest.Mocked<StockApiService>;

    // Configure TestBed
    TestBed.configureTestingModule({
      providers: [
        StockSymbolsStore,
        { provide: StockApiService, useValue: stockApiServiceMock },
      ],
    });

    // Inject the store
    store = TestBed.inject(StockSymbolsStore);
  });

  it('should initialize with the correct state', (done) => {
    store.$stockSymbolState.subscribe((state) => {
      expect(state).toEqual(initialStockSymbolState);
      done();
    });
  });

  it('should handle successful getStockSymbols effect', (done) => {
    const mockStockSymbols: StockSymbol[] = [
      //   { symbol: 'AAPL', name: 'Apple Inc.' },
      //   { symbol: 'GOOGL', name: 'Alphabet Inc.' },
    ];

    // Mock API call
    stockApiServiceMock.getStockList.mockReturnValue(of(mockStockSymbols));

    // Subscribe to state updates
    store.$stockSymbolState.subscribe((state) => {
      if (state.status === 'success') {
        expect(state.data).toEqual(mockStockSymbols);
        expect(state.status).toBe('success');
        expect(state.error).toBeNull();
        done();
      }
    });
  });

  it('should handle error in getStockSymbols effect', (done) => {
    const mockError = new Error('API failure');

    // Mock API call
    stockApiServiceMock.getStockList.mockReturnValue(
      throwError(() => mockError),
    );

    // Subscribe to state updates
    store.$stockSymbolState.subscribe((state) => {
      if (state.status === 'error') {
        expect(state.data).toBeNull();
        expect(state.status).toBe('error');
        expect(state.error).toBe('API failure');
        done();
      }
    });

    // Trigger the effect
    // store.getStockSymbols();
  });
});
