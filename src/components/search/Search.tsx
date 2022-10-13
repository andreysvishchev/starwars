import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Search.module.scss'
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../store/store";
import {useDebounce} from "../../hooks/useDebounce";
import {getCharacterByName} from "../../store/characters-reducer";

const Search = () => {
   const dispatch = useDispatch<AppDispatchType>();
   const delay = 500;
   const [value, setValue] = useState('');
   const debouncedValue = useDebounce<string>(value, delay);

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.currentTarget.value);
   };

   useEffect(() => {
      dispatch(getCharacterByName(value))
   }, [dispatch, debouncedValue])

   return (
      <div className={s.search}>
         <input value={value}
                onChange={onChangeHandler}
                placeholder='find...'
                className={s.input}
         />
      </div>
   );
};

export default Search;