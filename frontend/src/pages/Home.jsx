import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import Talkspace from "../components/Talkspace/TalkSpace"
import { useNavigate } from "react-router-dom";
//import { useState } from "react";

const Home = (props) => {
    const logout = (<button onClick={handleClick}>logout</button>)
    const navigate = useNavigate();

    //const str = window.location;
    //const url = new URL(str);
    //const tokenUrl = url.searchParams.get('token')
    //console.log(tokenUrl);

   // const [token, setToken] = useState(tokenUrl)

    function handleClick() {
        localStorage.removeItem('user')
        navigate('/')
    }

    return(
        <div className="page">
            <Banner list='logout' logout={logout}/>
            <Cart />
            <Talkspace option={props.option}/>
            <Footer />
        </div>
    )
}
export default Home;