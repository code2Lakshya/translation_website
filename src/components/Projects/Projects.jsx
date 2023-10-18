import { v } from "../../utils/variable";
import Card from "./Card/Card";
import './Project.css';

const Projects = () => {

    return (
        <section id='project'>
            <div className="projects-wrapper">
                <div className="projects-heading">
                    <span className="upper"></span>
                    <h1>Projects</h1>
                    <span className="lower"></span>
                </div>
                <p>Some of our Projects.</p>
                <div className="projects-cards">
                    {
                        v.map((item, index) => <Card data={item} key={index} />)
                    }
                </div>
            </div>
        </section>
    );
}
export default Projects;