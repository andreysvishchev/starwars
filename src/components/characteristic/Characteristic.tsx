import React from 'react';
import s from "./Characteristic.module.scss";

type PropsType = {
   num: string
   title: string
}
const Characteristic = (props: PropsType) => {
   return (
      <span className={s.characteristic}>
         <div className={s.characteristic__num}>{props.num}</div>
         <div className={s.characteristic__name}>{props.title}</div>
      </span>
   );
};

export default Characteristic;