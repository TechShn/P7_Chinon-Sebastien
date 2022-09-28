import React, { useCallback, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//import Img1 from "../../../images/Img1.jpg"


let user = JSON.parse(localStorage.getItem("user"));
console.log(user);



function NewsFeed(props) {
    const [socialPost, setSocialPost] = useState([]);
    const [textPost, setTextPost] = useState("");
    //const [blockModify, setBlockModify] = useState('blockModifyDisplay')
    const [like, setLike] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const navigate = useNavigate();
    const isAdmin = user.isAdmin;



    function handleChange(event) {
        setTextPost(event.target.value)
    }

    function addAnImage(event) {
        const file = event.target.files[0]

        setImageUrl(file);
        console.log(imageUrl);
    }


    function InitSocialPost() {
        const file = imageUrl
        const formData = new FormData()

        formData.append('image', file)
              //console.log(formData);
        //console.log(file);

        /*for (var p of formData) {
            console.log(p);
          }*/

        const dataField = {
            textPost: textPost,
            //imageUrl: formData,
            userId: user.userId,
            userName: user.userName
        }
        const json = JSON.stringify(dataField);
        
        formData.append('dataField', json)  

        fetch('http://localhost:4200/api/socialPost', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${user.token}`,
            },
            body: formData
            }
        )
        .then(res => res.json())
        .then(function(res) {
            console.log(file);
            for (var p of formData) {
            console.log(p);
          }
          initPost()
        })
        .catch(function(error) {
        })
    }


/*---------------------------------------------------------------------------------------------------------------*/
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
            initPost();
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
        .then(function(res) {
            event.target.parentElement.parentElement.className = 'blockModifyDisplay'
            initPost();
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
                initPost();
            })
            .catch((res) => res.status(400).json(res))

            
    }


    const initPost = useCallback( async () => {
        try {
            const response = await fetch('http://localhost:4200/api/socialPost', 
            {headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }})

            const dataResponse = await response.json();

            if(response.ok) {
                setSocialPost(dataResponse)
            } else {
                throw new Error(dataResponse.error);
            }

        } catch (error) {
            console.log("Probleme serveur la requete n'est pas partie");
            console.log(error);
        }
    }, [])

    useEffect(() => {
        initPost()
    }, [initPost])
    
    
    /*const initPost = async () => {
        const reponse = await fetch('http://localhost:4200/api/socialPost', 
        {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }})
            .then((res) => res.json())
            .then(res => {
                console.log(res);
                setSocialPost(res)
            }
                )
            .catch((res) => res.status(400).json(res))
    }*/
    

            

   return (

   <div className="block-newsfeed">

    <div className="block-talkfield">
            <h2 className="title-text">Exprime toi !</h2>
            <div className="block-textarea">
                <textarea className="textarea" rows="3" cols="100" placeholder="Exprime toi ..." onChange={handleChange}></textarea>
                <input onClick={InitSocialPost} type="submit" value="Poster" className="btn-submit"/>
            </div>
            <div className="block-submit">
                <input onChange={addAnImage} type='file' className="btn-image"/>
                
            </div>
    </div>
    <div className='filActualite'>
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
                        <div className='likeNumber'>{post.like}</div>
                    </div>
                    <p>{post.date}</p>
                </div>
                
                
                {(isAdmin || user.userId === post.userId ) && <div className={'blockPostBtn'}>
                    <div className='postBtn'>
                        <div data-id={post._id} onClick={handleClickDelete}>Supprimez</div>
                        <div onClick={handleClickModify}>
                            Modifier
                            <div className="blockModifyDisplay">
                                <textarea data-id={post._id} className='inputModifyDisplay' rows="1" cols="121" placeholder="Modifie ton post" onChange={handleModifChange}></textarea>
                                <div className='btnModif'>
                                    {post.imageUrl && <input type="file" data-id={post._id} onChange={addAnImage} />}
                                    <button data-id={post._id} onClick={handleClickValide}>Valider</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )}
        </div>
    </div>
    )
}

export default NewsFeed