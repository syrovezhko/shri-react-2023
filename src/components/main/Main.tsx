"use client"
import { FC } from "react";
import styles from './Main.module.scss';
import Card from "../UI/card/Card";
import { IMovie, getAllMovies } from "@/apiProcessing/getAllMovies";

interface IMain {
}

const Main: FC<IMain> = async () => {
  const movies = (await getAllMovies()) || [];
  return (
    <main className={styles.main} >
      {movies.map((movie: IMovie) => (
        <Card
          title={movie.title}
          picture={movie.posterUrl}
          genre={movie.genre}
          id={movie.id}
          key={movie.id}/>
      ))}
    </main>
  );
};

export default Main;