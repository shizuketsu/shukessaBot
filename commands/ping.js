const discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'pong',
    async execute(msg, args) {
        msg.channel.send('Pong!');
    }
}