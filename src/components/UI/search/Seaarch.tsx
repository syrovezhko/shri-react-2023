"use client"

import { FC } from 'react';
import styles from './Search.module.scss';
import Input from './input/Input';
import Image from 'next/image'
import Required from './required/Required';


interface ISeaarch {
  placeholder: string;
  title: string;
}

const Seaarch: FC<ISeaarch> = ({title, placeholder}) => {
  return (
    <div className={styles.block}>
      <p className={styles.title}>
        {title}
        {title.toLowerCase() === 'название' && <Required/>}
        </p>
      <Input placeholder={placeholder} isList={title.toLowerCase() !== 'название'}/>
    </div>
  );
};


export default Seaarch;