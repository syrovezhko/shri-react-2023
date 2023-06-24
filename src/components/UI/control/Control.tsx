import { FC, useState } from "react";
import styles from './Control.module.scss';
import Button from "../button/Button";

interface IControl {
}

const Control: FC<IControl> = () => {
  const [value, setValue] = useState(0)
  return (
    <div className={styles.control}>
      <div className={styles.button} onClick={()=> value < 100 && setValue(value+1)} >
        <Button type={'increase'}/>
      </div>
      <h4 className={styles.value}>{value}</h4>
      <div className={styles.button} onClick={()=> value > 0 && setValue(value-1)} >
        <Button type={'decrease'}/>
      </div>
    </div>
  );
};

export default Control;