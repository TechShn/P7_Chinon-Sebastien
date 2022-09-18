import React, {useState} from 'react';

/*const str = window.location;
const url = new URL(str);
const token = url.searchParams.get('token')*/
//console.log(token);

let user = JSON.parse(sessionStorage.getItem('user'))
//console.log(key);

function TalkField(props) {
    const [textPost, setTextPost] = useState("");
    //const [userId, setUserId] = useState('')
    //console.log(userId);



    function handleChange(event) {
        setTextPost(event.target.value)

    }


    function InitSocialPost() {
        const dataField = {
            textPost,
            userId: user.userId
        }


        fetch('http://localhost:4200/api/socialPost', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(dataField)
            }
        )
        .then(res => res.json())
        .then(function(res) {
            console.log(res._id);
            //setUserId(res._id)
            console.log(dataField);
        })
        .catch(function(error) {
        })
    }



    function addAnImage() {
        alert("C'est gagné")
        localStorage.setItem('name', 'sebastien')
    }





    return <div>
        <div className="block-talkfield">
        <h2 className="title-text">Exprime toi !</h2>
        <div className="block-textarea"><textarea className="textarea" rows="2" cols="120" placeholder="Exprime toi ..." onChange={handleChange}></textarea></div>
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