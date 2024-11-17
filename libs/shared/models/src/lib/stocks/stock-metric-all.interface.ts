import { StockMetric } from './stock-metric.interface';
import { StockSeries } from './stock-series.interface';

export interface StockMetricAll {
  series: StockSeries;
  metric: StockMetric;
  metricType: string;
  symbol: string;
}
