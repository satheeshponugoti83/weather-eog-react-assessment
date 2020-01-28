import { reducer as weatherReducer } from '../Features/Weather/reducer';
import { reducer as metricsReducer } from '../Features/MetricSelect/reducer';
import { reducer as realTimeMeasurementsReducer } from '../Features/WeatherTimePanel/reducer';
import { reducer as realTimeChartReducer } from '../Features/WeatherTimeChart/reducer';

export default {
  weather: weatherReducer,
  metrics: metricsReducer,
  realTimeMeasurements: realTimeMeasurementsReducer,
  realTimeChart: realTimeChartReducer,
};
