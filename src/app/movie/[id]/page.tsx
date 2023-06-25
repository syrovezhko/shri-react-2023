"use client"

import MovieCard from "@/components/UI/movieCard/MovieCard";
import Revue from "@/components/UI/revue/Revue";
import styles from "./page.module.scss"
import { getMovie } from "@/apiProcessing/getMovie";
import { IMovie } from "@/apiProcessing/getAllMovies";
import { IReview, getReviews } from "@/apiProcessing/getReviews";

export default async function Movie(props: { params: { id: string; }; }) {
  const movie:IMovie = await getMovie(props.params.id);
  const reviews = await getReviews(props.params.id);
  return (
    <div className={styles.container}>
      <MovieCard
        name={movie.title}
        picture={movie.posterUrl}
        year={movie.releaseYear}
        text={movie.description}
        genre={movie.genre}
        id={movie.id}
        grade={movie.rating}
        director={movie.director}
        key={movie.id}/>
      {reviews.map((review: IReview) => (
        <Revue
          name={review.name}
          text={review.text}
          grade={review.rating}
          id={review.id}/>
      ))}
      
    </div>
  );
};