

function addAnImage() {
    alert("C'est gagné")
}

function Poster() {
    alert("C'est perdu")
}


function NewsFeed() {
    return <div className="block-talkfield">
        <h2 className="title-text">Exprime toi !</h2>
        <div className="block-textarea"><textarea className="textarea" rows="2" cols="120" placeholder="Exprime toi ..."></textarea></div>
        <div className="block-submit">
            <button onClick={addAnImage} className="btn-image">Add an Image</button>
            <input onClick={Poster} type="submit" value="Poster" className="btn-submit"/>
        </div>
    </div>
}

export default NewsFeed