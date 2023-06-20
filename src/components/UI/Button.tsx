import { FC } from "react";
import styles from './Button.module.scss'
interface IButton {
	type: string;
  text: string;
}

const Button: FC<IButton> = ({type, text}) => {
  return (
    <button className={styles[type]}/>
  );
};

export default Button;