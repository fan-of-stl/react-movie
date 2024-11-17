import axios from "axios";

class OmdbService {
  constructor(apikey) {
    this.apikey = apikey;
    this.baseUrl = "https://www.omdbapi.com/";
    this.randomMovieTitles = [
        "The Shawshank Redemption", "The Godfather", "The Dark Knight", 
        "Forrest Gump", "Inception", "The Matrix", "Titanic", "Avengers: Endgame", 
        "Gladiator", "The Lion King", "Interstellar", "The Empire Strikes Back", 
        "The Lord of the Rings: The Return of the King", "Pulp Fiction", 
        "The Prestige", "Fight Club", "The Social Network", "The Godfather: Part II"
      ];
  }

  /**
   * Fetch movies by search term
   * @param {string} searchTerm - The movie title or keyword to search for
   * @returns {Promise<object>} - List of movies matching the search term
   */
  async searchMovies(searchTerm) {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          s: searchTerm,
          apiKey: this.apikey,
        },
      });

      if (response.data.Response === "True") {
        return response.data.Search;
      } else {
        throw new Error(response.data.Error || "No results found.");
      }
    } catch (error) {
      console.error("Error searching movies:", error.message);
      throw error;
    }
  }

  /**
   * Fetch movie details by IMDb ID
   * @param {string} omdbId - The unique IMDb ID of the movie
   * @returns {Promise<object>} - Detailed movie information
   */
  async getMovieDetails(omdbId) {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          i: omdbId,
          apiKey: this.apikey,
        },
      });

      if (response.data.Response === "True") {
        return response.data; 
      } else {
        throw new Error(response.data.Error || "Failed to fetch details.");
      }
    } catch (error) {
      console.error("Error fetching movie details:", error.message);
      throw error;
    }
  }


  /**
   * Fetch popular movies (Example: Predefined 'Star' keyword)
   * @returns {Promise<object>} - List of popular movies
   */
  async getPopularMovies() {
    const randomTitle = this.randomMovieTitles[Math.floor(Math.random() * this.randomMovieTitles.length)];
    return await this.searchMovies(randomTitle); 
  }
}

export default OmdbService
