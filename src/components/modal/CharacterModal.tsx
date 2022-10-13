import {Box, Modal} from "@mui/material";
import s from './CharacterModal.module.scss'
import base from '../../img/avatar.png'
import male from '../../img/male.svg'
import female from '../../img/female.svg'
import Gender from "../gender/Gender";
import BirthDay from "../birth-day/BirthDay";
import React from "react";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {useDispatch} from "react-redux";
import {closeModal} from "../../store/modal-reducer";
import Characteristic from "../characteristic/Characteristic";

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 800,
   border: 'none',
   borderRadius: '8px',
   padding: '0',
   outline: 'none',
   overflow: 'hidden',
   display: 'flex'
};


const CharacterModal = () => {
   const status = useAppSelector(state => state.modal.status)
   const character = useAppSelector(state => state.modal.character)
   const dispatch = useDispatch<AppDispatchType>()
   const {hair_color, eye_color, gender, height, birth_year, skin_color, name, mass} = character

   const handleClose = () => {
      dispatch(closeModal(false))
   }

   const avatar = () => {
      switch (gender) {
         case 'male':
            return male
         case 'female':
            return female
         default:
            return base
      }
   }

   const img = avatar()


   return (
      <div>
         <Modal
            open={status}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <div className={s.photo}>
                  <img src={img} alt="avatar"/>
                  <div className={s.row}>
                     {gender !== 'n/a' && <Gender gender={gender}/>}
                     {birth_year !== 'unknown' && <BirthDay date={birth_year}/>}
                  </div>
               </div>
               <div className={s.info}>
                  <div className={s.name}>{name}</div>
                  <div className={s.frame}>
                     {hair_color !== 'n/a' && <div>hair color: {hair_color}</div>}
                     {skin_color !== 'n/a' && <div>skin color: {skin_color}</div>}
                     {eye_color !== 'n/a' && <div>eye color: {eye_color}</div>}
                  </div>
                  <div className={s.characteristics}>
                     {height !== 'unknown' &&
                        <div className={s.characteristic}>
                           <Characteristic num={height} title={'height'}/>
                        </div>
                     }
                     {mass !== 'unknown' &&
                        <div className={s.characteristic}>
                           <Characteristic num={mass} title={'mass'}/>
                        </div>
                     }
                  </div>
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default CharacterModal;