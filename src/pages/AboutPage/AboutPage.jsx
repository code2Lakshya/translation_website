import { useEffect } from 'react';
import aboutVideo from '../../assets/aboutus.mp4';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo1 from '../../assets/introduction.jpeg';
import logo2 from '../../assets/team.jpeg'

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="about-page">
            <div className="about-heading">
                <video src={aboutVideo} autoPlay loop ></video>
                <p>About Us</p>
                <p>We have a vast history for digital solutions</p>
            </div>

            <section className='about-intro-wrapper wrapper' id='introduction'>
                <div className='content'>
                    <LazyLoadImage src={logo1} alt='logo1' effect='blur' />
                    <div className='about-intro inner'>
                        <h2>Introduction</h2>
                        <p>Welcome to Aviral Digital Solutions, your trusted partner in the world of translation and localization. We are a global company dedicated to facilitating cross-cultural communication and helping businesses thrive in a multicultural world.  Since the commencement of
                            this journey,  we have been  a humble translation service provider. Since our inception, we've experienced substantial growth and transformation. We've evolved from a small startup into a globally recog
                            nized company, with a client base spanning a multitude of industries. Our journey has
                            been marked by a commitment to excellence and a relentless pursuit of
                            quality. We've continually invested in the development of our team,
                            the adoption of cutting-edge technologies, and the expansion of our language offerings. This relentless commitment to growth and excellence has allowed us to serve clients ranging from small businesses to Fortune 500 companies, and we remain dedicated to fostering
                            meaningful cross-cultural connections.
                        </p>
                    </div>
                </div>
            </section>

            <section className='about-history-wrapper ' id='our-history'>
                <div className='about-history '>
                    <h2>Our History :</h2>
                    <p>Established in 2023 ,  Aviral Digital Solutions  has grown from a small startup into a leading translation and localization service provider. Over the years, we've helped countless businesses overcome language and cultural barriers to expand their reach and succeed on a global scale. Our journey has been defined by a commitment to excellence and a passion for promoting understanding and cooperation across borders.</p>
                </div>
            </section>

            <section className='about-team-wrapper wrapper' id='our-team'>
                <div className='content'>
                    <LazyLoadImage src={logo2} alt='logo2' effect='blur' />
                    <div className='about-team inner'>
                        <h2> Our Team</h2>
                        <p>At the heart of our success is our dedicated and diverse team of professionals. Our linguists, project managers, localization experts, and cultural consultants are among the best in the industry. They come from various backgrounds and bring an unparalleled expertise to every project. Our team's collective knowledge, commitment, and passion ensure that we consistently deliver high-quality services that exceed our clients' expectations.
                            At Aviral Digital Solutions, we take pride in the professionals who drive our success. Our team comprises a diverse group of language experts, project managers, localization specialists, and cultural consultants.
                            Each member of our team brings a unique set of skills and experiences to the table, enabling us to offer comprehensive solutions to our clients.
                            Our linguists are not just fluent in multiple languages; they are language enthusiasts, who possess an innate understanding of the cultural nuances that shape languages. Their passion for language ensures that translations are not mere conversions but are accurate representations of the source text, capturing the subtleties that makes the message truly resonate with the target audience.
                            Our project managers are the backbone of our operations, ensuring that every project, regardless of size or complexity, is delivered on time and within budget. They serve as the primary point of contact for our clients, providing guidance and transparency throughout the translation process.
                            Our localization specialists are experts at adapting content for specific markets. They understand that translation is only the first step; for global success, content must resonate with local preferences, cultural customs, and market dynamics. Our localization experts ensure that your message remains culturally appropriate and impactful.
                            Our cultural consultants play a crucial role in providing clients with insights and guidance on cultural etiquette, market research, and intercultural communication strategies. Understanding and respecting local customs and cultural nuances is vital for global success, and our consultants help our clients navigate these complexities.
                            The collective knowledge, commitment, and passion of our team ensure that we consistently deliver high-quality services that exceed our clients' expectations. Our team's dedication and expertise form the bedrock of our success and the reason why clients from around the world trust us with their translation and localization needs.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default AboutPage;