import React, {useState} from 'react';


let user = JSON.parse(sessionStorage.getItem('user'))
//console.log(key);

function TalkField(props) {
    const [textPost, setTextPost] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);


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
        })
        .catch(function(error) {
        })
    }

    return <div>
        <div className="block-talkfield">
            <h2 className="title-text">Exprime toi !</h2>
            <div className="block-textarea"><textarea className="textarea" rows="2" cols="120" placeholder="Exprime toi ..." onChange={handleChange}></textarea></div>
            <div className="block-submit">
                <input onChange={addAnImage} type='file' className="btn-image"/>
                <input onClick={InitSocialPost} type="submit" value="Poster" className="btn-submit"/>
            </div>
        </div>
    </div>

    
}

export default TalkField