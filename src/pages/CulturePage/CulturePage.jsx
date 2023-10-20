import { useEffect } from 'react';
import videosrc from '../../assets/culture.mp4';
import { values } from '../../utils/variable';
import CardCultural from './CArd/CardCultural';
import './CulturePage.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo1 from '../../assets/innovation.jpg';
import logo2 from '../../assets/diverse.jpg';

const CulturePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="culture-container">
            <div className="culture-page about-heading">
                <video src={videosrc} autoPlay loop ></video>
                <p>Culture</p>
                <p>We provide supportive culture in all aspects.</p>
            </div>

            <section className='diversity-container wrapper ' id='diversity-and-inclusion'>
                <div className='content right'>
                <LazyLoadImage src={logo2} alt='logo2' effect='blur' />
                    <div className='about-intro inner'>
                        <h2>Diversity and Inclusion</h2>
                        <p>
                        Diversity and inclusion are not just buzzwords at Aviral Digital Solutions; they are fundamental to our identity. 
                        We believe that embracing a variety of backgrounds, cultures, and perspectives enriches our work and enables us to 
                        better serve our clients. Our diverse team is our greatest asset, ensuring that we can offer a wide range of language
                         and cultural expertise.
                        </p>
                    </div>
                </div>
            </section>

            <section id='our-values'>
                <div className='values-wrapper'>
                <div className="projects-heading">
                    <span className="upper"></span>
                    <h1>Our Values</h1>
                    <span className="lower"></span>
                </div>
                    <p>
                        Our core values guide every aspect of our work, from project management to client relationships.
                        We hold ourselves to the highest standards of:
                    </p>
                    <div className='value-cards'>
                        {
                            values.map((item, index) => <CardCultural item={item} key={index} index={index} />)
                        }
                    </div>
                </div>
            </section>

            <section className='innovation-container wrapper' id='innovation'>
                <div className='content'>
                <LazyLoadImage src={logo1} alt='logo1' effect='blur' />
                    <div className='about-intro inner'>
                        <h2>Innovation</h2>
                        <p>
                        In a rapidly evolving global landscape, staying at the forefront of technology and trends is crucial. We constantly 
                        invest in innovative tools and approaches to enhance the efficiency and quality of our services. Our commitment to 
                        innovation means we can meet the ever-changing needs of our clients, providing them with a competitive edge in their 
                        markets
                        </p>
                    </div>
                </div>
            </section>


        </div>
    );
}
export default CulturePage;