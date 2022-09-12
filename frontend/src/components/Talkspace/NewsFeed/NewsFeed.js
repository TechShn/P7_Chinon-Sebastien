import React, {useState} from 'react';
import ToogleBtn from '../../ToogleBtn/ToogleBtn';


function NewsFeed(props) {

    const arr = [];
    const [socialPost, setSocialPost] = useState("");
    //const createElement = arr.push(React.createElement('p' ,{ className: 'brown', key: post.title} , 'My first React code'))
    //console.log(socialPost);


        fetch('http://localhost:4200/api/socialPost')
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(posts) {
                posts.forEach(post => {
                    //console.log(post);
                    arr.push(React.createElement('div' ,{ className: 'block-Post', key: post.title} , 
                        React.createElement('div', {className: "info"}, post.title),
                        React.createElement('div', {className: "post"}, post.description),
                        React.createElement('div', {className: "socialBtn"}, <ToogleBtn />)
                        
                    ))
                    
                    /*const lol = arr.map((test) => (
                        <div key="lol">{test}</div>
                    ) )*/
                    setSocialPost(arr)
                    //console.log(arr);
                });
            })
            .catch(function(error) {
                console.error("Impossible de récuper la liste des produits depuis l'API", error)
            })



   return (
   <div className="block-newsfeed">
        <h2>Fil d'Actualité</h2>
        {socialPost}
    </div>
    )
}

export default NewsFeed