import React from 'react';
import './App.css';
import Theme from './Providers/ThemeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './Pages/MainPage/MainPage';
import Header from './Components/Header/Header';
import Tabs from './Components/Tabs/Tabs';
import ProductPage from './Pages/ProductPage/ProductPage';
import Card from './Components/Card/Card';
import { useDispatch } from 'react-redux';
import { getItem } from './Redux/Slice/products';
import SelectedPage from './Pages/SelectedPage/SelectedPage';

function App() {

  const dispatch = useDispatch();
  dispatch(getItem());

  return (
  <>
  <Theme>
    <BrowserRouter>
    <Header></Header>
    <Tabs></Tabs>
    <Card></Card>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/Pizza' element={<ProductPage/>}/>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:id' element={<SelectedPage/>}/>
      </Routes>
    </BrowserRouter>
  </Theme>
  </>
  );
}

export default App;
