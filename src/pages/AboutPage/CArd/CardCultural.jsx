import { useState } from 'react';
import './CardCultural.css';


const CardCultural = ({ item, index }) => {

const [readmore,setReadMore]=useState(false);

    return (
        <div className="value-card">
            <h1 className="text-left">{index + 1}. {item.heading}:</h1>
            <p>{item.subHeading}</p>
            <p>{readmore ? item.desc: `${item.desc.slice(0,200)}...  `} 
            {
                !readmore? <span onClick={()=> setReadMore(true)}>Read More</span>:<span onClick={()=> setReadMore(false)}>Show Less</span>
            }</p>
        </div>
    );
}
export default CardCultural;