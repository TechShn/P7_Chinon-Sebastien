import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
//import Cart from "./Cart/Cart";

class toogleBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCartOn:  true,
            isCartOff:  true,
        }

        this.activeCartOn = this.activeCartOn.bind(this);
        this.activeCartOff = this.activeCartOff.bind(this)
    }

    activeCartOn() {
        this.setState((prevState) => ({
            isCartOn: !prevState.isCartOn
        }))
    }

    activeCartOff() {
        this.setState((prevState) => ({
            isCartOff: !prevState.isCartOff
        }))
    }

    render() {
        console.log();
        return (
            <div className='block-Thumbs'>
                <div onClick={this.activeCartOn}>
                    {!this.state.isCartOn ?  <p className='iconThumbsUp'><FontAwesomeIcon icon={faThumbsUp} /></p> :  <p><FontAwesomeIcon icon={faThumbsUp} /></p>} 
                </div>

                <div onClick={this.activeCartOff}>
                    {!this.state.isCartOff ?  <p className='iconThumbsDown'><FontAwesomeIcon icon={faThumbsDown} /></p> :  <p><FontAwesomeIcon icon={faThumbsDown} /></p>} 
                </div>
            </div>
        );
    }
}

export default toogleBtn;