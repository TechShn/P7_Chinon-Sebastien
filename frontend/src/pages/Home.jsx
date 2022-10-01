import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import Talkspace from "../components/Talkspace/TalkSpace"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const logout = (<button onClick={handleClick}>Déconnexion</button>)
    const navigate = useNavigate();

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