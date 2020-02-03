const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            description:'Note description',
            demandOption:true,
            type:'string'
        }

    },
    handler:function (argv){
    notes.addNote(argv.title,argv.body)

    }
})

//create remove command 
yargs.command({
    command:'remove',
    describe:'removes specified notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
    },
    handler:function (argv){
        notes.removeNote(argv.title);
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'list notes',
    handler:function(){
    notes.listNotes();
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'reads specified notes',
    handler:function(argv){
    notes.readNotes(argv.title);
    }
})



yargs.parse();
