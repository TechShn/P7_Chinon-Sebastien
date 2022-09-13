import React, { useState, useEffect } from 'react';
import ToogleBtn from '../../ToogleBtn/ToogleBtn';


function NewsFeed(props) {

    const [socialPost, setSocialPost] = useState([])

    useEffect(() => {
        fetch('http://localhost:4200/api/socialPost')
            .then(res => res.json())
            .then(res => setSocialPost(res))
      }, []);

   return (

   <div className="block-newsfeed">
        <h2>Fil d'Actualité</h2>
        {socialPost.map(post => 
            <div className='block-Post' key={post.name}>
                <div className='info'>{post.name}</div>
                <div className='post'>{post.textPost}</div>
                <div className='socialBtn'><ToogleBtn /></div>
            </div>
        )}
    </div>
    )
}

export default NewsFeed




    /*fetch('http://localhost:4200/api/socialPost')
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(posts) {
                posts.forEach(post => {
                    //console.log(post);
                    const lol = React.createElement('div' ,{ className: 'block-Post', key: post.name} , 
                        React.createElement('div', {className: "info"}, post.name),
                        React.createElement('div', {className: "post"}, post.textPost),
                        React.createElement('div', {className: "socialBtn"}, <ToogleBtn />)
                    )
                    console.log();
                });
            })
            .catch(function(error) {
                console.error("Impossible de récuper la liste des produits depuis l'API", error)
            })*/