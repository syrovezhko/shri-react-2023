"use client"

import { FC } from 'react';
import styles from './Select.module.scss';


// interface ISelect {
//   options: string[];
// }

const Select: FC<ISelect> = ({selected, setSelected}) => {
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
        <div className={styles.option} onClick={(e) => setSelected(option)} >{option}</div>
      ))}
      {/* <div className={styles.option} onClick={(e) => setSelected(e.target.textContent)} >Fiat</div>
      <div className={styles.option} onClick={(e) => setSelected(e.target.textContent)} >Audi</div> */}
    </div>
  );
};


export default Select;