import { useState } from "react"


export function CharacterForm({user}){
    console.log(`character form ${user}`);

    const [character, setCharacter] = useState({
        image: "",
        name: "",
        age: "",
        background: "",
        hobbies: ""
    })


    return (
        <div>
            <form>
            <label>Image:</label> <input type= "text" name="image"/>
            <label>Name:</label><input type = "text" name = "name"/>
            <label>Age:</label><input type ="number" name = "age"/>
            <label>Background:</label><input type = "text" name = "background"/>
            <label>Hobbies:</label><input type="text" name="hobbies"/>
            <button type = "submit">Submit</button>
            </form>
        </div>
    )
}


//- image (url string)
// - name (string)
// - age (number)
// - background (string)
// - hobbies [array of strings]