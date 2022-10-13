import React from 'react';
import s from './Header.module.scss'
import logo from '../../img/logo.png'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
   const setActive = ({isActive}: { isActive: boolean }): string => {
      return `${s.link} ${isActive ? s.active : ''}`;
   }
   return (
      <div className={s.header}>
         <div className={s.container}>
            <Link to='/'>
               <img src={logo} alt="home"/>
            </Link>
            <div className={s.nav}>
               <NavLink className={setActive} end to='/'>Home</NavLink>
               <NavLink className={setActive} to='/characters'>Characters</NavLink>
            </div>
         </div>
      </div>
   );
};

export default Header;