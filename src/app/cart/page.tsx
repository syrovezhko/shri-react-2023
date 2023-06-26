"use client"

import styles from "./../movie/[id]/page.module.scss"
import { getMovie } from "@/apiProcessing/getMovie";
import { store } from "@/redux/store";
import Card from "@/components/UI/card/Card";

export default async function Cart() {
  const movieArray = await Object.keys(store.getState().cart).map( i =>  getMovie(i));
  return (
    <div className={styles.container}>
      {movieArray.map(async i => (
        <Card 
          isCart={true}
          picture={await i.then(data=>data.posterUrl)}
          title={await i.then(data=>data.title)}
          genre={await i.then(data=>data.genre)}
          id={await i.then(data=>data.id)}
          key={await i.then(data=>data.id)}/>
      ))}
    </div>
  );
};