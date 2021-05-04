

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
        <div className="container">
            <ul>
                <li>
                    name: {characterName(props.character.name)}
                </li>
                <li>
                    race: {characterDataCheck(props.character.race)}
                </li>
                <li>
                    gender: {characterDataCheck(props.character.gender)}
                </li>
                <li>
                    height: {characterDataCheck(props.character.height)}
                </li>
                <li>
                    birthday: {characterDataCheck(commaFix(props.character.birth))}
                </li>
                <li>
                    death: {characterDataCheck(commaFix(props.character.death))}
                </li>
                <li>wiki: <a href={props.character.wikiUrl} target="_blank" rel="noreferrer">Wiki</a></li>
            </ul>
        </div>
     );
}
 
export default LOTRCharacterData;