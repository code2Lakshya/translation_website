import { useState } from "react";
import './HoverList.css';
import { TiArrowSortedDown } from 'react-icons/ti';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const HoverList = ({ heading, list ,route}) => {

    const [showList, setShowList] = useState(false);

    return (
        <div
            className="hoverlist-container"
            onMouseOver={() => setShowList(true)}
            onMouseOut={() => setShowList(false)}
        >
            <p><Link to={route}>{heading} </Link><span><TiArrowSortedDown /></span></p>
            <div className={`hover-list ${showList ? 'active' : ''}`} onMouseLeave={()=> setShowList(false)}>
                {
                    list.map((item, index) =>
                        <p key={index} onClick={()=>setShowList(false)}>
                            <HashLink to={`${route}/#${item.toLowerCase().replaceAll(' ', '-')}`} smooth>
                                <span>{item}</span>
                            </HashLink>
                        </p>
                    )
                }
            </div>
        </div>
    );
}

export default HoverList;