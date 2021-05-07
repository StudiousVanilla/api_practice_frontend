import gandalf from "../imgs/gandalf.svg"


const LOTRQuoteBtn = ({newQuote}) => {

    const stopWobble = () =>{
        const gandalf = document.getElementById('gandalf')
        gandalf.style.animationName = false
        gandalf.style.animationDelay = '0s'
        
        setTimeout(()=>{
            gandalf.style.animationName = null
        }, 2000)
    }

    const handleClick = () =>{
        newQuote()
        stopWobble()
    }

    return ( 
        <button className="quote-btn" onClick={handleClick}>
            <p className="btn-text" id="gandalfQuote">
                The quote will arrive precisely when it means to
            </p> 
            <img className="gandalf" id="gandalf" src={gandalf} alt="Gandalf"/>
        </button>
     );
}
 
export default LOTRQuoteBtn;