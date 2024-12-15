import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ReviewTable } from './components/ReviewTable';
import { Filters } from './components/Filters';
import SortButtons from './components/SortButtons';
import './styles/App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'reviews/fetchReviews' });
  }, [dispatch]);

  return (
    <div className='App' >
      <Filters />
      <SortButtons />
      <ReviewTable />
    </div>
  );
};

export default App;
