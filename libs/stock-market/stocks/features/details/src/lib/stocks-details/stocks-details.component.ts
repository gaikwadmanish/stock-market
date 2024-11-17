import { Component, input, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
@Component({
  selector: 'lib-stocks-details',
  standalone: true,
  imports: [NzCardModule, NzGridModule, NzIconModule, NzStatisticModule],
  templateUrl: './stocks-details.component.html',
})
export class StocksDetailsComponent implements OnInit {
  stockSymbol = input.required<string>();
  stockDetails = {
    series: {
      annual: {
        currentRatio: [
          {
            period: '2019-09-28',
            v: 1.5401,
          },
          {
            period: '2018-09-29',
            v: 1.1329,
          },
        ],
        salesPerShare: [
          {
            period: '2019-09-28',
            v: 55.9645,
          },
          {
            period: '2018-09-29',
            v: 53.1178,
          },
        ],
        netMargin: [
          {
            period: '2019-09-28',
            v: 0.2124,
          },
          {
            period: '2018-09-29',
            v: 0.2241,
          },
        ],
      },
    },
    metric: {
      '10DayAverageTradingVolume': 32.5,
      '52WeekHigh': 310.43,
      '52WeekLow': 149.22,
      '52WeekLowDate': '2019-01-14',
      '52WeekPriceReturnDaily': 101.96,
      beta: 1.2989,
    },
    metricType: 'all',
    symbol: 'AAPL',
  };
  ngOnInit(): void {
    console.log(this.stockSymbol(), history.state.description);
  }
}
