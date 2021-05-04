import { Link } from "react-router-dom";

const LOTRCover = () => {

    const ringString = 'one ring to rule them all, one ring to find them, one ring to bring them all, and in the darkness bind them'


    return ( 
        <div className="cover-container">
                <div className="cover-btn-container">
            <       Link to="/quotes">
                        <button className="cover-btn">Begin</button>
                    </Link>
                </div>
                <ul className='cover'>
                    {[...ringString].map((char, i)=><li className="cover-text" key={"key-"+char+"-"+i}>{char}</li>)}
                </ul>
        </div>
     );
}
 
export default LOTRCover;