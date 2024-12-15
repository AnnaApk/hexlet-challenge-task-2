import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters, filterReviews } from '../features/slices/reviewsSlice';
import '../styles/Filters.css';

export function Filters() {
  const dispatch = useDispatch();
  const [platform, setPlatform] = useState(null);
  const [ratingRange, setRatingRange] = useState([0, 5]);
  const [searchText, setSearchText] = useState('');

  const applyFilters = () => {
    dispatch(setFilters({ platform, ratingRange, searchText }));
    dispatch(filterReviews());
  };

  return (
    <div>
      <select onChange={(e) => setPlatform(e.target.value)}>
        <option value="">Все платформы</option>
        <option value="Google">Google</option>
        <option value="Яндекс">Яндекс</option>
        <option value="2ГИС">2ГИС</option>
      </select>
      <input
        type="number"
        placeholder="Min рейтинг"
        min={0}
        max={5}
        onChange={(e) => setRatingRange([+e.target.value, ratingRange[1]])}
      />
      <input
        type="number"
        placeholder="Max рейтинг"
        min={0}
        max={5}
        onChange={(e) => setRatingRange([ratingRange[0], +e.target.value])}
      />
      <input
        type="text"
        placeholder="Поиск по тексту отзыва"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={applyFilters}>Применить</button>
    </div>
  );
};
