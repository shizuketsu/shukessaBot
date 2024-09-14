const { EmbedBuilder } = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'user',
    description: 'user',
    async execute(msg, args) {
        const mentionedUsers = msg.mentions.users;
        const user = args[0] && mentionedUsers.size > 0 ? mentionedUsers.first() : msg.author;
        const status = user.presence ? user.presence.status : 'offline';

        const embed = new EmbedBuilder()
            .setColor('#92a2ff')
            .setTitle('Information about ' + user.tag + ':')
            .setThumbnail(user.displayAvatarURL())
            .setDescription('**Username:** `' + user.displayName + ' ('+ user.tag +')`\n**Status:** `' + status + '`\n**UID:** `' + user.id + '`')
            .setFooter({ text: 'Requested by ' + msg.author.username, iconURL: msg.author.displayAvatarURL() });

        msg.channel.send({ embeds: [embed] });
    }
}