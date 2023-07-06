import  CharacterForm  from "../components/CharacterForm"


function CharacterPage({user, createCharacter, character, updateCharacter}){
    return (
        <div>
            <CharacterForm user = {user} character={character} updateCharacter={updateCharacter} createCharacter={createCharacter}/>
        </div>
    )
}

export default CharacterPage