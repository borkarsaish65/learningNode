const chalk = require('chalk');
const fs = require('fs');
const getNotes = function()
{
    const string = 'Your notes are .. ';
    return string;
}
const addnote = (title,body) => {
const notes = loadNotes()
const duplicateNotes = notes.filter(note => note.title === title)

if(duplicateNotes.length === 0)
{ 
notes.push({
    title:title,
    body:body
})
saveNotes(notes)
console.log('New note added');
}
else
{
    console.log("Note Title taken!");
}

}


// removeNote function 
const removeNote = title => {
    const notes = loadNotes();
    const notesTokeep = notes.filter(note =>note.title !== title)
    if(notes.length > notesTokeep.length)
    {
        console.log(chalk.inverse('Note removed'));
            
saveNotes(notesTokeep);
    }    
    else{
        console.log(chalk.red.inverse("no notes found"));
    }
}
const saveNotes =notes =>
{
const dataJson = JSON.stringify(notes);
fs.writeFileSync('notes.json',dataJson);
}



//loadNotes function 
const loadNotes =() => {

    try{
        const dataBuffer = fs.readFileSync('notes.json');
const dataJson = dataBuffer.toString();
return JSON.parse(dataJson);

    }catch(e){
            return []
    }

}

console.log('Update to Github');

module.exports = {
getNotes : getNotes,
addNote : addnote,
removeNote:removeNote
};