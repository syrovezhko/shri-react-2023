import { FC } from "react";
import styles from './Header.module.scss';
import Image from "next/image";

interface IHeader {
  inCart: number;
}

const Header: FC<IHeader> = ({inCart}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title} >Билетопоиск</h1>
      <div className={styles.cart}>
        {inCart>0 && <div className={styles.value}><p>{inCart}</p></div>}
        <Image src={'/cart.svg'} alt="cart" width={32} height={32} />
      </div>
    </header>
  );
};

export default Header;