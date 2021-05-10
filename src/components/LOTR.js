import { useEffect, useState } from "react";
import LOTRCorners from "./LOTRCorners"
import LOTRPoster from "./LOTRPoster"
import LOTRQuoteBtn from "./LOTRQuoteBtn"
import LOTRCharBtn from "./LOTRCharBtn"
import LOTRFooter from "./LOTRFooter"


const LOTR = () => {

    const [quote, setQuote] = useState(false)
    const [character, setCharacter] = useState('')
    const [charVisible, setCharVisible] = useState('')
    const [poster, setPoster] = useState(0)

    const movieIdConvert = (id) =>{
        const trimID = id.trim()
        if(trimID === "5cd95395de30eff6ebccde5c"){
            updatePoster(1)
        }
        else if(trimID === "5cd95395de30eff6ebccde5b"){
            updatePoster(2)
        }
        else if(trimID === "5cd95395de30eff6ebccde5d"){
            updatePoster(3)
        }
        else{
            updatePoster(0)
        }
    }

    const updatePoster = (id) =>{

        if(id === poster){
            return
        }
        else{
            const posterElement = document.getElementById("poster")
    
            // slides poster out before image updates
            posterElement.style.left = '-200px'
        
            setTimeout(function(){ 
                posterElement.style.left = null
                setPoster(id)
            }
            , 500);
        }        
    }

    const fetchCharacterData = async (charID) =>{
        try {
            const json = await fetch(`https://api-practice-backend.herokuapp.com/character/${charID}`)
            const data = await json.json()
            return data      
        } catch (error) {
            console.log(`error is : ${error}`);
        }
    }

    const fetchQuoteData = async () =>{
        try {
            const json = await fetch(`https://api-practice-backend.herokuapp.com/quotes`)
            const data = await json.json()
            return data
        } catch (error) {
            console.log(`error is : ${error}`);
        }
    }

    // helps fix some of the string errors from fetched quote
    const regexFix = (string) =>{
        const regexComma = / ,/g
        const commaFix = string.replace(regexComma, ', ')
        const regexSpaceComma = / , /g
        const spaceCommaFix = commaFix.replace(regexSpaceComma, '')
        const regexExclaim = /!/g
        const exclaimFix = spaceCommaFix.replace(regexExclaim, '! ')
        return exclaimFix
    }

    const toggleCharacter = () =>{
        const character = document.getElementById('character')
        const question = document.getElementById('question')
        if(charVisible){
            question.style.visibility = 'hidden'
            character.style.opacity = 1
            character.style.transition = null
        }
        else{
            question.style.visibility = 'visible'
            character.style.opacity = null
            character.style.transition = '0s'
        }
    }
    
    // toggles wether character info card is visible
    const toggleCharVisibility = () =>{
        setCharVisible(!charVisible)
    }

     // toggles wether character info card is visible
     const hideCharVisibility = () =>{
        setCharVisible(false)
    }

    // runs alkl the functions needed to get a new quote
    const newQuote = async () =>{

        hideCharVisibility()

        // fetches movie quote and then sets state for quote
        const quoteData = await fetchQuoteData()
        setQuote(regexFix(quoteData.dialog))
        
        // converts movie id based on hard-coded function above
        movieIdConvert(quoteData.movie)

        // fetches character data, based off quote, and then sets state
        const characterData = await fetchCharacterData(quoteData.character)
        setCharacter(characterData)
        console.table(characterData)

    }

    const gandalfQuote = (toggle) =>{
        const gandalfQuote = document.getElementById('gandalfQuote')
        const question = document.getElementById('question')
        if(toggle){
            gandalfQuote.style.visibility = 'visible'
            question.style.visibility = 'hidden'
        }
        else{
            gandalfQuote.style.visibility = 'hidden'
            question.style.visibility = 'visible'
        }
    }

    const pageSetUp = () =>{
        gandalfQuote(true)
        setTimeout(()=>{
            gandalfQuote(false)
            newQuote()
        }, 6000)
    }



    // toggles character visibility based on charVisibile state
    useEffect(()=>{
        toggleCharacter()
        // eslint-disable-next-line 
    }, [charVisible])

    useEffect(() => {
    pageSetUp()
    // eslint-disable-next-line 
    }, []);


    return (
        <div className="flex-column mobile-align">
            <LOTRCorners/>
            <div className="text-container"> 
                <div className='quote-container'>
                    <h1 className="quote">{quote}</h1>
                    <p className="character" id="character">{character.name}</p>
                    <LOTRCharBtn toggleCharVisibility={toggleCharVisibility}/>
                </div>
            </div>
            <LOTRPoster poster={poster}/>
            <LOTRQuoteBtn 
            newQuote = {newQuote} />
            <LOTRFooter/>
        </div>
     );
}
 
export default LOTR;