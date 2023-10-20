import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from '../../assets/logo.jpeg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Navbar.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { useState } from "react";
import { Link } from "react-router-dom";
import HoverList from "../HoverList/HoverList";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <nav>
                <Link to='/'><LazyLoadImage src={logo} alt='logo' effect='blur' /></Link>
                <ul className={`${showMenu ? 'active' : ''}`} onClick={() => setShowMenu(false)}>

                    <li><Link to='/' ><span className="bottom">Home</span></Link></li>

                    <li>
                            <HoverList heading='About Us' list={['Introduction', 'Our History', 'Our Team']} route='/about' />
                    </li>

                    <li>
                            <HoverList heading='Services' list={['Translation Services', 'Localization Services', 'Interpretation Services', 'Cultural Consulting']} route='/services' />
                    </li>

                    <li>
                            <HoverList heading='Mission' list={['Our Mission', 'Our Vision']} route='/mission' />
                    </li>

                    <li>
                            <HoverList heading='Culture' list={['Diversity and Inclusion', 'Our Values', 'Innovation']} route='/culture'/>
                    </li>

                    <li>
                    <Link to='/contact'><span className="bottom">Contact Us</span></Link></li>

                    <li onClick={() => setShowMenu(false)}><RxCross1 /></li>

                </ul>
                <span onClick={() => setShowMenu(true)}><AiOutlineMenu /></span>
            </nav>
        </header>
    );
}
export default Navbar;