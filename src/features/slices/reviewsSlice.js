import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: [],
  filteredReviews: [],
  filters: {
    platform: null,
    ratingRange: [0, 5],
    searchText: '',
  },
  sort: {
    field: 'date',
    order: 'desc',
  },
  isLoading: false,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
      state.filteredReviews = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    filterReviews: (state) => {
      const { platform, ratingRange, searchText } = state.filters;

      state.filteredReviews = state.reviews
        .filter(review =>
          (!platform || review.platform === platform) &&
          review.rating >= ratingRange[0] &&
          review.rating <= ratingRange[1] &&
          review.text.toLowerCase().includes(searchText.toLowerCase())
        )
    },
    sortReviews: (state) => {
      const { field, order } = state.sort;

      state.filteredReviews = [...state.filteredReviews].sort((a, b) => {
        if (field === 'date') {
          return order === 'desc'
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date);
        }
        if (field === 'rating') {
          return order === 'desc' ? b.rating - a.rating : a.rating - b.rating;
        }
        return 0;
      });
    },
  },
});

export const { setReviews, setLoading, setFilters, setSort, filterReviews, sortReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
