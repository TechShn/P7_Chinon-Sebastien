import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import Img1 from "../../../images/Img1.jpg"


let user = JSON.parse(sessionStorage.getItem("user"));
console.log(user);


function NewsFeed(props) {
    const [socialPost, setSocialPost] = useState([]);
    const [textPost, setTextPost] = useState("");
    //const [blockModify, setBlockModify] = useState('blockModifyDisplay')
    const [like, setLike] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const navigate = useNavigate();
    const isAdmin = user.isAdmin;



    function handleonMouseEnterPost(event) {
        navigate(`/acceuil/${event.target.dataset.id}`);
        //const lol = event.target.children[3].children[0].children[0].children[0].className
        //lol === 'iconThumbsUp' ? setLike(false) : setLike(true) 
    }

    function handleMouseEnterLike(event) {
        console.log(event.target.className);
        const thumbsTrue = event.target.className;
        thumbsTrue === 'fa-solid fa-thumbs-up' ? setLike(false) : setLike(true);
    }



    function handleClickLike(event) {
        const str = window.location;
        const url = new URL(str);
        const tokenUrl = url.pathname
        const id = tokenUrl.substring(tokenUrl.lastIndexOf('/') + 1)



        setLike(!like)
        console.log(like);

        const dataLike = {
            like: like,
            userId: user.userId
        }

        fetch(`http://localhost:4200/api/socialPost/${id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(dataLike)
            }
        )
        .then(res => res.json())
        .then(function(res) {

        })
        .catch(function(error) {
        })
    }

    function handleClickModify(event) {
        //setBlockModify('blockModify')
        /*if(event.target !== event.currentTarget) {
            return event.target.children[0].className = 'blockModify';
        }*/
        event.currentTarget.children[0].className = 'blockModify';
        //console.log(event.currentTarget);
    }

    function handleModifChange(event){
        setTextPost(event.target.value);
        console.log(textPost);
    }

    function addAnImage(event) {
        const file = event.target.files[0];
        setImageUrl(file);
        console.log(imageUrl);
    }

    function handleClickValide(event){
        const str = window.location;
        const url = new URL(str);
        const tokenUrl = url.pathname
        const id = tokenUrl.substring(tokenUrl.lastIndexOf('/') + 1)

        const file = imageUrl
        const formData = new FormData()

        formData.append('image', file)

        const dataModif = {
            textPost
        }
        const json = JSON.stringify(dataModif);

        formData.append('dataModif', json) 
        for (var p of formData) {
            console.log(p);
          }

        fetch(`http://localhost:4200/api/socialPost/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: formData
            }
        )
        .then(res => res.json())
        .then((newSocialPost) => newSocialPost)
        .catch(function(error) {
        })
    }
        


    function handleClickDelete() {
        const str = window.location;
        const url = new URL(str);
        const tokenUrl = url.pathname
        const id = tokenUrl.substring(tokenUrl.lastIndexOf('/') + 1)



        fetch(`http://localhost:4200/api/socialPost/${id}`,{
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
            }})
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
            .catch((res) => res.status(400).json(res))
    }

    

    
    function initPost() {
        fetch('http://localhost:4200/api/socialPost', 
        {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }})
            .then(res => res.json())
            .then(res => {
                setSocialPost(res)
            }
            
                )
            .catch((res) => res.status(400).json(res))
    }
    
    useEffect(() => {initPost()}, []);
            

   return (

   <div className="block-newsfeed">
        <h2>Fil d'Actualité</h2>
        {socialPost.map(post => 
            <div onMouseEnter={handleonMouseEnterPost} className='block-Post' key={post._id} data-id={post._id}>
                <div  className='info' data-id={post._id}><p className='name'>{post.name}</p></div>
                <div className='post' data-id={post._id}>{post.textPost}</div>
                <div className='blockImg' data-id={post._id}>
                {post.imageUrl && <img src={post.imageUrl} alt='sauce' className='Img' data-id={post._id} />}
                </div>

                <div className="block-like" >
                    <div onClick={handleClickLike}  className='socialBtn' data-id={post._id}>
                        <div>
                            {post.userLiked.includes(user.userId) ?  
                            <p className='iconThumbsUp'><i onMouseEnter={handleMouseEnterLike} data-id={post._id} className="fa-solid fa-thumbs-up"></i></p>
                            :  <p><i onMouseEnter={handleMouseEnterLike} className="fa-regular fa-thumbs-up"></i></p>} 
                        </div>
                        <div>{post.like}</div>
                    </div>{post.date}
                </div>
                
                
                {(isAdmin || user.userId === post.userId ) ? <div className={'blockPostBtn'}>
                    <div className='postBtn'>
                        <p data-id={post._id} onClick={handleClickDelete}>Supprimez</p>
                        <div onClick={handleClickModify}>
                            Modifier
                            <div className="blockModifyDisplay">
                                <textarea data-id={post._id} className='inputModifyDisplay' rows="2" cols="121" placeholder="Modifie ton post" onChange={handleModifChange}></textarea>
                                <div className='btnModif'>
                                    <input type="file" data-id={post._id} onChange={addAnImage} />
                                    <button data-id={post._id} onClick={handleClickValide}>Valider</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    
                    

                </div> : "" }
            </div>
        )}
    </div>
    )
}

export default NewsFeed