import { useState } from "react";

export function CharacterForm({
  user,
  createCharacter,
  character,
  updateCharacter,
}) {
  //createCharacter and updateCharacter are setter functions

  const [characterFormData, setCharacterFormData] = useState({
    image: "",
    name: "",
    age: "",
    background: "",
    hobbies: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    //same as e.target.name and e.target.value
    console.log(name, value);
    setCharacterFormData((prevData) => ({
        ...prevData,
        [name] : value
    }))
  };

  const handleEdit=()=> {

  }

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


