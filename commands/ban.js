const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban',
    async execute(msg, args) {
        if(!msg.member.permissions.has(PermissionFlagsBits.BanMembers)) return msg.reply('You do not have enough rights for this command');
        
        const user = msg.mentions.members.first();
        
        if (!user) return msg.reply('Specify the user to ban');
        else if (user.id === msg.author.id) return msg.reply('You can\'t ban yourself');
        else if (user.id === msg.guild.ownerId) return msg.reply('You can\'t ban the owner');
        else if (user.roles.highest.position >= msg.member.roles.highest.position) return msg.reply('You cannot ban a member with a higher role than you');

        try {
            await user.ban({ reason: args.slice(1).join(' ') || 'Not specified' });
            msg.channel.send(`User ${user.displayName} was banned by ${msg.author.displayName}.`);
        } catch (e) {
            return msg.reply('Failed to ban the user');
        }
    }
}