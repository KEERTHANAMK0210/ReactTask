import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HeroSection = () => {
  const [movie, setMovie] = useState(null);
  const apiKey = '9eb96bc2'; // Replace with your actual API key

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&t=movie_title`);
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };

  return (
    <div>
      <h2>Hero Section</h2>
      {movie ? (
        <div>
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
          <p>Director: {movie.Director}</p>
          {/* Add more movie details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HeroSection;
