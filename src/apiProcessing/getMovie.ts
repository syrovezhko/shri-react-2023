export const getMovie =async (id: string) => {
  const movies = await fetch(`http://localhost:3001/api/movie?movieId=${id}`);
  return movies.json();
}