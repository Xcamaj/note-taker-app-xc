const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { note } = require('../../db/db.json')
const { createNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(note)
})

router.post('/notes', (req, res) => {
    if (!req.body.id) {
        req.body.id = uuidv4();
        createNote(req.body, note);
    }else {
        editNote(req.body, note)
    }
    res.json(req.body);
});

module.exports = router;