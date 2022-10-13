import React from 'react';
import s from './Page404.module.scss'
import banner from '../../img/404.png'
import {Link} from "react-router-dom";

const Page404 = () => {
   return (
      <div className={s.error}>
         <div className={s.container}>
            <img className={s.banner} src={banner} alt="404"/>
            <Link className={s.link} to='/'>Return</Link>
         </div>
      </div>
   );
};

export default Page404;