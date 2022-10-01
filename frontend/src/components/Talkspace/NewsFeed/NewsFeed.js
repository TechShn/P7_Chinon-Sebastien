import React, { useCallback, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

// Récuperer les donnée du LocalStorage
let user = JSON.parse(localStorage.getItem("user"));



function NewsFeed(props) {
    const [socialPost, setSocialPost] = useState([]);
    const [textPost, setTextPost] = useState("");
    const [like, setLike] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const navigate = useNavigate();
    const isAdmin = user.isAdmin;


    // Permet de mettre à jour le state textpost en la valeur de l'input
    function handleChange(event) {
        setTextPost(event.target.value)
    }

    // Permet de mettre à jour le state en la valeur du file selectionné
    function addAnImage(event) {
        const file = event.target.files[0]
        setImageUrl(file);
    }

    //Permet de faire une requête POST vers l'API afon d'envoyé les donnée 'textPost' 
    function SendSocialPost() {
        const file = imageUrl
        const formData = new FormData()
        

        const dataField = {
            textPost: textPost,
            userId: user.userId,
            userName: user.userName
        };
        const json = JSON.stringify(dataField);

        formData.append('image', file);
        formData.append('dataField', json);


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
            initPost()
        })
        .catch(function(error) {
        })
    }


/*---------------------------------------------------------------------------------------------------------------*/

    // Permet d'ajouter l'id du produit dans l'url lorsque la souris atteint le block du post
    function handleonMouseEnterPost(event) {
        navigate(`/acceuil/${event.currentTarget.dataset.id}`);

    }

    // Permet de determiner si le bouton like possède le status "true" ou "false"
    function handleMouseEnterLike(event) {
        console.log(event.currentTarget.className);
        const thumbsTrue = event.currentTarget.className;
        thumbsTrue === 'fa-solid fa-thumbs-up' ? setLike(false) : setLike(true);
    }


    // Permet de faire une requet POST vers l'API afin d'envoyer les donné 'like'
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

    // Fait apparaitre la <div> qui permet de faire les modification du post
    function handleClickModify(event) {
        event.currentTarget.children[0].className = 'blockModify';
    }

    // Permet de mettre à jour le state textpost en la valeur de l'input
    function handleModifChange(event){
        setTextPost(event.target.value);
        console.log(textPost);
    }

    
    // Permet de faire une requet PUT vers l'API afin d'envoyer les donnée dataModif
    function handleClickValide(event){
        const str = window.location;
        const url = new URL(str);
        const tokenUrl = url.pathname
        const id = tokenUrl.substring(tokenUrl.lastIndexOf('/') + 1)

        const file = imageUrl
        const formData = new FormData()


        const dataModif = {
            textPost
        }
        const json = JSON.stringify(dataModif);

        formData.append('image', file)
        formData.append('dataModif', json) 

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
        

    // Permet de faire une requet DELET vers l'API afin de supprimer les donnée lié à l'id
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


        //Permet de faire une requete GET afin de recupérer les donnée de l'API
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

    // Dans se cas précis useEffect me permet d'éviter de rentrer dans une boucle infini de requete vers l'API
    useEffect(() => {
        initPost()
    }, [initPost])
    
    
   return (

   <div className="block-newsfeed">

    <div className="block-talkfield">
            <h2 className="title-text">Exprime toi !</h2>
            <div className="block-textarea">
                <textarea className="textarea" rows="3" cols="100" placeholder="Exprime toi ..." onChange={handleChange}></textarea>
                <input onClick={SendSocialPost} type="submit" value="Poster" className="btn-submit"/>
            </div>
            <div className="block-submit">
                <label for="file">Choisissez une image</label> 
                <input onChange={addAnImage} type='file' className="btn-image"/>
            </div>
    </div>
    <div className='filActualite'>
        <h2>Fil d'Actualité</h2>
        {socialPost.map(post => 
            <div onMouseEnter={handleonMouseEnterPost} className='block-Post' key={post._id} data-id={post._id}>
                <div  className='info'>
                    <p className='name'>{post.name}</p>
                </div>
                <div className='post'>
                    {post.textPost}
                </div>
                <div className='blockImg'>
                    {post.imageUrl && <img src={post.imageUrl} alt='sauce' className='Img' />}
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
                        <div onClick={handleClickDelete}>Supprimez</div>
                        <div onClick={handleClickModify}>
                            Modifier
                            <div className="blockModifyDisplay">
                                <textarea className='inputModifyDisplay' rows="1" cols="121" placeholder="Modifie ton post" onChange={handleModifChange}></textarea>
                                <div className='btnModif'>
                                    {post.imageUrl && <input type="file" onChange={addAnImage} />}
                                    <button onClick={handleClickValide}>Valider</button>
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