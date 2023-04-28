import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState ({});
    const [userData, setUserData] = useState({
        email:"",
        password:"",
    });   

const handleChange = (event) =>{
    setUserData({...userData, [event.target.name]: event.target.value });
  const  validateErrors = (validation({...userData,[event.target.name]: event.target.value}));
  setErrors(validateErrors);
};

const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
}
       return(
        <form onSubmit={handleSubmit}>
            
                <label htmlFor="email" >Usuario: </label>
                <input 
                type="text" 
                name="email" 
                value={userData.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{color: "red"}}>{errors.email } </p>  }
           <hr/>
                <label htmlFor="password" >Contraseña: </label>
                <input type="text" 
                name="password" 
                value={userData.password}
                onChange={handleChange}></input>
                {errors.email && <p style={{color: "red"}}>{errors.password } </p>  }
                  
            <button type="submit"> LOGIN</button>
        </form>
    )
}

export default Form;

