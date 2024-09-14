const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'info',
    description: 'send information about bot',
    async execute(msg, args) {
        const embed = new EmbedBuilder()
            .setColor('#92a2ff')
            .setTitle('Information:')
            .setDescription('Bot made by **shizuketsu**\nDiscord: **reqonce**\nGitHub: [link](https://github.com/shizuketsu/)')
            .setFooter({ text: 'Requested by ' + msg.author.username, iconURL: msg.author.displayAvatarURL() });

        msg.channel.send({ embeds: [embed] });
    }
}