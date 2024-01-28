import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then(response => {
      setBookData(response.data.books);
    })
    .catch(err => {
      setError(err);
      console.error('An error occurred:', err.message);
    });
  }, []); 

  return (
    <div className="App">
      <h1>Book Details</h1>
      {bookData.length > 0 && (
        bookData.map(book => (
          <div key={book.id} className="book-container">
            <h2>Title: {book.title}</h2>
            <img src={book.imageLinks.thumbnail} alt="Book Cover" />
            <p>Description: {book.description}</p>
            <p>Authors: {book.authors.join(', ')}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
