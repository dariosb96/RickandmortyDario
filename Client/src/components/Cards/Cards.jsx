 import Card from '../Card/Card';
 import style from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   return (
   <div className={style.cartas}>
      {
         characters.map(({id, name,  species, gender,status ,
             origin, image})=> {
            return (
               <Card 
               key= {id}
               id = {id}
               name = {name}
               status={status}
               species={species}
               gender={gender}
               image={image}
               origin={origin.name}
               onClose={onClose}
                     />
            )
         })
      }
   </div>
   )
}
