import logo from '../../assets/logo.png';
import ToogleBtn from '../toogleBtn';


function Banner(props) {
    const text = "Salut Tout le monde !!!"
    const date = props.date
    console.log(props);
    return <div className="block-banner">
        
        <img src={logo} alt="Logo groupomania" className='banner-logo' />
        <h1 className='banner-title'>{text.toUpperCase()}</h1>
        <p> Bonjour je suis {props.user1} et nous somme le {date}</p>
        <ToogleBtn />
        
    </div>


}

export default Banner;

