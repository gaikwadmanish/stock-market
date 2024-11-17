import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockApiService } from '@stock-market/stocks-data-access';
@Component({
  selector: 'lib-stocks-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stocks-search.component.html',
})
export class StocksSearchComponent implements OnInit {
  stockApiService = inject(StockApiService);
  ngOnInit(): void {
    this.stockApiService.getStockList();
  }
}
