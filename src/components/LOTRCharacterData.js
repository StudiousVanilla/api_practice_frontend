import ringMin from '../imgs/ringMin.png'

const LOTRCharacterData = (props) => {


    const commaFix = (string) =>{
        const regex = / ,/g
        return string.replace(regex, ', ')
    }

    const characterName = (characterData) =>{
        if (characterData === "MINOR_CHARACTER"){
            return 'Minor Character'
        }
        else{
            return characterData
        }
    }

    const characterDataCheck = (characterData) =>{
        if (characterData === ""){
            return 'Unknown'
        }
        else{
            return characterData
        }
    }


    return ( 
        <div>
            <div className="character-card-container" id="card">
                <ul className="character-list">
                    <div className="flex-row">
                        <li className="character-name">
                            {characterName(props.character.name)}
                        </li>
                        <div className="flex-row">
                            <li className="character-race">
                                {characterDataCheck(props.character.race)}
                            </li>
                            <span>&nbsp;-&nbsp;</span>
                            <li className="character-gender">
                                {characterDataCheck(props.character.gender)}
                            </li>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="flex-column">
                            <li className="character-height">
                            height: {characterDataCheck(props.character.height)}
                            </li>
                            <li className="character-birth">
                                birth: {characterDataCheck(commaFix(props.character.birth))}
                            </li>
                            <li className="character-death">
                                death: {characterDataCheck(commaFix(props.character.death))}
                            </li>
                            <li className="character-link"><a href={props.character.wikiUrl} target="_blank" rel="noreferrer">Wiki</a></li>
                        </div>
                        <div className="flex-column card-img-container">
                            <img className="crad-img" src={ringMin} alt="The One Ring"/>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
     );
}
 
export default LOTRCharacterData;