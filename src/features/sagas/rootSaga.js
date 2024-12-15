import { all } from 'redux-saga/effects';
import { reviewsSaga } from './reviewsSaga';

export default function* rootSaga() {
  yield all([reviewsSaga()]);
}
