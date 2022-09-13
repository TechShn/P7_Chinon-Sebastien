import React, { Component } from 'react';

class InputConect extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }


    componentDidMount() {
        fetch('http://localhost:4200/api/socialPost')
            .then(res => res.json())
            .then(res => this.setState({posts: res}))
    }
    render() {
        return (
            <div>
                <p>Je suis la</p>
                {this.state.posts.map(post => <div key={post.name}>{post.textPost}</div>)}
            </div>
        );
    }
}

export default InputConect;