import { useNavigate } from 'react-router-dom';
import './Home.css';
import video from '../../assets/bgvideo.mp4';
import toast from 'react-hot-toast';

const Home = () => {

    const navigate=useNavigate();

    const shareHandler=(e)=>{
        navigator.clipboard.writeText('https://aviraldigital.netlify.app ');
        toast.success('Copied Url');
    }
    return (
        <section id='home'>
        <video src={video} autoPlay loop></video>
            <div className='inner-home'>
                <h1>World Of Words</h1>
                <p>A Gateway to seamless multilingual communication</p>
                <p>
                    Welcome to our digital heaven where languages unite and barriers dissolve. At Aviral Digital Solutions, we are not just translators, we are architects of understanding in a diverse world. With our linguistic competence, we bridge cultures, empower businesses and amplify global connections.
                    Our passion lies in transcending linguistic barriers, weaving words that resonate across languages including Hindi, Marathi, Telgu, Malayalam, Bengali, Odia and many more.
                </p>
            </div>
            <div className='home-btn'>
                <button onClick={()=> navigate('/contact')}>Contact Us</button>
                <button onClick={shareHandler}>Share Now</button>
            </div>
        </section>
    );
}
export default Home;