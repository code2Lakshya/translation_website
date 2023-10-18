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
                    <a href='https://www.facebook.com/profile.php?id=100091618494050.' target='_blank'><FiFacebook /></a>
                    <a href='https://www.instagram.com/learnknowd/' target='_blank'><BsInstagram /></a>
                    <a href='https://www.linkedin.com/company/96120189' target='_blank'><AiOutlineLinkedin /></a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
