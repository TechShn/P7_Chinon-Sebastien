
import NewsFeed from "./NewsFeed/NewsFeed.js"
//import NewsFeed2 from "./NewsFeed/NewsFeed2.js"


function TalkSpace(props) {

    return <div className="talkspace">
        {<NewsFeed option={props.option} />}
        {/*<NewsFeed2 />*/}
    </div>
}

export default TalkSpace


