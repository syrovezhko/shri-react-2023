"use client"

import { FC, useEffect, useState } from 'react';
import styles from './Input.module.scss';
import Image from 'next/image'
import Select from '../select/Select';


interface IInput {
  placeholder: string;
  isList: boolean;
  selected: string;
}

const Input: FC<IInput> = ({placeholder, isList=true}) => {
  const [isOpen, setIsOpen] = useState(()=>{return false});
  const [selected, setSelected] = useState('Не выбран');
  const arrow = isOpen ? styles.active : styles.nonActive;
  useEffect(() => {
    setIsOpen(false)
  },[selected])
  return (
    <>
      <form className={styles.form}>
        <input className={styles.input} placeholder={
          selected === 'Не выбран' ? placeholder : selected
          }/>
        {isList &&
        <Image onClick={() => {setIsOpen(!isOpen)}} className={arrow} src='/arrow.svg' width={20} height={20} alt="Picture of the author"/>
        }
      </form>
      {isOpen && <Select selected={selected} setSelected={setSelected} />}
    </>
  );
};

export default Input;