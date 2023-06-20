import { CharacterForm } from "../components/CharacterForm"


function CharacterPage({user}){
    return (
        <div>
            <CharacterForm user = {user}/>
        </div>
    )
}

export default CharacterPage