import React, {memo, useEffect, useState} from 'react';
import s from './Characters.module.scss'
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {getCharacters, getMoreCharacters} from "../../store/characters-reducer";
import Card from "../../components/card/Card";
import load from '../../img/load.svg'
import CharacterModal from "../../components/modal/CharacterModal";
import {CharacterType} from "../../api/api";
import InfiniteScroll from "react-infinite-scroll-component";


const Characters = memo(() => {
   const dispatch = useDispatch<AppDispatchType>()
   const status = useAppSelector(state => state.app.status)
   let characters = useAppSelector(state => state.characters.characters)
   const count = useAppSelector(state => state.characters.count)
   const [lang, setLang] = useState('en')
   const [filteredCharacters, setFilteredCharacters] = useState<CharacterType[]>([])
   const [page, setPage] = useState(2)
   const max = count! / 10

   const filterCharacters = (color: string) => {
      if (color === 'All') {
         setFilteredCharacters(characters)
      } else {
         setFilteredCharacters(characters.filter(el => el.eye_color === color))
      }
   }

   const changeLang = () => {
      if (lang === 'en') {
         setLang('wookiee')
      }
      if (lang === 'wookiee') {
         setLang('en')
      }
   }

   const fetchMore = () => {
      if (page < max + 1) {
         dispatch(getMoreCharacters(page))
         setPage(page + 1)
      }
   }

   useEffect(() => {
      dispatch(getCharacters())
   }, [])

   useEffect(() => {
      setFilteredCharacters(characters)
   }, [characters])

   return (
      <div className={s.characters}>
         <div className={s.container}>
            <div onClick={changeLang} className={s.lang}>language: {lang}</div>
            <h2 className={s.title}>{count} <strong>Peoples</strong> for you to choose your favorite</h2>
            <Search/>
            <Filter filterCharacters={filterCharacters}/>
            <InfiniteScroll
               dataLength={filteredCharacters.length}
               next={fetchMore}
               hasMore={page < max + 1}
               endMessage={<h4 className={status === 'loading' ?  s.none : s.message}>Персонажей больше нет :( </h4>}
               loader={<h4 className={s.message}>Загрузка...</h4>}
            >
               {status !== 'loading' ?
                  <div className={filteredCharacters.length !== 0 ? s.list : s.empty}>
                     {filteredCharacters.length !== 0 ?
                        filteredCharacters.map(el => {
                           return (
                              <Card key={el.name}
                                    character={el}
                              />
                           )
                        }) : <div>Персонажей не найдено</div>}
                  </div> : <img className={s.load} src={load} alt="loading"/>
               }
            </InfiniteScroll>
         </div>
         <CharacterModal/>

      </div>
   );
})

export default Characters;