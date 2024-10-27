import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrendingMovies = () => {
  const API_KEY = 'd8949aeffb8012624ae26825e372dd7667b5dce80e878635cb58e356fbf64def';  // Replace with your Trakt.tv Client ID

  // State to store the trending movies data
  const [movies, setMovies] = useState([]);

  // Function to fetch trending movies
  const getTrendingMovies = async () => {
    try {
      const response = await axios.get('https://api.trakt.tv/movies/trending', {
        headers: {
          'Content-Type': 'application/json',
          'trakt-api-version': '2',
          'trakt-api-key': API_KEY
        }
      });
      setMovies(response.data); // Store the response data in state
    } catch (error) {
      console.error('Error fetching data from Trakt.tv API:', error);
    }
  };

  // useEffect hook to call the API when the component is mounted
  useEffect(() => {
    getTrendingMovies();
  }, []);


  console.log(movies);
  

  return (
    <div>
      <h1>Trending Movies</h1>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie.movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default TrendingMovies;
