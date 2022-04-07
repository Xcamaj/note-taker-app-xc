const router = require('express').Router();
const { note } = require('../../db/db.json')
const { createNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(note)
})

router.post('/notes', (req, res) => {
    if (!req.body.id) {
        createNote(req.body, note);
    }
})

module.exports = router;