"use client"

import { FC, useState } from "react";
import styles from './Header.module.scss';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { store } from "@/redux/store";

interface IHeader {
  inCart?: number;
}

const Header: FC<IHeader> = ({inCart=0}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [cart, setCart] = useState(0)
  store.subscribe(()=>{
    console.log(store.getState())
    setCart(Object.values(store.getState().cart).reduce((acc, curr) => acc + curr, 0))
  })
  return (
    <header className={styles.header}>
      <h1 onClick={()=>{pathname !== "/" && router.push("/")}} className={styles.title} >Билетопоиск</h1>
      <div onClick={()=>{pathname !== "/cart" && router.push("/cart")}} className={styles.cart}>
        {cart>0 && <div className={styles.value}><p>{cart}</p></div>}
        <Image src={'/cart.svg'} alt="cart" width={32} height={32} />
      </div>
    </header>
  );
};

export default Header;