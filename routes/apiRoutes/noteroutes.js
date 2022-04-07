const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { note } = require('../../db/db.json')
const { createNote, findById, editNote, removeNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(note);
});

router.post('/notes', (req, res) => {

    if (!req.body.id) {
        req.body.id = uuidv4();
        createNote(req.body, note);
    } else {
        editNote(req.body, note);
    }

    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, note);

    removeNote(note, note);
    res.json();
});

module.exports = router;