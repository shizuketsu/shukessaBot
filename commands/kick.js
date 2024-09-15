const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick',
    async execute(msg, args) {
        if(!msg.member.permissions.has(PermissionFlagsBits.KickMembers)) return msg.reply('You do not have enough rights for this command');
        
        const user = msg.mentions.members.first();
        
        if (!user) return msg.reply('Specify the user to kick');
        else if (user.id === msg.author.id) return msg.reply('You can\'t kick yourself');
        else if (user.id === msg.guild.ownerId) return msg.reply('You can\'t kick the owner');
        else if (user.roles.highest.position >= msg.member.roles.highest.position) return msg.reply('You cannot kick a member with a higher role than you');

        try {
            await user.kick({ reason: args.slice(1).join(' ') || 'Not specified' });
            msg.channel.send(`User ${user.displayName} was kicked by ${msg.author.displayName}.`);
        } catch (e) {
            return msg.reply('Failed to kick the user');
        }
    }
}