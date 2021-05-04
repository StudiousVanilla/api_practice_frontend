import { useEffect, useState } from "react";
import LOTRCharacterData from "./LOTRCharacterData"


const RugbyData = () => {

    const [quote, setQuote] = useState('')
    const [character, setCharacter] = useState({name:'unkown'})
    const [movie, setMovie] = useState('')

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
            setMovie("poop tiwn usa")
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
        // fetches movie quote and then sets state for quote
        const quoteData = await fetchQuoteData()
        setQuote(regexFix(quoteData.dialog))
        
        // converts movie id based on hard-coded function above
        movieIdConvert(quoteData.movie)

        // fetches character data, based off quote, and then sets state
        const characterData = await fetchCharacterData(quoteData.character)
        setCharacter(characterData)
    }



  useEffect(() => {
  }, []);


    return ( 
        <div> 
            <button 
            onClick={newCard}>
                quote
            </button>
            <div className='container'>
                <h1 className="quote">{quote}</h1>
            </div>
            <div className='info'>
                <p>{movie}</p>
            </div>
            <LOTRCharacterData character={character}/>
        </div>
     );
}
 
export default RugbyData;