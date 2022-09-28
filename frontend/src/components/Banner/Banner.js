import logo from '../../assets/logo_Groupomania2.png';
import { useNavigate } from "react-router-dom";


function Banner(props) {
    const navigate = useNavigate();

function handleClick1() {
    navigate("/auth/signin")
}
function handleClick2() {
    navigate("/auth/signup")
}

    return <div className="block-banner">
        
        <h1 className='banner-title'><img src={logo} alt="Logo groupomania" className='banner-logo' /></h1>
        <ul className={props.list}>
            <button className='btnBanner' onClick={handleClick1}>login</button>
            <button className='btnBanner' onClick={handleClick2}>sign up</button>
        </ul>
        <ul>
            {props.logout}
        </ul>
    </div>


}

export default Banner;

