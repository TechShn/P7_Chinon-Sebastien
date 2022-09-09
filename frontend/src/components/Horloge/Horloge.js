import React, { Component } from 'react';

class Horloge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            horloge: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.watches(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    watches(){
        this.setState({
            horloge: new Date()
        })
    }

    render() {
        //const event = new Date();
        return (
            <div className='block-horloge'>
                 <h3>HORLOGE</h3>
                 <div>{this.state.horloge.toLocaleTimeString('it-IT')}</div>
                 <div>{this.state.horloge.toLocaleDateString('us-US')}</div>
            </div>
        );
    }
}

export default Horloge;