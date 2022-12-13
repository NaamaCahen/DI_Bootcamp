
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import Home from './components/Home';
import NavBar from './components/NavBar'
import {tachyons} from 'tachyons'
import { useEffect } from 'react';




function App() {

  useEffect(()=>{
    localStorage.setItem('favorites',localStorage.getItem('favorites')||"[]")
  },[])
 
  return (
    <>
    <NavBar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </>
  );
}

export default App;
