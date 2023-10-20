import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import videosrc from '../../assets/mission.mp4';
import mission from '../../assets/mission.jpeg';
import { useEffect } from "react";

const MissionPage = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <div className="mission-page">
            <div className="mission-page about-heading">
                <video src={videosrc} autoPlay loop ></video>
                <p>Mission</p>
                <p>Our mission / vision is our driving power that makes us different.</p>
            </div>

            <section className='mission wrapper' id='our-mission'>
                <div className='content'>
                    <LazyLoadImage src={mission} alt='logo1' effect='blur' />
                    <div className='about-intro inner'>
                        <h2>Our Mission</h2>
                        <p>At Aviral Digital Soiutions, our mission is to break down language and cultural barriers, enabling individuals and
                            businesses to connect, collaborate, and thrive in a diverse world. We strive to deliver language solutions that not
                            only transcend words but also foster understanding, respect, and trust.
                        </p>
                    </div>
                </div>
            </section>

            <section className='vision about-history-wrapper ' id='our-vision'>
                <div className='about-history '>
                    <h2>Our Vision</h2>
                   <p>
                   Our vision is to be the global leader in translation and localization services, setting the standard for 
                   excellence, innovation, and cultural sensitivity. We aim to be the driving force behind the success of 
                   businesses operating in a globalized world and contribute to a more connected, harmonious global society.
                   </p>
                </div>
            </section>
        </div>
    );
}
export default MissionPage;