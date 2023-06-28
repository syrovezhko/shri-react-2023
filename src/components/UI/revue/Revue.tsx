"use client"
import { FC } from "react";
import styles from './Revue.module.scss';
import Image from 'next/image'

interface IRevue {
  picture?: string;
  name: string;
  grade: number;
  text: string;
  id: string;
  key: string;
}

const Revue: FC<IRevue> = ({picture='/photo.svg', name, text, grade, id, key}) => {
  return (
    <article className={styles.card}>
      <div className={styles.picture}>
        <Image className={styles.picture_data} src={picture} width={32} height={32} alt="Picture of the revuer"/>
      </div>
      <div className={styles.data}>
        <div className={styles.main}>
          <h3 className={styles.name}>{name}</h3>
          <h4 className={styles.grade} >Оценка: <span className={styles.grade_value}>{grade}</span></h4>
        </div>
        <div className={styles.text}>{text}</div>
      </div>

    </article>
  );
};

export default Revue;