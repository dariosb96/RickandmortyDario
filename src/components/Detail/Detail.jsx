import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";


const URL_BASE= "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "5f23cb1c8392.65ba19e12084b2076e3e";
 
const DETAIL = () =>{
        const [character, setCharacter] = useState ({});
        const{id} = useParams();

        useEffect(() => {
            axios(`${URL_BASE}/${id}?key=${API_KEY}`)
            .then(({ data }) => {
               if (data.name) {
                  setCharacter(data);
               } else {
                  alert('No hay personajes con ese ID');
               }
            });
            return setCharacter({});
         }, [id]);

    return (
        <div className={style.divi}>
           <h2>{character?.name} </h2>
           <h2>{character?.status} </h2>
           <h2>{character?.species} </h2>
           <h2>{character?.gender} </h2>
           <h2>{character?.origin?.name} </h2>
           <img src={character?.image} alt ={character?.name} /> 
       </div>
    )
}

export default DETAIL;