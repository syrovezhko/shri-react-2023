import { FC } from "react";
import styles from './Footer.module.scss';

interface IFooter {
}

const Footer: FC<IFooter> = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.text}>Вопросы-ответы</h3>
      <h3 className={styles.text}>О нас</h3>
    </footer>
  );
};

export default Footer;