// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1'; // Adjust this according to your server URL

// Fetch all books
export const fetchBooks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

// Add a new book
export const addBook = async (book) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/books`, book);
        return response.data.data;
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
};

// Fetch book details by ID
export const fetchBookById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books/${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching book details:', error);
        throw error;
    }
};
