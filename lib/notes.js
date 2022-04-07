const fs = require('fs')
const path = require('path')

const createNote = (note, noteArray) => {
    noteArray.push(note)

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
        JSON.stringify({ note: noteArray }, null, 2)

    )
}

const editNote = (editedNote, notesArray) => {
    const index = notesArray.findIndex(note => note.id === editedNote.id);

    notesArray.splice(index, 1);
    notesArray.splice(index, 0, editedNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
};

module.exports= { createNote, editNote }