import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import Talkspace from "../components/Talkspace/TalkSpace"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const logout = (<button onClick={handleClick}>logout</button>)
    const navigate = useNavigate();

    function handleClick() {
        navigate('/')
    }

    return(
        <div className="page">
            <Banner list='logout' logout={logout}/>
            <Cart />
            <Talkspace />
            <Footer />
        </div>
    )
}
export default Home;