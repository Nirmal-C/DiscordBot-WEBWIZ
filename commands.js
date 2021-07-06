const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

const replies = [
    'Hi ✋',
    'Hello There 😊',
    'Hey, Its pleasure to meet you 😉',
    'Nice to meet you 💖',
    'You are awesome 😍'
]

module.exports =function(message) {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user)) {

        const index = Math.floor(Math.random() * replies.length);
        message.reply(replies[index]);
    }
};