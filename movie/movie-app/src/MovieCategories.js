import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieCategories = () => {
  const [categories, setCategories] = useState([]);
  const apiKey = '9eb96bc2'; // Replace with your actual API key

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=category_name`);
      if (response.data && response.data.Search) {
        setCategories(response.data.Search);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div>
      <h2>Movie Categories</h2>
      {categories.length > 0 ? (
        <ul>
          {categories.map((category) => (
            <li key={category.imdbID}>{category.Title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieCategories;
