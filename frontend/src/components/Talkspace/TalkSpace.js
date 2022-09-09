import TalkField from "./TalkField/TalkField.js"
import NewsFeed from "./NewsFeed/NewsFeed.js"


function TalkSpace() {
    return <div className="talkspace">
        <TalkField />
        <NewsFeed />
    </div>
}

export default TalkSpace


