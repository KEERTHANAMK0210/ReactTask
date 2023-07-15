import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '9eb96bc2'; // Replace with your actual API key

  useEffect(() => {
    fetchMovies('trending');
  }, []);

  const fetchMovies = async (category) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${category}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>Trending Movies</h2>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.imdbID} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>Year: {movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TrendingMovies;
