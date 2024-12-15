import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/ReviewTable.css';

export function ReviewTable() {
  const { filteredReviews, isLoading } = useSelector((state) => state.reviews);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Платформа</th>
          <th>Рейтинг</th>
          <th>Дата</th>
          <th>Отзыв</th>
        </tr>
      </thead>
      <tbody>
        {filteredReviews.map((review) => (
          <tr key={review.id}>
            <td>{review.platform}</td>
            <td>{review.rating}</td>
            <td>{new Date(review.date).toLocaleString()}</td>
            <td>{review.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
