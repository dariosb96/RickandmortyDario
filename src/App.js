import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx';
import DETAIL from './components/Detail/Detail.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import {  Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form.jsx';

const URL_BASE= "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "5f23cb1c8392.65ba19e12084b2076e3e";

//CREDENCIALES FAKE
   const  email = "dariosb@gmail.com";
   const password="qwerty123"

   function App() {
// HOOKS 
const location = useLocation();
const [characters, setCharacters] = useState ([]);
const [access, setAccess] = useState(false); 
const navigate = useNavigate();


const login = (userData) =>{
   if(userData.email ===email && userData.password ===password){
        setAccess(true);
        navigate('/home');
   } 
   // else{
   //   alert("Credenciales incorrectas");
   // }
}
useEffect (() =>{
      !access && navigate('/');
   }, [access, navigate]);
 
 //EVENT HANDLERS  
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
           window.alert('¡No hay personajes con este ID!');
         }
      });
   }
      const onClose = (id) =>{
         const characterFiltered = characters.filter(character =>
            character.id !== id )
            setCharacters(characterFiltered)
      }
 //RENDER
   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch = {onSearch}  setAccess={setAccess} /> }
         <Routes>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path = "./Cards" element = {Cards} />
            <Route path='/about' element={<About/>} />
            
            <Route path='/detail/:id' element={<DETAIL/>} />
         </Routes>
      </div>
   );
}

export default App;
