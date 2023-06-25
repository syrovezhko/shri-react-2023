"use client"

import { FC } from "react";
import styles from './Header.module.scss';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface IHeader {
  inCart?: number;
}

const Header: FC<IHeader> = ({inCart=0}) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className={styles.header}>
      <h1 onClick={()=>{pathname !== "/" && router.push("/")}} className={styles.title} >Билетопоиск</h1>
      <div onClick={()=>{pathname !== "/cart" && router.push("/cart")}} className={styles.cart}>
        {inCart>0 && <div className={styles.value}><p>{inCart}</p></div>}
        <Image src={'/cart.svg'} alt="cart" width={32} height={32} />
      </div>
    </header>
  );
};

export default Header;