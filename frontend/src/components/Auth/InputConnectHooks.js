import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
//import { createRoot } from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo_Groupomania_3.png';
import jwt_decode from "jwt-decode";


const InputConnectHooks = (props) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const name = props.name
    const [submit, setSubmit] = useState(<button  type="submit" id="ConnexionIDInactif" name="ConnexionID" value="Connexion">Connexion</button>)
    const navigate = useNavigate();


    const regexEmail = /[^@]+@.+\.\w{2,3}$/.test(email);
    const regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/.test(password);

    
    function handleChangeEmail(event) {
        setEmail(event.target.value)
        setErrMsg(regexEmail ? "" : <p className='msg-ErrorEmail'>Adresse e-mail non valide</p>)
        setSubmit(regexEmail && regexPassword ? <button  type="submit" id="ConnexionID" name="ConnexionID" value="Connexion">Connexion</button>
         : <button  type="submit" id="ConnexionIDInactif" name="ConnexionID" value="Connexion">Connexion</button>)
        
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
        setErrMsg(regexPassword ? "" : <p className='msg-ErrorEmail'>Mots de passe non valide</p>)
        setSubmit(regexEmail && regexPassword ? <button  type="submit" id="ConnexionID" name="ConnexionID" value="Connexion">Connexion</button>
         : <button  type="submit" id="ConnexionIDInactif" name="ConnexionID" value="Connexion">Connexion</button>)
    }


    function handleChangeSubmit(event) {
        event.preventDefault()
        const data = {
            email,
            password,
            name
        }
        fetch('http://localhost:4200/api/auth/' + props.fetch, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            }
        )
        .then(res => res.json())
        .then(function(res) {
            
            //console.log(res);
                console.log(res.token);
                const decodedToken = jwt_decode(res.token)
                sessionStorage.setItem('user', JSON.stringify({userId: decodedToken.userId, isAdmin: decodedToken.isAdmin , userName: decodedToken.userName, token: res.token}));
                console.log(res);
                
        
                setErrMsg(<p className='msg-ErrorDisplay'></p>)
                navigate(`/acceuil`);
                window.location.reload()
                
        })
        .catch(function(error) {
            console.log('error')
            setErrMsg(<p className='msg-ErrorEmail'>Erreur server :500  Paire login/mot de passe incorrecte</p>);
        })
    }

    return (
        <div className='block-inputConect'>
                <form onSubmit={handleChangeSubmit} className='block-form' action="">
                <img src={logo} alt="Logo groupomania"  />
                <h2>{props.title}</h2>
                    <div className='block-email'>
                        <label htmlFor="email"></label>
                        <input type="email" id="emailID" name="email" placeholder=' Adresse e-mail' value={email} onChange={handleChangeEmail} onBlur={handleChangeEmail} required/>
                    </div>

                    {props.blockName}

                    <div className='block-password'>
                        <label htmlFor="password"></label>
                        <input type="password" id="passwordID" name="password" placeholder='Mots de passe' value={password} onChange={handleChangePassword} onBlur={handleChangePassword} required/>
                            {errMsg}
                    </div>

                    <div className='block-submitConect'>
                            {submit}
                    </div>
                </form>
            </div>
    );
};


export default InputConnectHooks;