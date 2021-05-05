import { useEffect, useState } from "react";
import LOTRCharacterData from "./LOTRCharacterData"
import LOTRBtn from "./LOTRBtn"
import leaf96 from "../imgs/leaf96.png"


const LOTRData = () => {

    const [quote, setQuote] = useState('')
    const [character, setCharacter] = useState({
        name:'unkown',
        race: 'unknown',
        gender: 'unknown',
        height: 'unknown',
        birth: 'unknown',
        death: 'unknown',
        wiki: 'unknown'
    })
    const [movie, setMovie] = useState('')
    const [cardVisible, setCardVisible] = useState(true)

    const movieIdConvert = (id) =>{
        const trimID = id.trim()
        if(trimID === "5cd95395de30eff6ebccde5c"){
            setMovie("The Fellowship of the Ring")
        }
        else if(trimID === "5cd95395de30eff6ebccde5b"){
            setMovie("The Two Towers")
        }
        else if(trimID === "5cd95395de30eff6ebccde5d"){
            setMovie("The Return of the King")
        }
        else{
            setMovie("Unknown")
        }
    }

    const fetchCharacterData = async (charID) =>{
        try {
            const json = await fetch(`http://localhost:3000/character/${charID}`)
            const data = await json.json()
            return data      
        } catch (error) {
            console.log(`error is : ${error}`);
        }
    }

    const fetchQuoteData = async () =>{
        try {
            const json = await fetch(`http://localhost:3000/quotes`)
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

    const newCard = async () =>{
        // sets card toggle staues back to 'false' and slides card away
        setCardVisible(true)
        cardReset()


        // fetches movie quote and then sets state for quote
        const quoteData = await fetchQuoteData()
        setQuote(regexFix(quoteData.dialog))
        
        // converts movie id based on hard-coded function above
        movieIdConvert(quoteData.movie)

        // fetches character data, based off quote, and then sets state
        const characterData = await fetchCharacterData(quoteData.character)
        setCharacter(characterData)

    }

    // toggles wether character info card is visible
    const toggleCardVisible = () =>{
        setCardVisible(!cardVisible)
        cardSlide()
    }

    const cardSlide = () =>{
        const card = document.getElementById('card')
        const button = document.getElementById('button')
        if(cardVisible){
            card.style.left = '0%'
            button.style.transform = 'rotate(270deg)'
        }
        else{
            card.style.left = null
            button.style.transform = null
        }
    }

    const cardReset = () =>{
        const card = document.getElementById('card')
        const button = document.getElementById('button')
        card.style.left = null
        button.style.left = null
        button.style.transform = null
    }



  useEffect(() => {
  }, []);


    return (
        <div className="flex-column mobile-align">
            <div className="quote-top-container"> 
                <div className='quote-container'>
                    <h1 className="quote">{quote}</h1>
                </div>
                <div className='movie-info'>
                    <p>{movie}</p>
                </div>
            </div>
            <div className="character-info-container">
                <button className="character-btn" id="button" onClick={toggleCardVisible}>
                        <img className="leaf" src={leaf96} alt="Lorien Leaf"/>
                </button>
                <LOTRCharacterData character={character}/>
            </div>
            <LOTRBtn newCard = {newCard}/>
        </div>
     );
}
 
export default LOTRData;