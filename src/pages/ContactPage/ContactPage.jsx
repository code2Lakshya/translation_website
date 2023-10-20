import { useEffect, useState } from 'react';
import videosrc from '../../assets/contact.mov';


const ContactPage = () => {

    const [userInput, setUserInput] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const changeHandler = (e) => {
        setUserInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div className="contact-conatiner">
            <div className="contact-heading about-heading">
                <video src={videosrc} autoPlay loop ></video>
                <p>Contact Us</p>
                <p>Book a appointment with our agents to know more.</p>
            </div>

            <div className='contact-content'>

                <p>
                    Thank you for taking the time to learn more about  <span>Aviral Digital Solutions. </span>
                    If you have any questions, need further information, or would like to discuss your
                    specific language and cultural service needs, we are here to assist you.
                </p>

                <div className='contact-bottom'>

                    <form>
                        <div className='name formfield'>
                            <div className='first-name'>
                                <label htmlFor='firstName'>First Name</label>
                                <input type='text'
                                    placeholder='John'
                                    value={userInput.firstName}
                                    onChange={changeHandler}
                                    name='firstName'
                                    id='firstName'
                                />
                            </div>
                            <div className='last-name'>
                                <label htmlFor='lastName'>Last Name</label>
                                <input type='text'
                                    placeholder='Doe'
                                    value={userInput.lastName}
                                    onChange={changeHandler}
                                    name='lastName'
                                    id='lastName'
                                />
                            </div>
                        </div>
                        <div className='mobile formfield'>
                            <label htmlFor='number'>Phone Number</label>
                            <input type='number'
                                placeholder='123456789'
                                value={userInput.phone}
                                onChange={changeHandler}
                                name='number'
                                id='number'
                            />
                        </div>
                        <div className='email formfield'>
                            <label htmlFor='email'>Email</label>
                            <input type='number'
                                placeholder='johndoe@gmail.com'
                                value={userInput.email}
                                onChange={changeHandler}
                                name='email'
                                id='email'
                            />
                        </div>
                        <div className='message'>
                            <p>Message</p>
                            <textarea rows='10' cols='20' value={userInput.message} onChange={changeHandler} name='message' ></textarea>
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
    );
}
export default ContactPage;