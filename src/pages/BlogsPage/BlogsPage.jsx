import { useEffect } from 'react';
import blogssrc from '../../assets/blogs.mp4';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import articlesSrc from '../../assets/articles.jpg';
import challengeSrc from '../../assets/challenges.jpg';
import { blogCards } from '../../utils/variable';
import './BlogsPage.css';

const BlogsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="blogs-page about-page">
            <div className="blogs-hero about-heading">
                <video src={blogssrc} autoPlay loop></video>
                <p>Blogs</p>
                <p>The E-Learning Revolution</p>
            </div>

            <section className='about-history-wrapper eLearning' >
                <div className='about-history'>
                    <h2>The E-Learning Revolution</h2>
                    <p>
                        E-Learning has witnessed remarkable growth in recent years, transcending geographical boundaries and challenging
                        traditional education paradigms. This approach to learning offers the flexibility to adapt to individual needs
                        and pace, making it accessible to learners of all ages and backgrounds. However, for eLearning to truly thrive
                        on a global scale, it must break down language barriers.
                    </p>
                </div>
            </section>

            <section className='articles wrapper'>
                <div className='content'>
                    <LazyLoadImage src={articlesSrc} alt='logo' effect='blur' />
                    <div className='about-intro inner'>
                        <h2>Blogs/Articles</h2>
                        <p>
                            In an increasingly interconnected world, eLearning has emerged as a transformative force in education,
                            training, and skill development. As the digital landscape evolves, the importance of bridging linguistic
                            divides becomes ever more critical. Multilingual translation is the key that unlocks the global potential
                            of eLearning, facilitating knowledge exchange, and fostering inclusive learning environments.
                        </p>
                    </div>
                </div>
            </section>


            <section className='challenges-container'>
                <div className='challenges-wrapper'>
                    <h1>The Power of Multilingual Translation</h1>
                    <p>
                        Multilingual translation in eLearning is not merely about converting content from one language to another, it is
                        about ensuring that the learning experience remains rich and meaningful for learners across diverse linguistic and
                        cultural backgrounds. Let's explore how multilingual translation plays a vital role in the eLearning space:
                    </p>
                    <div className='challenge-cards'>
                        {
                            blogCards.map((item, index) => <div className='challenge-card' key={index}>
                                <span>0{index+1}</span>
                                <div className='card-content'>
                                    <h3>{item.heading}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                            )}
                    </div>
                </div>
            </section>

            <section className='challenges wrapper '>
                <div className='content right'>
                    <LazyLoadImage src={challengeSrc} alt='logo1' effect='blur' />
                    <div className='about-intro inner'>
                        <h2>Challenges and Solutions</h2>
                        <p>
                            While the role of multilingual translation in eLearning is undeniable, it is not without challenges.
                            These include cost implications, maintaining content consistency, and ensuring quality in translation.
                            However, the benefits far outweigh these challenges.
                        </p>
                        <p>
                            Organizations and eLearning providers can address these issues by investing in professional
                            translation services, implementing robust quality control measures, and leveraging technology to
                            streamline the translation process.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default BlogsPage;