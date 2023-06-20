const mongoose = require('mongoose')
require('mongoose-type-url')

const characterSchema = new mongoose.Schema({
    image: {type: mongoose.SchemaTypes.Url, required: true},
    name: {type: String, required: true},
    age: {type: Number, min: 1, max: 100, required: true},
    background: {type: String, required: true},
    hobbies: [String]
})

console.log(characterSchema);

//- image (url string)
// - name (string)
// - age (number)
// - background (string)
// - hobbies [array of strings]

module.exports = mongoose.model('Character', characterSchema);