"use client"

import { FC } from "react";
import styles from './Button.module.scss'
interface IButton {
	type: string;
  text?: string;
  onClick?:()=>void;
}
/*
button doc: 
    type: primary, text: some string
    type: secondary, text: some string
    type: increase, text: empty string
    type: decrease, text: empty string
*/

const Button: FC<IButton> = ({type, text}) => {
  return (
    <button className={styles[type]}>
      {text}
    </button>
  );
};

export default Button;