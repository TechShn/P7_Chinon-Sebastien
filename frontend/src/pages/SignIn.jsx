import InputConnectHooks from "../components/Auth/InputConnectHooks"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"

const Identification = () => {

    return(
        <div className="page">
            <Banner />
            <InputConnectHooks title="Connectez vous !" fetch="login"/>
            <Footer />
        </div>
    )
}

export default Identification