import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer">
            <div className='footer-wrapper'>
                <p>CopyRight ©️
                    <span>Aviral Digital Solutions</span>
                    | All rights reserved
                </p>
                <div className="footer-icons">
                    <a href='#' ><FiFacebook /></a>
                    <a href='#' ><BsInstagram /></a>
                    <a href='#'><AiOutlineLinkedin /></a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
