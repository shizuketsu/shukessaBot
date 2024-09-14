const discord = require('discord.js');

module.exports = {
    name: 'test',
    description: 'test',
    async execute(msg, args) {
        msg.channel.send(args[0] + '|' + args[1] + '|' + args[2]);
    }
}