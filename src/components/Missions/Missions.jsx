import { LazyLoadImage } from "react-lazy-load-image-component";
import imgSrc from '../../assets/bg4.jpg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Missions.css';

const Missions = () => {

    return (
        <section id='about'>
            <div className="about-wrapper">
                <LazyLoadImage src={imgSrc} alt='mission' effect='blur' />
                <div className="about-content">
                    <div className="aabout-upper">
                        <h1>Mission</h1>
                        <p>
                        Our mission is to break down language barriers and foster understanding by 
                        providing top-notch translation services in a multitude of Indian languages. 
                        </p>
                    </div>
                    <div className="about-lower">
                        <h1>Vision</h1>
                        <p>Our vision is to be the cornerstone of communication in India, connecting 
                        businesses, communities and individuals through accurate and culturally
                         sensitive translations. </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Missions;