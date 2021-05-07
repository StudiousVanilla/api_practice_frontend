import poster1 from "../imgs/poster1.png"
import poster2 from "../imgs/poster2.png"
import poster3 from "../imgs/poster3.png"

const LOTRPoster = ({poster}) => {

    // poster is set in the parent LOTR component

    return ( 
        <div className="poster-container" id="poster">
            {poster === 1 && 
                <img src={poster1} className="img" alt="The fellowship of the Ring" />
            }
            {poster === 2 && 
                <img src={poster2} className="img" alt="The Two Towers" />
            }
            {poster === 3 && 
                <img src={poster3} className="img" alt="The Return of the King" />
            }
        </div>
     );
}
 
export default LOTRPoster;