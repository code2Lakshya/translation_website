import { HashLink } from 'react-router-hash-link';
import './Home.css';

const Home = () => {

    return (
        <section id='home'>
            <div className='inner-home'>
                <h1>World Of Words</h1>
                <p>A Gateway to seamless multilingual communication</p>
                <p>
                    Welcome to our digital heaven where languages unite and barriers dissolve. At Aviral Digital Solutions, we are not just translators, we are architects of understanding in a diverse world. With our linguistic competence, we bridge cultures, empower businesses and amplify global connections.
                    Our passion lies in transcending linguistic barriers, weaving words that resonate across languages including Hindi, Marathi, Telgu, Malayalam, Bengali, Odia and many more.
                </p>
            </div>
            <div className='home-btn'>
                <button>Get a Free Quote</button>
                <button><HashLink to='#contact'>Contact us</HashLink></button>
            </div>
        </section>
    );
}
export default Home;