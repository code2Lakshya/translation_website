import { LazyLoadImage } from "react-lazy-load-image-component";
import services from '../../assets/services.mp4'
import translation from '../../assets/translation.jpg';
import interpretation from '../../assets/interpretation.jpeg';
import { useEffect } from "react";
import logo3 from '../../assets/bg.png';
import logo4 from '../../assets/cultural.webp';


const ServicesPage = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <div className="sericesPage-container">
            <div className="services-heading about-heading">
                <video src={services} autoPlay loop ></video>
                <p>Services</p>
                <p>We provide a wide range of services</p>
            </div>

            <section className='services-translation wrapper' id='translation-services'>
                <div className='content'>
                    <LazyLoadImage src={translation} alt='logo1' effect='blur' />
                    <div className='about-intro inner'>
                        <h2>Translation Services</h2>
                        <p>Translation is more than just converting words from one language to another; it's about
                            capturing the essence and nuances of the source text while ensuring it resonates with the
                            target audience. At Aviral Digital Solutions, our professional translators possess the l
                            inguistic skills, cultural knowledge, and subject matter expertise necessary to provide
                            precise, culturally relevant translations. We offer translation services for over 15 languages,
                            covering various industries such as legal, medical, technical, marketing, and more.
                            Translation is at the core of what we do. Our professional translators are not just linguists;
                            they are language artists who possess the linguistic skills, cultural knowledge,
                            and subject matter expertise necessary to provide precise and culturally relevant
                            translations. We offer translation services for over [number] languages, covering various
                            industries such as legal, medical, technical, marketing, and more. Whether it's a legal
                            document, a technical manual, or marketing materials, our translators ensure that the
                            content is accurately conveyed in target language while maintaining the essence and
                            impact of the original text. And wide range of extra translation services.
                        </p>
                    </div>
                </div>
            </section>

            <section className='services-localization about-history-wrapper bg' id='localization-services'>
            <LazyLoadImage src={logo3} alt='logo3' effect="blur" />
                <div className='about-history '>
                    <h2>Localization Services</h2>
                    <p>Successful globalization demands more than mere translation. It requires adapting content,
                        products, and services to local preferences, customs, and market dynamics. Our localization
                        services encompass website localization, software localization, and marketing collateral adaptation.
                        We ensure that your message remains culturally appropriate and resonates with the target audience
                        while maintaining brand consistency.Localization is the key to entering and succeeding in foreign
                        markets. Our localization services encompass website localization, software localization, and
                        marketing collateral adaptation. We understand that successful globalization requires more than
                        just translation; it demands adapting content, products, and services to local preferences,
                        customs, and market dynamics. Our localization experts ensure that your message remains culturally
                        appropriate, resonates with the target audience, and maintains brand consistency. This level of
                        attention to detail is essential for businesses aiming to make a significant impact in global markets.
                    </p>
                </div>
            </section>

            <section className='services-interpretation wrapper ' id='interpretation-services' >
                <div className='content'>
                    <LazyLoadImage src={interpretation} alt='logo1' effect='blur' />
                    <div className='about-intro inner'>
                        <h2>Interpretation Services</h2>
                        <p>In a world that demands instant communication, our interpretation services play a pivotal role.
                            Whether it's a business meeting, conference, or legal proceedings, our skilled interpreters facilitate
                            seamless cross-cultural communication. We offer both simultaneous and consecutive interpretation services
                            to cater to your specific needs.In today's fast-paced global business environment, effective interpretation
                            services are critical. Whether it's a business meeting, conference, legal proceedings, or a healthcare
                            appointment, our skilled interpreters facilitate seamless cross-cultural communication. We offer both
                            simultaneous and consecutive interpretation services to cater to your specific needs. Our interpreters
                            are not only fluent in multiple languages but also well-versed in various industries, ensuring that
                            the message is accurately conveyed to all parties involved. 
                        </p>
                    </div>
                </div>
            </section>

            <section className='services-cultural about-history-wrapper bg' id='cultural-consulting'>
            <LazyLoadImage src={logo4} alt='logo3' effect="blur" />
                <div className='about-history'>
                    <h2>Cultural Consulting</h2>
                    <p>
                        Understanding and respecting local customs and cultural nuances is vital for global success.
                        Our cultural consulting services help you navigate the complexities of foreign markets. We provide
                        insights and guidance on cultural etiquette, market research, and intercultural communication strategies
                        to help you make the right impression and gain a competitive edge.At Aviral Digital Soiutions, we
                        offer cultural consulting services that help you navigate the complexities of foreign markets. Our
                        cultural consultants provide insights and guidance on cultural etiquette, market research, and intercultural
                        communication strategies. This valuable expertise ensures that you make the right impression and gain a
                        competitive edge when expanding into new markets.
                    </p>
                </div>
            </section>
        </div>
    );
}
export default ServicesPage;