import { FC } from "react";
import styles from './MovieCard.module.scss';
import Image from 'next/image'
import Control from "../control/Control";
import { dictionary } from "@/apiProcessing/dictionary";

interface IMovieCard {
  name: string;
  genre: string;
  year: number;
  director: string;
  text: string;
  picture: string;
  grade: number;
  id: string;
  key: string;
}

const MovieCard: FC<IMovieCard> = ({name, genre, year, grade, director, text, picture, id, key}) => {
  return (
    <div className={styles.card}>
      <Image className={styles.picture} loader={() => picture} src={picture} width={400} height={500} alt="Picture of the movie"/>
      <div className={styles.data}>
        <div className={styles.header}>
          <h2 className={styles.name}>{name}</h2>
            <Control/>
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>Жанр: <span className={styles.value}>{dictionary[genre]}</span></h3>
          <h3 className={styles.title}>Год выпуска: <span className={styles.value}>{year}</span></h3>
          <h3 className={styles.title}>Рейтинг: <span className={styles.value}>{grade}</span></h3>
          <h3 className={styles.title}>Режиссёр: <span className={styles.value}>{director}</span></h3>
          <h3 className={styles.title}>Описание</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;