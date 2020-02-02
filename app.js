const yargs = require('yargs');
const chalk = require('chalk');
const add = require('./notes');

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
        console.log('Title:'+argv.title);
        console.log('Description:'+argv.body);

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



yargs.parse();
