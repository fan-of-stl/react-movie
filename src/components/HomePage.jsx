import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import MovieDetailsModal from "./MovieDetailsModal";
import OmdbService from "./services/OmdbService";
import Search from "./Search";

const Homepage = () => {
  const [movies, setMovies] = useState([]); 
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 
  const omdbService = new OmdbService('eafa0e82');

  useEffect(() => {
    
    const fetchPopularMovies = async () => {
      try {
        setIsLoading(true); 
        const popularMovies = await omdbService.getPopularMovies();
        setMovies(popularMovies);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setIsLoading(false);
      }
    };

    fetchPopularMovies();
  }, []); 

  const handleSearchResults = async (query) => {
    try {
      setIsLoading(true); 
      const results = await omdbService.searchMovies(query); 
      setMovies(results); 
      setIsLoading(false); 
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); 
      setIsLoading(false);
    }
  };

  const handleMovieClick = async (movieId) => {
    try {
      const movieDetails = await omdbService.getMovieDetails(movieId);
      setSelectedMovie(movieDetails); 
      setIsModalOpen(true); 
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <Search onSearchResults={handleSearchResults} />
      {isLoading ? (
        <p className="text-center mt-6">Loading popular movies...</p>
      ) : (
        <SearchResults movies={movies} onMovieClick={handleMovieClick} />
      )}
      {isModalOpen && selectedMovie && (
        <MovieDetailsModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};

export default Homepage;
