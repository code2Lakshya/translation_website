import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from '../../assets/logo.jpeg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Navbar.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <nav>
                <LazyLoadImage src={logo} alt='logo' effect='blur' />
                <ul className={`${showMenu ? 'active' : ''}`} onClick={() => setShowMenu(false)}>
                    <li><HashLink to='#home' smooth>Home</HashLink></li>
                    <li><HashLink to='#languages' smooth>Languages</HashLink></li>
                    <li><HashLink to='#project' smooth>Projects</HashLink></li>
                    <li><HashLink to='#about' smooth>About Us</HashLink></li>
                    <li onClick={() => setShowMenu(false)}><RxCross1 /></li>
                </ul>
                <span onClick={() => setShowMenu(true)}><AiOutlineMenu /></span>
            </nav>
        </header>
    );
}
export default Navbar;