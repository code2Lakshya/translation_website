import { useEffect, useState } from 'react';
import videosrc from '../../assets/contact.mov';
import { AiOutlineSend, AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FaFax } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import './ContactPage.css';
import toast from 'react-hot-toast';


const ContactPage = () => {

    const [userInput, setUserInput] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const changeHandler = (e) => {
        setUserInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: JSON.stringify(userInput)
          })
            .then(() => toast.success('Form Submitted'))
            .catch((error) => alert(error));
        setUserInput({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }
    return (
        <div className="contact-conatiner">

            <div className="contact-heading about-heading">
                <video src={videosrc} autoPlay loop ></video>
                <p>Contact Us</p>
                <p>Schedule a appointment with our agents to know more.</p>
            </div>

            <div className='contact-content-wrapper'>
                <div className='contact-content'>

                    <p>
                        Thank you for taking the time to learn more about  <span>Aviral Digital Solutions. </span>
                        If you have any questions, need further information, or would like to discuss your
                        specific language and cultural service needs, we are here to assist you.
                    </p>

                    <div className='contact-bottom'>

                        <div className='contact-form'>
                            <h2>Send us a message</h2>
                            <form onSubmit={submitHandler} data-netlify='true'>
                                <div className='top formfield'>
                                    <div className='first-name name'>
                                        <label htmlFor='firstName'>First Name:</label>
                                        <input type='text'
                                            placeholder='John'
                                            value={userInput?.firstName}
                                            onChange={changeHandler}
                                            name='firstName'
                                            id='firstName'
                                            required
                                        />
                                    </div>
                                    <div className='last-name name'>
                                        <label htmlFor='lastName'>Last Name:</label>
                                        <input type='text'
                                            placeholder='Doe'
                                            value={userInput?.lastName}
                                            onChange={changeHandler}
                                            name='lastName'
                                            id='lastName'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='mobile formfield'>
                                    <label htmlFor='number'>Phone Number:</label>
                                    <input type='number'
                                        placeholder='123456789'
                                        value={userInput?.phone}
                                        onChange={changeHandler}
                                        name='phone'
                                        id='number'
                                        required
                                    />
                                </div>
                                <div className='email formfield'>
                                    <label htmlFor='email'>Email:</label>
                                    <input type='email'
                                        placeholder='johndoe@gmail.com'
                                        value={userInput?.email}
                                        onChange={changeHandler}
                                        name='email'
                                        id='email'
                                        required
                                    />
                                </div>
                                <div className='message formfield'>
                                    <p>Message:</p>
                                    <textarea rows='10' cols='20' value={userInput?.message} onChange={changeHandler} name='message' ></textarea>
                                </div>
                                <button type='submit'>Send Message <span><AiOutlineSend /></span></button>
                            </form>
                        </div>

                        <div className='contact-details'>
                            <h2>Contact Us</h2>
                            <div className='contact-card'>
                                <span><CiLocationArrow1 /></span>
                                <p><span>Aviral Digital Solutions Headquarters </span>[Address] [City, State, Zip Code]</p>
                            </div>
                            <div className='contact-card'>
                                <span><AiOutlineMail /></span>
                                <p>[Email Address]</p>
                            </div>
                            <div className='contact-card'>
                                <span><AiOutlinePhone /></span>
                                <p>[Phone Number]</p>
                            </div>
                            <div className='contact-card'>
                                <span><FaFax /></span>
                                <p>[Fax Number]</p>
                            </div>
                            <div className='contact-card'>
                                <span><MdWorkOutline /></span>
                                <p><span>Working Hours:</span> Monday-friday</p>
                            </div>
                            <div className='contact-card bottom'>
                            <p>Social Links: </p>
                                <a href='#'><AiOutlineLinkedin /></a>
                                <a href='#'><FiTwitter /></a>
                                <a href='#'><AiOutlineFacebook /></a>
                                <a href='#'><CgWebsite /></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='contact-footer'>
                    <p>
                        At Aviral Digital Solutions , we are ready to help you bridge language and cultural gaps to reach new markets and connect with
                        diverse audiences. We look forward to partnering with you on your journey to global success.
                    </p>
                </div>

            </div>

        </div>
    );
}
export default ContactPage;