import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
//import Cart from "./Cart/Cart";

class toogleBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCartOn:  true,
        }

        this.activeCart = this.activeCart.bind(this)
    }
    activeCart() {
        this.setState((prevState) => ({
            isCartOn: !prevState.isCartOn
        }))
    }
    render() {
        console.log();
        return (
            <div>
                <button className='lol' onClick={this.activeCart}>
                    {this.state.isCartOn ? 'ON' : 'OFF'}
                    {this.state.isCartOn ?  <p><FontAwesomeIcon icon={faThumbsUp} /></p> :  <p><FontAwesomeIcon icon={faThumbsDown} /></p>} 
                    {console.log(this)}
                </button>
            </div>
        );
    }
}

export default toogleBtn;