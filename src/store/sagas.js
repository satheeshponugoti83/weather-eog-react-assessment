import { spawn } from 'redux-saga/effects';
import weatherSaga from '../Features/Weather/saga';
import metricsSaga from '../Features/MetricSelect/saga';
import realTimeSaga from '../Features/WeatherTimePanel/saga';
import realTimeChart from '../Features/WeatherTimeChart/saga';

export default function* root() {
  yield spawn(weatherSaga);
  yield spawn(metricsSaga);
  yield spawn(realTimeSaga);
  yield spawn(realTimeChart);
}
