import React from 'react';
import s from "./BirthDay.module.scss";

type PropsType = {
   date: string
}
const BirthDay = (props: PropsType) => {
   return (
      <span className={s.date}>{props.date}</span>
   );
};

export default BirthDay;