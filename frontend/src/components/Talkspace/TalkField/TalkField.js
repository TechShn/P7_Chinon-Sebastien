import React, {useState} from 'react';

function TalkField(props) {
    const arr = [];
    const [socialPost, setSocialPost] = useState("")
    console.log(socialPost);


    function InitSocialPost() {
        fetch('http://localhost:4200/api/socialPost')
            .then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function(posts) {
                
                posts.forEach(post => {
                    console.log(post);
                    arr.push(React.createElement('p' ,{ className: 'brown', key: post.title} , 'My first React code'))
                    /*const lol = arr.map((test) => (
                        <div key="lol">{test}</div>
                    ) )*/
                    setSocialPost(arr)
                    console.log(arr);
                });
            })
            .catch(function(error) {
                console.error("Impossible de récuper la liste des produits depuis l'API", error)
            })
    }



    function addAnImage() {
        alert("C'est gagné")
    }





    return <div>
        <div className="block-talkfield">
        <h2 className="title-text">Exprime toi !</h2>
        <div className="block-textarea"><textarea className="textarea" rows="2" cols="120" placeholder="Exprime toi ..."></textarea></div>
        <div className="block-submit">
            <button onClick={addAnImage} className="btn-image">Add an Image</button>
            <input onClick={InitSocialPost} type="submit" value="Poster" className="btn-submit"/>
        </div>
    </div>


    {/*<div className='newsFeeds'>
                {socialPost}
</div>*/}

    </div>

    
}

export default TalkField