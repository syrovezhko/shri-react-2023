"use client"

import { FC } from 'react';
import styles from './Search.module.scss';
import Input from './input/Input';

interface ISeaarch {
  placeholder: string;
}

const Seaarch: FC<ISeaarch> = () => {
  return (
    <div>
      <Input placeholder='Введите название'/>
    </div>
  );
};


export default Seaarch;