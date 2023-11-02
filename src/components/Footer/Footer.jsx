import { FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer">
            <div className='footer-wrapper'>
                <div className='footer-top'>
                    <p>CopyRight ©️
                        <span>Aviral Digital Solutions</span>
                        | All rights reserved
                    </p>
                    <div className="footer-icons">
                        <a href='https://www.facebook.com/profile.php?id=61552943792273&mibextid=ZbWKwL'><FiFacebook /></a>
                        <a href='https://instagram.com/aviraldigitalsolutions?igshid=MzMyNGUyNmU2YQ=='><BsInstagram /></a>
                        <a href='https://www.linkedin.com/company/101000873'><AiOutlineLinkedin /></a>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <Link to='/contact'>Contact Us</Link>
                    <p>FAQ</p>
                    <p>Request a Quote</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
