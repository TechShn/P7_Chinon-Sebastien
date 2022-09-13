import React, {useState} from 'react';

function TalkField(props) {
    const [textPost, setTextPost] = useState("")
    console.log(textPost);



    function handleChange(event) {
        setTextPost(event.target.value)
        console.log(event.target.value);

    }


    function InitSocialPost() {
        const dataField = {
            textPost
        }

        console.log(dataField);

        fetch('http://localhost:4200/api/socialPost', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataField)
            }
        )
        .then(res => res)
        .then(function(res) {
        })
        .catch(function(error) {
        })
    }



    function addAnImage() {
        alert("C'est gagné")
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