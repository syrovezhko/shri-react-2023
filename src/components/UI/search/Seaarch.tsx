"use client"

import { FC } from 'react';
import styles from './Search.module.scss';
import Input from './input/Input';
import Image from 'next/image'
import Required from './required/Required';


interface ISeaarch {
  title: string;
}

const Seaarch: FC<ISeaarch> = ({title}) => {
  const placeholder = title.toLowerCase() === 'название'
                      ? 'Введите название'
                      : `Выберите ${title.toLowerCase()}`
  return (
    <>
      <p className={styles.title}>
        {title}
        {title.toLowerCase() === 'название' && <Required/>}
        </p>
      <Input
        placeholder={placeholder}
        isList={title.toLowerCase() !== 'название'}
        />
    </>
  );
};


export default Seaarch;