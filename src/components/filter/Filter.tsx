import React, {memo, MutableRefObject, useState} from 'react';
import s from './Filter.module.scss'
import {useOnClickOutside} from "../../hooks/useOnClickOutside";

const colors = [
   'All', 'brown', 'red', 'blue', 'white',
]

type PropsType = {
   filterCharacters: (color: string) => void
}

const Filter = memo((props: PropsType) => {
   const [color, setColor] = useState(colors[0])
   const [open, setOpen] = useState(false)
   const ref = React.useRef() as MutableRefObject<HTMLDivElement>

   const filterHandler = (color: string) => {
      setColor(color)
      props.filterCharacters(color)
      setOpen(false)
   }

   useOnClickOutside(ref, () => setOpen(false))

   return (
      <div className={s.filter}>
         <div className={s.caption}>color eye</div>
         <div className={s.select} ref={ref}>
            <div className={s.selected} onClick={() => setOpen(!open)}>{color}</div>
            <div className={open ? `${s.dropdown} ${s.open}` : s.dropdown}>
               {colors.map((el, i) => {
                  return (
                     <div onClick={() => filterHandler(el)} key={i} className={s.item}>{el}</div>
                  )
               })}
            </div>
         </div>
      </div>
   );
});

export default Filter;