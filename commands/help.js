const { EmbedBuilder } = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'help',
    async execute(msg, args) {
        const embed = new EmbedBuilder()
            .setColor('#92a2ff')
            .setTitle('Commands:')
            .setDescription('📋 Information commands\n`' + prefix + 'help`, `' + prefix + 'info`, `' + prefix + 'serverinfo`, `' + prefix + 'user`')
            .setFooter({ text: 'Requested by ' + msg.author.username, iconURL: msg.author.displayAvatarURL() });

        msg.channel.send({ embeds: [embed] });
    }
}