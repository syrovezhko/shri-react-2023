"use client"
import { FC } from "react";
import styles from './Filter.module.scss';
import Seaarch from "../UI/search/Seaarch";

interface IFilter {
}

const Filter: FC<IFilter> = () => {
  return (
    <aside className={styles.aside} >
      <h2 className={styles.title}>Фильтр поиска</h2>
      <Seaarch title="Название"/>
      <Seaarch title="Жанр"/>
      <Seaarch title="Кинотеатр"/>

    </aside>
  );
};

export default Filter;