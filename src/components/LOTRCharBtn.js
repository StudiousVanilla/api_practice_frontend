const LOTRCharBtn = ({toggleCharVisibility}) => {

    return ( 
        <div className="badge" id="question">
            <button className="character-btn"
            onClick={toggleCharVisibility} >
                <span className="question">?</span>
            </button>
            <h3>
                <span className="char2"> </span>
                <span className="char3"> </span>
                <span className="char4"> </span>
                <span className="char5">C</span>
                <span className="char6">h</span>
                <span className="char7">a</span>
                <span className="char8">r</span>
                <span className="char9">a</span>
                <span className="char10">c</span>
                <span className="char11">t</span>
                <span className="char12">e</span>
                <span className="char13">r</span>
                <span className="char14"> </span>
                <span className="char15"> </span>
                <span className="char16"> </span>
            </h3>
        </div>
     );
}
 
export default LOTRCharBtn;