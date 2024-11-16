import React from "react";

const MovieDetailsModal = ({ movie, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white p-6 rounded-lg w-full max-w-3xl cursor-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex items-center mb-4">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
            alt={movie.Title}
            className="w-32 h-48 object-cover rounded-md"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{movie.Title}</h2>
            <p className="text-sm text-gray-400">{movie.Year}</p>
            <p className="text-sm text-gray-400">{movie.Genre}</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Plot:</h3>
          <p className="text-gray-300">{movie.Plot}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Ratings:</h3>
          <ul>
            {movie.Ratings && movie.Ratings.length > 0 ? (
              movie.Ratings.map((rating) => (
                <li key={rating.Source} className="text-gray-300">
                  {rating.Source}: {rating.Value}
                </li>
              ))
            ) : (
              <p className="text-gray-300">No ratings available</p>
            )}
          </ul>
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
 