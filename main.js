console.log ( 'Beep Beep! 🤖')
require('dotenv').config();


const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.once('ready',() => {
    console.log('WEBWIZ is online!');
}); 
















