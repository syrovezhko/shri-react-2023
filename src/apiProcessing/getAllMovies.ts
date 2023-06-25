export interface IMovie {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export const getAllMovies = async () => {
  const movies = await fetch("http://localhost:3001/api/movies");
  return movies.json();
}

