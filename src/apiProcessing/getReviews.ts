export interface IReview {
  name: string;
  text: string;
  rating: number;
  id: string;
}

export const getReviews =async (id: string) => {
  const movies = await fetch(`http://localhost:3001/api/reviews?movieId=${id}`);
  return movies.json();
}