const yargs = require('yargs');
const chalk = require('chalk');
const add = require('./notes');

const command = process.argv[3];

console.log(yargs.argv);

if(command === 'add')
{
    console.log("Adding Notes");
}
else if (command === 'remove')
{
    console.log("Removing Notes");
} 

