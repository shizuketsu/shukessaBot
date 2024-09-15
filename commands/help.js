const { EmbedBuilder } = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'help',
    async execute(msg, args) {
        const embed = new EmbedBuilder()
            .setColor('#92a2ff')
            .setTitle('Commands:')
            .setDescription('**📋 Information commands**\n`' + prefix + 'help`, `' + prefix + 'info`, `' + prefix + 'serverinfo`, `' + prefix + 'user`\n\n**🛡️ Moderation commands**\n`' + prefix + 'ban`, `' + prefix + 'kick`\n\n**😄 Fun commands**\n`' + prefix + 'cat`, `' + prefix + 'dog`, `' + prefix + 'ask`' + '\n\n**🔧 Utility commands**\n`' + prefix + 'avatar`, `' + prefix + 'ping`, `' + prefix + 'rand`')
            .setFooter({ text: 'Requested by ' + msg.author.username, iconURL: msg.author.displayAvatarURL() }); 

        msg.channel.send({ embeds: [embed] });
    }
}