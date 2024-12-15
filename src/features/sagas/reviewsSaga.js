import { call, put, takeLatest } from 'redux-saga/effects';
import { setReviews, setLoading } from '../slices/reviewsSlice';
import { fetchReviewsApi } from '../../services/api';

function* fetchReviews() {
  try {
    yield put(setLoading(true));
    yield new Promise((resolve) => setTimeout(resolve, 1000));
    const reviews = yield call(fetchReviewsApi);
    yield put(setReviews(reviews));
  } catch (error) {
    console.error('Error fetching reviews:', error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* reviewsSaga() {
  yield takeLatest('reviews/fetchReviews', fetchReviews);
}
