export async function getPopularMovies() {
  const API_KEY = process.env.TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } } // revalidate caching
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}