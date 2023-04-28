import { Link } from "react-router-dom";
import style from "./Card.module.css"

export default function Card({id, name,  species, gender,status , origin, image, onClose} ) {
   return (   
       
      <div className={style.carta}>
            <button className={style.boton} onClick={() =>onClose(id)}>X</button>

          <Link to ={`/detail/${id}`}>
          <h2 >{name} </h2>
          </Link>
         <h2 className={style.h2}>{name }</h2>  
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         
         <img className={style.imagen} src={image} alt='' /> 
         
      </div>
   );
}
