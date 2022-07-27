import { Link } from 'react-router-dom';
import logo2 from './image/fullsize_2016_11_30_19_Logo-199302_128726_193614258_453669003-removebg-preview.png';

const Navbar = () => {
    return (    
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo2} alt="logo" />
                </Link>
            </div>
            <div className="topnav" id="myTopnav">
                <Link to="/about">INFORMAÇÕES</Link>
                <Link to="/create">CRIAR</Link>
            </div>
        </div>
    );
}
export default Navbar;