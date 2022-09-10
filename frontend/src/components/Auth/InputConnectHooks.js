import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo_Groupomania_3.png';

const InputConnectHooks = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submit, setSubmit] = useState("")


    const regexEmail = /[^@]+@.+\.\w{2,3}$/.test(email);
    const regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/.test(password);

    
    function handleChangeEmail(event) {
        
        //const regexEmail = /[^@]+@.+\.\w{2,3}$/.test(event.target.value);
        //const msgErrorEmail = document.getElementsByClassName('msg-ErrorEmail')
        setEmail(event.target.value)
        /*if (regexEmail === true) {
            alert('Ca marche')
        } else {
            alert('Ca marche pas')
        }*/
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }


    function handleChangeSubmit(event) {
        event.preventDefault()
        setSubmit([email, password]) 
    }


    return (
        <div className='block-inputConect'>
                <form onSubmit={handleChangeSubmit} className='block-form' action="">
                <img src={logo} alt="Logo groupomania"  />
                <h2>{props.title}</h2>
                    <div className='block-email'>
                        <label htmlFor="email"></label>
                        <input type="email" id="emailID" name="email" placeholder=' Adresse e-mail' value={email} onChange={handleChangeEmail} required/>
                        {regexEmail ? "" : <p className='msg-ErrorEmail'>Adresse e-mail non valide</p>}
                    </div>

                    <div className='block-password'>
                        <label htmlFor="password"></label>
                        <input type="password" id="passwordID" name="password" placeholder='Mots de passe' value={password} onChange={handleChangePassword} required/>
                            {regexPassword ? "" : <p className='msg-ErrorPassword'>Mots de passe invalide, (une majuscule, une minuscule et un chiffre requie)</p>}
                    </div>

                    <div className='block-submitConect'>
                            <Link to="acceuil"><input  type="submit" id="ConnexionID" name="Connexion" value="Connexion"/></Link>
                            <h4> {console.log(submit)}</h4>

                        
                    </div>
                </form>
            </div>
    );
};


export default InputConnectHooks;