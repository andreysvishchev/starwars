import React from 'react';
import s from './Home.module.scss'
import {Link} from "react-router-dom";
import banner from '../../img/banner.png'

const Home = () => {
   return (
      <div className={s.home}>
         <div className={s.container}>
            <div className={s.info}>
               <h1 className={s.title}>
                  <strong>Find</strong> all your
                  favorite <strong>character</strong>
               </h1>
               <div className={s.subtitle}>You can find out all the information about your favorite characters</div>
               <Link className={s.link} to='/characters'>See more...</Link>
            </div>
               <img className={s.banner} src={banner} alt="banner"/>
         </div>
      </div>
   );
};

export default Home;