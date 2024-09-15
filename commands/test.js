const discord = require('discord.js');

module.exports = {
    name: 'test',
    description: 'test',
    async execute(msg, args) {
        msg.reply(args[0] + '|' + args[1] + '|' + args[2]);
    }
}