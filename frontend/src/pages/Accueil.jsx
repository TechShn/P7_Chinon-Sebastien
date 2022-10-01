import Banner from "../components/Banner/Banner.js"
import Cart from "../components/Cart/Cart.js"
import TalkSpace from "../components/Talkspace/TalkSpace.js"
import Footer from "../components/Footer/Footer.js"
import "../App.scss"


const Accueil = () => {
    return (
        <div className="page">
            <Banner />
            <Cart />
            <TalkSpace />
            <Footer />
        </div>
    );
};

export default Accueil;