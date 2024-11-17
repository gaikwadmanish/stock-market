import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockApiService } from '@stock-market/stocks-data-access';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'lib-stocks-search',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzDividerModule],
  templateUrl: './stocks-search.component.html',
})
export class StocksSearchComponent implements OnInit {
  stockApiService = inject(StockApiService);
  listOfData: Array<{ name: string; age: number; address: string }> = [];

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King`,
        age: 32,
        address: `LondonLondonLondonLondonLondon`,
      });
    }
  }
}
