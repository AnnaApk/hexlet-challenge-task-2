import React from 'react';
import { useDispatch } from 'react-redux';
import { setSort, sortReviews } from '../features/slices/reviewsSlice';
import '../styles/SortButtons.css';

const SortButtons = () => {
  const dispatch = useDispatch();

  const handleSort = (field, order) => {
    dispatch(setSort({ field, order }));
    dispatch(sortReviews());
  };

  return (
    <div>
      <button onClick={() => handleSort('date', 'desc')}>Новые</button>
      <button onClick={() => handleSort('date', 'asc')}>Старые</button>
      <button onClick={() => handleSort('rating', 'desc')}>Оценка ↓</button>
      <button onClick={() => handleSort('rating', 'asc')}>Оценка ↑</button>
    </div>
  );
};

export default SortButtons;
