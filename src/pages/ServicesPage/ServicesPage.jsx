import { LazyLoadImage } from "react-lazy-load-image-component";
import services from '../../assets/services.mp4'
import translation from '../../assets/translation.jpg';
import interpretation from '../../assets/interpretation.jpeg';
import { useEffect } from "react";
import logo3 from '../../assets/bg.png';
import logo4 from '../../assets/cultural.webp';
import eLearning from '../../assets/eLearning.jpg';
import lms from '../../assets/lms.webp';


const ServicesPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="sericesPage-container">
            <div className="services-heading about-heading">
                <video src={services} autoPlay loop ></video>
                <p className="text-left">Services</p>
                <p className="text-left">We provide a wide range of services</p>
            </div>

            <section className='services-translation wrapper' id='translation-services'>
                <div className='content'>
                    <LazyLoadImage src={translation} alt='logo1' effect='blur' />
                    <div className='about-intro inner'>
                        <h2 className="text-left">Translation Services</h2>
                        <p>
                            <p>Translation is more than just converting words from one language to another; it's about capturing the
                                essence and nuances of the source text while ensuring it resonates with the target audience.
                            </p>
                            <p>
                                At Aviral Digital Solutions, our professional translators possess the linguistic skills,
                                cultural knowledge, and subject matter expertise necessary to provide precise, culturally
                                relevant translations. We offer translation services for over 15 languages, covering various
                                industries such as legal, medical, technical, marketing, and more. Whether it's a legal document,
                                a technical manual, or marketing materials, our translators ensure that the content is accurately
                                conveyed in target language while maintaining the essence and impact of the original text.
                                And wide range of extra translation services.
                            </p>
                        </p>
                    </div>
                </div>
            </section>

            <section className='services-localization about-history-wrapper bg' id='localization-services'>
                <LazyLoadImage src={logo3} alt='logo3' effect="blur" />
                <div className='about-history '>
                    <h2 className="text-left">Localization Services</h2>
                    <p>
                        Successful globalization demands more than mere translation. It requires adapting content, products, and
                        services to local preferences, customs, and market dynamics. Our localization services encompass website
                        localization, software localization, and marketing collateral adaptation. We ensure that your message
                        remains culturally appropriate and resonates with the target audience while maintaining brand consistency.
                        Localization is the key to entering and succeeding in foreign markets. This level of attention to detail
                        is essential for businesses aiming to make a significant impact in global markets.
                    </p>
                </div>
            </section>

            <section className='services-interpretation wrapper ' id='interpretation-services' >
                <div className='content right'>
                    <LazyLoadImage src={interpretation} alt='logo1' effect='blur' />
                    <div className='about-intro inner'>
                        <h2 className="text-left">Interpretation Services</h2>
                        <p>
                            In today's fast-paced global business environment, effective interpretation services are critical.
                            Whether it's a business meeting, conference, legal proceedings, or a healthcare appointment, our
                            skilled interpreters facilitate seamless cross-cultural communication. We offer both simultaneous
                            and consecutive interpretation services to cater to your specific needs. Our interpreters are not
                            only fluent in multiple languages but also well-versed in various industries, ensuring that the
                            message is accurately conveyed to all parties involved.
                        </p>
                    </div>
                </div>
            </section>

            <section className='services-cultural about-history-wrapper bg' id='cultural-consulting'>
                <LazyLoadImage src={logo4} alt='logo3' effect="blur" />
                <div className='about-history'>
                    <h2 className="text-left">Cultural Consulting</h2>
                    <p>
                        At Aviral Digital Solutions, we offer cultural consulting services that help you navigate the complexities
                        of foreign markets. Our cultural consultants provide insights and guidance on cultural etiquette, market
                        research, and intercultural communication strategies. This valuable expertise ensures that you make the
                        right impression and gain a competitive edge when expanding into new markets.
                    </p>
                </div>
            </section>

            <section className='services-interpretation wrapper ' id='e-learning' >
                <div className='content'>
                    <LazyLoadImage src={eLearning} alt='eLearning' effect='blur' />
                    <div className='about-intro inner'>
                        <h2 className="text-left">E-Learning</h2>
                        <p>
                            At Aviral Digital Solutions, we are your partner in the world of online learning and training. We aim at empowering
                            individuals and organizations with cutting-edge eLearning solutions. We specialize in creating immersive
                            and engaging eLearning content, tailored to your specific needs. Our courses are designed to captivate and
                            educate. We create interactive and effective eLearning courses that enhance skills, improve efficiency and
                            drive growth.
                        </p>
                    </div>
                </div>
            </section>

            <section className='services-cultural about-history-wrapper bg mb' id='learning-management-system'>
                <LazyLoadImage src={lms} alt='lms' effect="blur" />
                <div className='about-history'>
                    <h2 className="text-left">Learning Management System (L.M.S.)</h2>
                    <p>
                        Our Learning Management System simplifies the administration of eLearning. From tracking progress to assessing
                        performance, we make it all effortless. Our Learning Management System makes training and development
                        streamlined and efficient. Manage your learners, content and assessments all in one place.
                    </p>
                </div>
            </section>
        </div>
    );
}
export default ServicesPage;