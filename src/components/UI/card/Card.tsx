"use client"
import { FC, useState } from "react";
import styles from './Card.module.scss';
import Image from 'next/image'
import Button from "../button/Button";

interface ICard {
	isCart?: boolean;
  picture: string;
  title: string;
  genre: string;
}

const Card: FC<ICard> = ({isCart=false, picture, title, genre}) => {
  const [count, setCount] = useState(0);
  return (
    <article className={styles.card}>
      <Image src={picture} width={100} height={120} alt="Picture of the movie"/>
      <div className={styles.data}>
        <div className={styles.info}>
          <h2 className={styles.title} >{title}</h2>
          <h3 className={styles.genre} >{genre}</h3>
        </div>
        <div className={styles.control}>
          <Button onClick={()=>setCount(count-1)} type={'decrease'}/>
          <h4 className={styles.count} >{count}</h4>
          <Button onClick={()=>setCount(count+1)} type={'increase'}/>
          {isCart && <Image className={styles.close} src="/close.svg" width={20} height={20} alt="close"/>}
        </div>
      </div>
    </article>
  );
};

export default Card;