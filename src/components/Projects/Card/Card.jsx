import './Card.css';
import {AiOutlineFilePpt} from 'react-icons/ai';

const Card = ({ data  }) => {
    return (
        <div className="card">
            <div className='card-icon'>
                <AiOutlineFilePpt />
            </div>
            <div className='card-item'>
                <h1>{data.heading}</h1>
                <p>{data.desc}</p>
            </div>
        </div>
    );
}
export default Card;