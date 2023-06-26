"use client"

import { FC } from "react";
import styles from './Footer.module.scss';
import { usePathname, useRouter } from "next/navigation";

interface IFooter {
}

const Footer: FC<IFooter> = () => {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <footer className={styles.footer}>
      <h3 onClick={()=>{pathname !== "/question" && router.push("/question")}} className={styles.text}>Вопросы-ответы</h3>
      <h3 className={styles.text}>О нас</h3>
    </footer>
  );
};

export default Footer;