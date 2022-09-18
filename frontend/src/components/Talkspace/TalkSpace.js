import TalkField from "./TalkField/TalkField.js"
import NewsFeed from "./NewsFeed/NewsFeed.js"


function TalkSpace(props) {

    return <div className="talkspace">
        <TalkField />
        <NewsFeed option={props.option} />
    </div>
}

export default TalkSpace


