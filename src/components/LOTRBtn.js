import durin from "../imgs/durin.png"

const LOTRBtn = ({newCard}) => {
    return ( 
        <div className="quote-btn-container">
            <button className="quote-btn" onClick={newCard}>
                <img className="durin" src={durin} alt="Durin's Door"/>
            </button>
        </div>
     );
}
 
export default LOTRBtn;