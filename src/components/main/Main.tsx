"use client"
import { FC } from "react";
import styles from './Main.module.scss';
import Card from "../UI/card/Card";

interface IMain {
}

const Main: FC<IMain> = () => {
  return (
    <main className={styles.main} >
      <Card picture='/card.png' title="jjjjjjjjjjjjjjjjjj" genre="rrrrrrrrrrrrr" />
      <Card picture='/card.png' title="jjjjjjjjjjjjjjjjjj" genre="rrrrrrrrrrrrr" />
      <Card picture='/card.png' title="jjjjjjjjjjjjjjjjjj" genre="rrrrrrrrrrrrr" />
      <Card picture='/card.png' title="jjjjjjjjjjjjjjjjjj" genre="rrrrrrrrrrrrr" />
      <Card picture='/card.png' title="jjjjjjjjjjjjjjjjjj" genre="rrrrrrrrrrrrr" />
      <Card picture='/card.png' title="jjjjjjjjjjjjjjjjjj" genre="rrrrrrrrrrrrr" />

    </main>
  );
};

export default Main;