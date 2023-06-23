const Character = require("../../models/characters")

//* This file communicates with the mongoDB using mongoose keywords such as create, findbyID and so on, communicates with mongoDB requires an async await as it is connecting through an API. Parsing the data into json. Requesting mongoDB and receiving a response 


async function createCharacter(req,res){
    try {
        const character = await Character.create(req.body);
        res.json(character)
    } catch (error) {
        console.error(error)
    }
}

async function getCharacter(req,res){
    try {
        const character = await Character.findById(req.params.id)
        res.json(character)
    } catch (error) {
        console.error(error)
    }
}

async function editCharacter(req,res){
    try {
        const character = await Character.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(character)
    } catch (error) {
        console.error(error)
    }
}


async function deleteCharacter(req,res){
    try {
        const character = await Character.findByIdAndRemove(req.params.id)
        res.json(character)
    } catch (error) {
        console.error(error)
    }
}

async function allCharacters(req,res){
    try {
        const characters = await Character.find({})
        res.json(characters)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createCharacter, deleteCharacter, allCharacters, editCharacter, getCharacter
}