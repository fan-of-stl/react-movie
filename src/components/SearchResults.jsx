import React from "react";

const SearchResults = ({ movies, onMovieClick }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-center mt-6">No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-7xl mx-auto px-4">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="bg-gray-700 text-white p-4 rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-600"
          onClick={() => onMovieClick(movie.imdbID)}
        >
          <div className="relative mb-4">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/150"
              }
              alt={movie.Title}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <h2 className="text-lg font-bold">{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
