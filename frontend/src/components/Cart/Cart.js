import React, { Component } from 'react';
import Horloge from '../Horloge/Horloge';


class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "Chinon Sebastien",
            user2: true,
            compteur: 0
        }
        this.modifySet = this.modifySet.bind(this)
        this.comptFuncPlus = this.comptFuncPlus.bind(this)
        this.comptFuncMoin = this.comptFuncMoin.bind(this)
        this.comptFuncReset = this.comptFuncReset.bind(this)
    }

    modifySet(){
        this.setState((prevState) => ({
            user2: !prevState.user2
        }
        ))
    }

    comptFuncPlus(){
        this.setState((prevState) => ({
            compteur: prevState.compteur + 1
        }))
    }

    comptFuncMoin(){
        this.setState((prevState) => ({
            compteur: prevState.compteur - 1
        }))
    }

    comptFuncReset(){
        this.setState((prevState) => ({
            compteur: prevState.compteur = 0
        }))
    }

    render() {
        if(this.state.user2 ) {
        const member = this.state.user;
        
        return (
            <div className='block-cart'>
                <h2>membres</h2>
                <ul>
                    <li>{member}</li>
                </ul>
                <button onClick={this.modifySet}>Modifier  set</button>
                <div className="test">
                    <button onClick={this.comptFuncPlus} className='btn-test'>+</button>
                    <button onClick={this.comptFuncMoin} className='btn-test'>-</button>
                    <button onClick={this.comptFuncReset} className='btn-test'>reset</button>
                    <p>Compteur = {this.state.compteur} </p>
                    <Horloge />
                </div>
            </div>
        );
    } else {
        return (
        <div className="popo">
            <button onClick={this.modifySet}>Modifier  set</button>
        </div>
        
        )
    }
    }
}

export default Cart;