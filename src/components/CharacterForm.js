import { useState } from "react";
import { useNavigate }from "react-router-dom";
import * as formAPI from "../utilities/formAPI"

export default function CharacterForm({
  user,
  createCharacter,
  character,
  updateCharacter,
}) {
  //createCharacter and updateCharacter are setter functions
    const navigate = useNavigate()
  const [characterFormData, setCharacterFormData] = useState({
    image: "",
    name: "",
    age: "",
    background: "",
    hobbies: "",
  });

  async function handleSubmit(e){
    //I want the user to submit character data that then takes the data and saves it to mongoDB and posts it to /all-characters 
    e.preventDefault();
    try {
        const charData = {
            user: user._id,
            image: characterFormData.image,
            name: characterFormData.name,
            age: characterFormData.age,
            background: characterFormData.background,
            hobbies: characterFormData.hobbies
        }
        console.log(charData);
        const char = await formAPI.sendForm(charData)
        console.log(char);
        navigate('/all-characters')
    } catch (error) {
        console.error(error)
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    //same as e.target.name and e.target.value
    console.log(name, value);
    setCharacterFormData((prevData) => ({
        //receives current state previousData as the argument, returns new state object
        ...prevData,
        [name] : value
    }))
  };

  // const handleEdit=()=> {

  // }

  const handleClear = () => {
    setCharacterFormData({
      image: "",
      name: "",
      age: "",
      background: "",
      hobbies: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange} onClick={handleClear}>
        <label>Image:</label> 
        <input type="text" name="image" value = {characterFormData.image} />

        <label>Name:</label>
        <input type="text" name="name" value={characterFormData.name} />

        <label>Age:</label>
        <input type="number" name="age" value={characterFormData.age}  />

        <label>Background:</label>
        <input type="text" name="background" value={characterFormData.background} />

        <label>Hobbies:</label>
        <input type="text" name="hobbies" value={characterFormData.hobbies} />

        <button type="submit">Submit</button>
      <button onClick={handleClear}>Clear</button>
      </form>
      <button >Edit</button>
    </div>
  );
}


