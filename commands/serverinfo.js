const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'serverinfo',
    async execute(msg, args) {
        const owner = await msg.guild.fetchOwner();

        const embed = new EmbedBuilder()
            .setColor('#92a2ff')
            .setTitle('Information about ' + msg.guild.name + ':')
            .setDescription('**Members:** `' + msg.guild.memberCount + '`\n**Channels:** `' + msg.guild.channels.cache.size + '`\n**Owner:** `' + owner.user.tag + '`')
            .setFooter({ text: 'Requested by ' + msg.author.username, iconURL: msg.author.displayAvatarURL() });

        msg.channel.send({ embeds: [embed] });
    }
}