import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

const ThumbsBtn = (props) => {


    return (
        <div className='block-Thumbs'>
                <div onClick={this.activeCartOn}>
                    {!this.state.isCartOn ?  
                        <p className='iconThumbsUp'><FontAwesomeIcon icon={faThumbsUp} /></p>
                         :  <p><FontAwesomeIcon icon={faThumbsUp} /></p>} 
                </div>

                <div onClick={this.activeCartOff}>
                    {!this.state.isCartOff ?  <p className='iconThumbsDown'><FontAwesomeIcon icon={faThumbsDown} /></p> :  <p><FontAwesomeIcon icon={faThumbsDown} /></p>} 
                </div>
            </div>
    );
};

export default ThumbsBtn;