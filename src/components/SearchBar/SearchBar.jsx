import { useState } from "react";
import style from "./Searchbard.module.css"

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");
   const handleChange = (event) =>{
        setId(event.target.value);
          }
   return (
      <div>
          <input className={style.searchdos} type='search' onChange= {handleChange} value ={id} />
           <button className={style.search} onClick={() => {onSearch(id) ; setId("")} }>Agregar</button> 
         
      </div>
   );
}
