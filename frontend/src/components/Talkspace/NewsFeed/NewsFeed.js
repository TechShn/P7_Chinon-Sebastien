import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import ToogleBtn from '../../ToogleBtn/ToogleBtn';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
//import jwt_decode from "jwt-decode";

/*const str = window.location;
const url = new URL(str);
const tokenUrl = url.pathname
const lastItem = tokenUrl.substring(tokenUrl.lastIndexOf('/') + 1)*/
//console.log(lastItem);




let user = JSON.parse(sessionStorage.getItem("user"));
//console.log(user);






function NewsFeed(props) {
    const [socialPost, setSocialPost] = useState([]);
    const [textPost, setTextPost] = useState("");
    const [blockModify, setBlockModify] = useState('blockModifyDisplay')
    const [like, setLike] = useState(false)
    /*const [Modify, setModify] = useState(
    <div className='blockModifyDisplay'>
        <textarea className='inputModifyDisplay' rows="2" cols="121" placeholder="Modifie ton post"></textarea>
        <button>Valider</button>
    </div>
    )*/
    //const [blockBtn, setBlockBtn] = useState(<div className={props.option}><div className='socialBtnDisplay'><ToogleBtn /></div></div>)
    const navigate = useNavigate();
    //console.log(props.option);
    const isAdmin = user.isAdmin;



    function handleClickPost(event) {
        //console.log(event.target);
        navigate(`/acceuil/${event.target.dataset.id}`);

        //event.target.children[2].className = "postBtn"
        /*if(ptdr === true) {
            event.target.children[3].className = "postBtn"
        }
        console.log(event);*/
    }

    function handleClickLike() {
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
            /*if ( res.userLiked.includes(user.userId)) {
                console.log('sisi');
                return setLike(true);
            } else {
                console.log('nono');
                return setLike(false);
            }*/

        })
        .catch(function(error) {
        })
    }

    function handleClickModify(event) {
        setBlockModify('blockModify')
        
    }

    function handleModifChange(event){
        setTextPost(event.target.value);
        console.log(textPost);
    }

    function handleClickValide(event){
        const str = window.location;
        const url = new URL(str);
        const tokenUrl = url.pathname
        const id = tokenUrl.substring(tokenUrl.lastIndexOf('/') + 1)

        

        const dataModif = {
            textPost
        }
        console.log(dataModif);

        fetch(`http://localhost:4200/api/socialPost/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(dataModif)
            }
        )
        .then(res => res.json())
        .then(function(res) {
        
        })
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
    

    
    useEffect(() => {
        fetch('http://localhost:4200/api/socialPost', 
        {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }})
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setSocialPost(res)
            }
                )}, []);

   return (

   <div className="block-newsfeed">
        <h2>Fil d'Actualité</h2>
        {socialPost.map(post => 
            <div onClick={handleClickPost} className='block-Post' key={post._id} data-id={post._id}>
                <div  className='info' data-id={post._id}><p className='name'>{post.name}</p></div>
                <div className='post' data-id={post._id}>{post.textPost}</div>
                <div className="block-like" >
                    <div onClick={handleClickLike} className='socialBtn' data-id={post._id}>
                        <div>
                            {post.userLiked.includes(user.userId) ?  
                            <p  className='iconThumbsUp'><FontAwesomeIcon icon={faThumbsUp} /></p>
                            :  <p><FontAwesomeIcon icon={faThumbsUp} /></p>} 
                        </div>
                        <div></div>
                    </div>{post.date}
                </div>
                
                
                {(isAdmin || user.userId === post.userId ) ? <div className={'blockPostBtn'}>
                    <div className='postBtn'>
                        <p data-id={post._id} onClick={handleClickDelete}>Supprimez</p>
                        <p onClick={handleClickModify}>Modifier</p>
                    </div>
                    <div className={blockModify}>
                        <textarea data-id={post._id} className='inputModifyDisplay' rows="2" cols="121" placeholder="Modifie ton post" onChange={handleModifChange}></textarea>
                        <button data-id={post._id} onClick={handleClickValide}>Valider</button>
                    </div>
                </div> : "" }
                {/*console.log(post.userId === user.userId)*/}
            </div>
        )}
    </div>
    )
}

export default NewsFeed