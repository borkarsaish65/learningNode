const yargs = require('yargs');
const chalk = require('chalk');
const add = require('./notes');

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    handler:function (){
        console.log('Adding a new note!');
    }
})

//create remove command 
yargs.command({
    command:'remove',
    describe:'removes specified notes',
    handler:function(){
        console.log('Removing specified notes');
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'list notes',
    handler:function(){
        console.log('Listing all the notes');
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'reads specified notes',
    handler:function(){
        console.log('Reads a specified notes');
    }
})




console.log(yargs.argv);

