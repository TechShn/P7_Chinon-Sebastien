import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import Talkspace from "../components/Talkspace/TalkSpace"

const Home = () => {
    return(
        <div className="page">
            <Banner />
            <Cart />
            <Talkspace />
            <Footer />
        </div>
    )
}
export default Home;