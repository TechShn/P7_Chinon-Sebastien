import React, { Component } from 'react';


class InputCallback extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue : ""
        }
        this.handleChange = this.handleChange.bind(this)
    }


handleChange(event) {
    console.log(this.state.inputValue);
    this.setState(() => ({
        inputValue : event.target.value
    }))
}

    render() {
        return (
            <div>
                <GetInput 
                    value={this.state.inputValue} 
                    function={this.handleChange}
                />
                <RenderInput lastvalue={this.state.inputValue}/>
            </div>
        );
    }
};




const GetInput = (props) => {
    return (
        <div>
            <p>get Input</p>
            <input type="text" value={props.value} onChange={props.function} />

        </div>
    );
};




const RenderInput = (props) => {
    return (
        <div>
            <p>la valeur de l'input est {props.lastvalue}</p>
        </div>
    );
};



export default InputCallback;

