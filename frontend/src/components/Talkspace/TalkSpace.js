import NewsFeed from "./NewsFeed/NewsFeed.js"


function TalkSpace(props) {

    return <div className="talkspace">
        {<NewsFeed option={props.option} />}
    </div>
}

export default TalkSpace


