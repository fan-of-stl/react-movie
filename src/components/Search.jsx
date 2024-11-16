import React, { useState } from "react";

const Search = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      onSearchResults(searchQuery.trim()); 
      setSearchQuery(""); 
    }
  };

  return (
    <div className="w-full bg-gray-900 text-white shadow-lg">
      
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
       
        <h1 className="text-2xl md:text-3xl font-bold">Movie App</h1>

       
        <div className="flex items-center w-full max-w-md bg-white/10 backdrop-blur-md p-2 rounded-lg">
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4"
            />
          </svg>

         
          <input
            type="text"
            placeholder="Search movies... (Press Enter)"
            className="w-full ml-3 bg-transparent text-white placeholder-white focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            onKeyUp={handleKeyPress} 
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
