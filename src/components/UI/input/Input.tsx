"use client"

import { FC, useState } from 'react';
import styles from './Input.module.scss';
import Image from 'next/image'


interface IInput {
  placeholder: string;
}

const Input: FC<IInput> = ({placeholder}) => {
  const [isOpen, setIsOpen] = useState(()=>{return false});
  let arrow = isOpen ? styles.active : styles.nonActive;
  return (
    <form className={styles.form}>
      <input className={styles.input} placeholder={placeholder}/>
      <Image onClick={() => {setIsOpen(!isOpen)}} className={arrow} src='/arrow.svg' width={20} height={20} alt="Picture of the author"/>
    </form>
  );
};

export default Input;