import React from 'react';
import s from "./Gender.module.scss";

type PropsType = {
   gender: string
}

const Gender = (props: PropsType) => {
   return (
      <span className={s.gender} data-gender={props.gender}>{props.gender}</span>
   );
};

export default Gender;