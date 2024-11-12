// src/components/BookCollection.js

import React, { useState, useEffect } from 'react';

const BookCollection = () => {
  const [collection, setCollection] = useState([]);

  // Load user's book collection from local storage
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('userBooks')) || [];
    setCollection(savedBooks);
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">My Book Collection</h1>

      {/* Book Collection List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {collection.length === 0 ? (
          <div className="text-center text-lg text-gray-600">No books in your collection yet.</div>
        ) : (
          collection.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Book Image */}
              {book.volumeInfo.imageLinks?.thumbnail ? (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}

              {/* Book Title and Author */}
              <h2 className="text-xl font-semibold mt-4 text-gray-800">{book.volumeInfo.title}</h2>
              <p className="text-gray-600">{book.volumeInfo.authors?.join(', ')}</p>

              {/* View Book Link */}
              <a
                href={book.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white mt-4 p-2 rounded-lg inline-block text-center hover:bg-blue-700"
              >
                View Book
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookCollection;
