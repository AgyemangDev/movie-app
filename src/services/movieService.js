// Reads from .env (VITE_OMDB_API_KEY=xxxx) — falls back to the key
// that was hardcoded in the original project so it works out of the box.
const API_KEY = import.meta.env.VITE_OMDB_API_KEY || "48618005";
const BASE_URL = "https://www.omdbapi.com/";

/**
 * Build a safe OMDb URL using URLSearchParams.
 * This prevents the "?i=...&s=..." mistake — each call uses
 * exactly the parameters it needs, nothing more.
 *
 * OMDb parameter reference:
 *   s  → search by title keyword  (returns up to 10 results)
 *   i  → lookup by IMDb ID        (returns one full record)
 *   t  → lookup by exact title    (returns one full record)
 *   y  → filter by release year
 *   type → movie | series | episode
 *   plot → short | full
 *   page → 1–100 (for paginating s= results)
 */
function buildUrl(params) {
  const query = new URLSearchParams({ apikey: API_KEY, ...params });
  return `${BASE_URL}?${query.toString()}`;
}

async function omdbFetch(params) {
  const url = buildUrl(params);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network error ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();

  // OMDb signals errors with Response: "False" instead of HTTP error codes
  if (data.Response === "False") {
    throw new Error(data.Error || "OMDb returned no results.");
  }

  return data;
}

/**
 * Search movies, series and episodes by keyword.
 * Uses the `s` parameter — returns an array of lightweight results.
 * @param {string} title - Search keyword
 * @param {Object} [options]
 * @param {"movie"|"series"|"episode"} [options.type] - Filter by media type
 * @param {number} [options.year] - Filter by release year
 * @param {number} [options.page=1] - Page number (1–100)
 * @returns {Promise<Array>} Array of movie objects
 */
export async function fetchMovies(title, { type, year, page = 1 } = {}) {
  if (!title?.trim()) throw new Error("Please enter a search term.");

  const params = { s: title, page };
  if (type) params.type = type;
  if (year) params.y = year;

  const data = await omdbFetch(params);
  return data.Search; // array of { Title, Year, imdbID, Type, Poster }
}

/**
 * Fetch full details for a single title by its IMDb ID.
 * Uses the `i` parameter — returns one complete record.
 * @param {string} imdbID - e.g. "tt0111161"
 * @returns {Promise<Object>} Full movie/series record
 */
export async function fetchMovieById(imdbID) {
  if (!imdbID) throw new Error("IMDb ID is required.");
  return omdbFetch({ i: imdbID, plot: "full" });
}

/**
 * Fetch full details for a single title by its exact title string.
 * Uses the `t` parameter — returns one complete record.
 * @param {string} title - Exact title, e.g. "The Dark Knight"
 * @param {number} [year] - Optional year to disambiguate
 * @returns {Promise<Object>} Full movie/series record
 */
export async function fetchMovieByTitle(title, year) {
  if (!title) throw new Error("Title is required.");
  const params = { t: title, plot: "full" };
  if (year) params.y = year;
  return omdbFetch(params);
}
