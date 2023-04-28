import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";



const DETAIL = () =>{
        const [character, setCharacter] = useState ({});
        const{id} = useParams();

        useEffect(() => {
            axios(`http://localhost:3001/rickandmorty/character/${id}`)
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