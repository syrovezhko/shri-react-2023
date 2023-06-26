"use client"

import { FC, useEffect, useState } from 'react';
import styles from './Question.module.scss'
import Image from 'next/image'

interface IQuestion {
	type: string;
  title: string;
  text?: string;
}

const Question: FC<IQuestion> = ({type, title, text}) => {
  const heading = type === 'declaration' ? styles.declaration : styles.question;
  const [isOpen, setIsOpen] = useState(()=>{return false});
  const arrow = isOpen ? styles.active : styles.nonActive;
  return (
    <div className={styles.block}>
      <div className={styles.line}>
        <h2 className={heading}>{title}</h2>
        {type !== 'declaration' && type !== 'about' && <Image onClick={() => {setIsOpen(!isOpen)}} className={arrow} src='/arrow.svg' width={20} height={20} alt="arrow"/>}
      </div>
      {(isOpen || type === 'about') && type !== 'declaration' && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export default Question;