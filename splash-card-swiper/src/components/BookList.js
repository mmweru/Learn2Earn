// src/components/BookList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlusCircle } from 'react-icons/fa'; // For the Add icon

const API_KEY = 'AIzaSyBgoFf2AfSzDFxJR363-4ghGeV0rf6-dwI';
const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch books related to specific keywords on component mount
  useEffect(() => {
    fetchKeywordBooks();
  }, []);

  // Function to fetch books based on specific keywords
  const fetchKeywordBooks = async () => {
    try {
      setLoading(true);
      const keywords = 'success, goals, win, money, earn, build, career';
      const response = await axios.get(`${GOOGLE_BOOKS_API}?q=${keywords}&maxResults=12&key=${API_KEY}`);
      setBooks(response.data.items || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setLoading(false);
    }
  };

  // Function to handle search
  const handleSearch = async () => {
    if (!searchTerm) return;
    try {
      setLoading(true);
      const response = await axios.get(`${GOOGLE_BOOKS_API}?q=${searchTerm}&maxResults=12&key=${API_KEY}`);
      setBooks(response.data.items || []);
      setLoading(false);
    } catch (error) {
      console.error('Error searching books:', error);
      setLoading(false);
    }
  };

  // Function to add a book to the user's collection
  const handleAddToCollection = (book) => {
    const savedBooks = JSON.parse(localStorage.getItem('userBooks')) || [];
    if (!savedBooks.find(savedBook => savedBook.id === book.id)) {
      savedBooks.push(book);
      localStorage.setItem('userBooks', JSON.stringify(savedBooks));
      alert('Book added to your collection!');
    } else {
      alert('Book already in your collection!');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Discover Your Next Big Read!</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-2/3 md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for books..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white p-3 rounded-lg ml-4 hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Show Loading Spinner */}
      {loading && <div className="text-center text-lg text-gray-600">Loading...</div>}

      {/* Book List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
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

            {/* Add to Collection Icon */}
            <button
              onClick={() => handleAddToCollection(book)}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
              aria-label="Add to Collection"
            >
              <FaPlusCircle className="text-blue-600 text-xl" />
            </button>

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
        ))}
      </div>
    </div>
  );
};

export default BookList;
