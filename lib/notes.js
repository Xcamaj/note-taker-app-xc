const fs = require('fs')
const path = require('path')

const createNote = (note, noteArray) => {
    noteArray.push(note)

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
        JSON.stringify({ note: noteArray }, null, 2)

    )
}

module.exports= {createNote}