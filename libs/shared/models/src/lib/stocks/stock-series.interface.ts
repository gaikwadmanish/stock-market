import { StockMetricPeriodValue } from './stock-metric-period-value.interface';

export interface StockSeries {
  annual: {
    currentRatio: StockMetricPeriodValue[];
    salesPerShare: StockMetricPeriodValue[];
    netMargin: StockMetricPeriodValue[];
  };
}
