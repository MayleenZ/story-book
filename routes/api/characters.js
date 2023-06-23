const express = require('express')
const router = express.Router()
const charCtrl = require('../../controllers/api/characters')

router.get('/all-char', charCtrl.allCharacters)
router.get(':/id', charCtrl.getCharacter)
router.post('/create-char', charCtrl.createCharacter)
router.delete('/all-char/:id', charCtrl.deleteCharacter)
router.put('/edit-char/:id', charCtrl.editCharacter)

module.exports = router;