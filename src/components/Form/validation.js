// const validation = (userData, errors, setErrors ) =>{
//     if (!userData.username)
//         setErrors({...errors, username: "Por favor completa este campo"});
//     else if (userData.username.length > 35)
//         setErrors({...errors, username: "No puede superar los 35 caracteres"});
//   else if (
//             !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
//             )
//             {setErrors({...errors, username: "Email invalido"})
//          }   else{setErrors({...errors, username: ""})} 
        

//        if(userData.password.length <6 || userData.password.length > 10 ){
//         setErrors({...errors, password:"Longitud de password invalida"});
//        }else if (!/\d/.test(userData.password)){
//         setErrors({...errors, password:"Debe contener al menos un numero"});
//        } else{
//         setErrors({...errors, password: ""});
//        }
//        return errors;
//  }

const validation = (userData) => {
    const errors = {};
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2})+$/.test(userData.email)){
        errors.email = 'el email ingresado es invalido';
    }
    if(!userData.email){
        errors.email = 'debe ingresar un email';
    }
    if (userData.email.length > 35){
        errors.email = 'el email es muy largo';
    }
    if (!/.*\d+.*/.test(userData.password)){
        errors.password ='es incorrecto el password';
    }
    if(userData.password.length <6 && userData.password.length > 10){
        errors.password = 'la contraseña debe tener de 6 a 10 caracteres';
    }


    return errors;
}
export default validation;