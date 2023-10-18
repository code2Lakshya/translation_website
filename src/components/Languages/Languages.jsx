import image from '../../assets/languages.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Languages.css';

const Languages = () => {

    return (
        <section id='languages'>
            <div className='language-wrapper'>
                <LazyLoadImage src={image} alt='languages' effect='blur' />
                <div className='languages-content'>
                    <h1>Explore our Language Swags: </h1>
                    <ul>
                        <li><span>Expert Linguistics: </span>Our team comprises language enthusiasts who breathe life into every word. </li>
                        <li><span>Cultural Nuances:</span> We don’t just translate, we capture the essence, ensuring your message shines through intact. </li>
                        <li><span>Beyond Words: </span>We pave the way for global connections, fostering understanding in a diverse world. </li>
                        <li><span>Tailored Solutions: </span>Whether it’s business, creative content or technical jargon, we’ve got you covered. </li>
                    </ul>
                    <p>Join us in celebrating India’s linguistic diversity. Your words, our expertise- a fusion that echoes across borders. Welcome to Aviral Digital Solutions, where languages unite and communication knows no bounds. </p>
                </div>
            </div>
        </section>
    );
}
export default Languages;