import { FC, useState } from "react";
import styles from './Control.module.scss';
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/fetures/cart/selector";
import { cartActions } from "@/redux/fetures/cart";
import { store } from "@/redux/store";

interface IControl {
  id: string;
}

const Control: FC<IControl> = ({id}) => {
  const productAmount = useSelector(state => selectProductAmount(state, id))
  const dispatch = useDispatch()
  return (
    <div className={styles.control}>
      <div className={styles.button} onClick={()=> dispatch(cartActions.increment(id))} >
        <Button type={'increase'}/>
      </div>
      <h4 className={styles.value}>{productAmount}</h4>
      <div className={styles.button} onClick={()=> dispatch(cartActions.decrement(id))} >
        <Button type={'decrease'}/>
      </div>
    </div>
  );
};

export default Control;