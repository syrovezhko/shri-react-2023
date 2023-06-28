"use client"

import { FC } from 'react';
import styles from './Select.module.scss';
import { HookCallbacks } from 'async_hooks';


interface ISelect {
  selected: string;
  setSelected: CallableFunction;
  key?: string;
}

const Select: FC<ISelect> = ({selected, setSelected, key}) => {
  const options = [
    'боевик',
    'Комедия',
    'Фэнтази',
    'Ужасы'
  ]
  return (
    <div className={styles.select}>
      <div className={styles.option} onClick={(e) => setSelected('Не выбран')} >Не выбран</div>
      {options.map(option => (
        <div className={styles.option} key={key} onClick={(e) => setSelected(option)} >{option}</div>
      ))}
      </div>
  );
};


export default Select;