import React, { Component } from 'react';

class NewsFeed2 extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default NewsFeed2;


























/*import React, { Component } from 'react';


let user = JSON.parse(localStorage.getItem("user"));





class NewsFeed2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:4200/api/socialPost',
        {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }})
        .then((res) => (res.json()))
        .then((json) => {
            console.log(json);
            this.setState({post: json});
            console.log(this.state.post);
        })
    }


    componentDidUpdate(){
        console.log(this.state.post);
    }

    render() {
        return (
            <div>
                <h2>lol</h2>
                {this.state.post.map(post => 
            <div className='block-Post' key={post._id} data-id={post._id}>
                <div  className='info' data-id={post._id}><p className='name'>{post.name}</p></div>
                <div className='post' data-id={post._id}>{post.textPost}</div>
                <div className='blockImg' data-id={post._id}>
                {post.imageUrl && <img src={post.imageUrl} alt='sauce' className='Img' data-id={post._id} />}
                </div>

                <div className="block-like" >
                    <div   className='socialBtn' data-id={post._id}>
                        <div>
                            {post.userLiked.includes(user.userId) ?  
                            <p className='iconThumbsUp'><i  data-id={post._id} className="fa-solid fa-thumbs-up"></i></p>
                            :  <p><i  className="fa-regular fa-thumbs-up"></i></p>} 
                        </div>
                        <div>{post.like}</div>
                    </div>{post.date}
                </div>
                
                
            
            </div>
        )}
                
            </div>
        );
    }
}

export default NewsFeed2;*/