import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";


function Banner(props) {
    const text = "Salut Tout le monde !!!"
    const navigate = useNavigate();

function handleClick1() {
    navigate("/auth/signin")
}
function handleClick2(eent) {
    navigate("/auth/signup")
}

    return <div className="block-banner">
        <img src={logo} alt="Logo groupomania" className='banner-logo' />
        <h1 className='banner-title'>{text.toUpperCase()}</h1>
        <ul className={props.list}>
            <button onClick={handleClick1}>login</button>
            <button onClick={handleClick2}>sign up</button>
        </ul>
        <ul>
            {props.logout}
        </ul>
    </div>


}

export default Banner;

