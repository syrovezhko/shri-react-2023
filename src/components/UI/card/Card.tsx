"use client"
import { FC, useState } from "react";
import styles from './Card.module.scss';
import Image from 'next/image'
import Control from "../control/Control";
import Modal from "../modal/Modal";

interface ICard {
	isCart?: boolean;
  picture: string;
  title: string;
  genre: string;
}

const Card: FC<ICard> = ({isCart=false, picture, title, genre}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <article className={styles.card}>
        <Image src={picture} width={100} height={120} alt="Picture of the movie"/>
        <div className={styles.data}>
          <div className={styles.info}>
            <h2 className={styles.title} >{title}</h2>
            <h3 className={styles.genre} >{genre}</h3>
          </div>
          <div className={styles.control}>
            <Control/>
            {isCart && <Image onClick={() => setIsOpen(true)} className={styles.close} src="/close.svg" width={20} height={20} alt="close"/>}
          </div>
        </div>
      </article>
      {isOpen && <Modal setOpenModal={setIsOpen} />}
    </>
  );
};

export default Card;