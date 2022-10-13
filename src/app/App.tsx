import React from 'react';
import Header from "../components/header/Header";
import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/home/Home";
import Characters from "../pages/characters/Characters";
import Page404 from "../pages/page404/Page404";
import s from './App.module.scss'

function App() {
   const location = useLocation()

   return (
      <div className={s.app}>
         {location.pathname !== '/404' && <Header/>}
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/characters' element={<Characters/>}/>
            <Route path="/404" element={<Page404/>}/>
            <Route path="*" element={<Navigate to='/404'/>}/>
         </Routes>
      </div>
   );
}

export default App;
