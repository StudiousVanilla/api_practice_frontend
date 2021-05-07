import corner from "../imgs/corner.png"

const LOTRCorners = () => {
    return ( 
        <div>
            <div className="corner corner-left">
                <img className="img" src={corner} alt="corner-art"/>
            </div>
            <div className="corner corner-right">
                <img className="img" src={corner} alt="corner-art"/>
            </div>
        </div>
     );
}
 
export default LOTRCorners;