import React, {useState, useCallback} from 'react';


let user = JSON.parse(localStorage.getItem('user'))
//console.log(key);

function TalkField(props) {
    //const [socialPost, setSocialPost] = useState([])
    const [textPost, setTextPost] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);


    function test(){
        initPost()
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
                console.log('lol');
                //setSocialPost(dataResponse)
            } else {
                throw new Error(dataResponse.error);
            }

        } catch (error) {
            console.log("Probleme serveur la requete n'est pas partie");
            console.log(error);
        }
    }, [])

            //initPost()

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

    return <div>
        <div className="block-talkfield">
            <h2 className="title-text">Exprime toi !</h2>
            <button onClick={test}>test</button>
            <div className="block-textarea">
                <textarea className="textarea" rows="3" cols="100" placeholder="Exprime toi ..." onChange={handleChange}></textarea>
                <input onClick={InitSocialPost} type="submit" value="Poster" className="btn-submit"/>
            </div>
            <div className="block-submit">
                <input onChange={addAnImage} type='file' className="btn-image"/>
                
            </div>
        </div>
    </div>

    
}

export default TalkField