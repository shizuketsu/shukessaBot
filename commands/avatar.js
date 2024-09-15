const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'avatar',
    async execute(msg, args) {
        const mentionedUsers = msg.mentions.users;
        const user = args[0] && mentionedUsers.size > 0 ? mentionedUsers.first() : msg.author;

        const embed = new EmbedBuilder()
            .setColor('#92a2ff')
            .setTitle('Avatar of ' + user.username + ':')
            .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setFooter({ text: 'Requested by ' + msg.author.username, iconURL: msg.author.displayAvatarURL() });

        msg.channel.send({ embeds: [embed] });
    }
}