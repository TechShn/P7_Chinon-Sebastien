import React, { useState } from 'react';
import InputConnectHooks from "../components/Auth/InputConnectHooks"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"

const Identification = () => {
    const [pseudo, setPseudo] = useState("")
    //const regexPseudo = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/.test(pseudo);


    function handleChangePseudo(event) {
        setPseudo(event.target.value)
        console.log(event.target.value);
        /*setErrMsg(regexPassword ? "" : <p className='msg-ErrorEmail'>Pseudo non valide</p>)
        setSubmit(regexEmail && regexPassword ? <button  type="submit" id="ConnexionID" name="ConnexionID" value="Connexion">Connexion</button>
         : <button  type="submit" id="ConnexionIDInactif" name="ConnexionID" value="Connexion">Connexion</button>)*/
    }


    const userName = (<div className='block-password'>
    <label htmlFor="pseudo"></label>
    <input type="text" id="textId" name="text" placeholder='Votre pseudo' value={pseudo} onChange={handleChangePseudo} onBlur={handleChangePseudo} required/>
        {/*errMsg*/}
</div>)

    return(
        <div className="page">
            <Banner />
            <InputConnectHooks title="Inscrivez vous !" fetch="signup" blockName={userName} name={pseudo}/>
            <Footer />
        </div>
    )
}

export default Identification