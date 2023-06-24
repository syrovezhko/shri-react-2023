import { FC } from "react";
import styles from './Modal.module.scss';
import Image from "next/image";
import Button from "../button/Button";

interface IModal {
  setOpenModal: CallableFunction;
}

const Modal: FC<IModal> = ({setOpenModal}) => {
  return (
    <div onClick={() => setOpenModal(false)} className={styles.background}>
      <div onClick={(e) => e.stopPropagation()}  className={styles.modal}>
        <div className={styles.alarm}>
          <div className={styles.header}>
            <h3 className={styles.title} >Удаление билета</h3>
            <Image onClick={() => setOpenModal(false)} className={styles.close} src={'/close.svg'} alt="close" width={16} height={16} />
          </div>
          <div className={styles.question}>
            Вы уверены, что хотите удалить билет?
          </div>
        </div>
        <div className={styles.control}>
          <div onClick={() => setOpenModal(false)} className={styles.button}>
            <Button type="primary" text="Да" />
          </div>
          <div onClick={() => setOpenModal(false)} className={styles.button}>
            <Button type="secondary" text="Нет" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;