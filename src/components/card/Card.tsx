import React, {useCallback} from 'react';
import s from './Card.module.scss'
import Characteristic from "../characteristic/Characteristic";
import BirthDay from "../birth-day/BirthDay";
import Gender from "../gender/Gender";
import {CharacterType} from "../../api/api";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../store/store";
import {openModal} from "../../store/modal-reducer";

type PropsType = {
   character: CharacterType
}

const Card = (props: PropsType) => {
   const {gender, height, mass, birth_year, name} = props.character
   const dispatch = useDispatch<AppDispatchType>()

   const openModalHandler = useCallback(() => {
      dispatch(openModal(true, props.character))
   }, [props.character])

   return (
      <div className={s.card} onClick={openModalHandler}>
         <div className={s.name}>{name}</div>
         <div className={s.row}>
            {height !== 'unknown' && <Characteristic num={height} title={'height'}/>}
            {mass !== 'unknown' && <Characteristic num={mass} title={'mass'}/>}
         </div>
         <div className={s.row}>
            {gender !== 'n/a' && <Gender gender={gender}/>}
            {birth_year !== 'unknown' && <BirthDay date={birth_year}/>}
         </div>
      </div>
   );
};

export default Card;