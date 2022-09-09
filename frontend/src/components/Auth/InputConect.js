import React, { Component } from 'react';
import logo from '../../assets/logo_Groupomania_3.png';

class InputConect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password : "",
            submit: "",
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeSubmit = this.handleChangeSubmit.bind(this)
    }

    handleChangeEmail(event) {
        
        //const regexEmail = /[^@]+@.+\.\w{2,3}$/.test(event.target.value);
        //const msgErrorEmail = document.getElementsByClassName('msg-ErrorEmail')
        this.setState(() => ({
            email: event.target.value,
        }))
        /*if (regexEmail === true) {
            alert('Ca marche')
        } else {
            alert('Ca marche pas')
        }*/
    }

    handleChangePassword(event) {
        if(event)
        this.setState(() => ({
            password: event.target.value,
        }))
    }

    handleChangeSubmit(event) {
        ;
        event.preventDefault()
        this.setState(() => ({
            submit: [this.state.email, this.state.password]
        }))
    }


    render() {
        const regexEmail = /[^@]+@.+\.\w{2,3}$/.test(this.state.email);
        const regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/.test(this.state.password);

        return (
            <div className='block-inputConect'>
                <form onSubmit={this.handleChangeSubmit} className='block-form' action="">
                <img src={logo} alt="Logo groupomania"  />
                <h2>{this.props.title}</h2>
                    <div className='block-email'>
                        <label htmlFor="email"></label>
                        <input type="email" id="email" name="email" placeholder=' Adresse e-mail' value={this.state.email} onChange={this.handleChangeEmail} required/>
                        {regexEmail ? "" : <p className='msg-ErrorEmail'>Adresse e-mail non valide</p>}
                    </div>

                    <div className='block-password'>
                        <label htmlFor="password"></label>
                        <input type="password" id="password" name="password" placeholder='Mots de passe' value={this.state.password} onChange={this.handleChangePassword} required/>
                            {regexPassword ? "" : <p className='msg-ErrorPassword'>Mots de passe invalide, (une majuscule, une minuscule et un chiffre requie)</p>}
                    </div>

                    <div className='block-submitConect'>
                            <input  type="submit" id="Connexion" name="Connexion" value="Connexion"/>
                            <h4>{this.state.submit[0]}  {this.state.submit[1]}</h4>

                        
                    </div>
                </form>
            </div>
        );
    }
}

export default InputConect;