"use client"

import styles from './../Search.module.scss';
import Image from 'next/image'



const Required = () => {
  return (
    <>
      <span className={styles.title__mark}>*</span>
      <Image className={`${styles.title__mark} ${styles.title__mark_icon}`} src='/question.svg' width={16} height={16} alt="Picture of the author"/>
    </>
  );
};


export default Required;