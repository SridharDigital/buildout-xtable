import React, { useState } from 'react';
import { initialData } from './constants';
import './App.css';

const App = () => {
  const [data, setData] = useState(initialData);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.date !== a.date) {
        return new Date(b.date) - new Date(a.date);
      }
      return b.views - a.views;
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.views !== a.views) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
  };

  return (
    <div className='App'>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
